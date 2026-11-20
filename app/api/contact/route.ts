const maxBodyBytes = 24_576;

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return Response.json({ error: "Expected a contact form submission." }, { status: 415 });
  }

  let data: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Missing request body");
    const decoder = new TextDecoder();
    let bytes = 0;
    let body = "";
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBodyBytes) {
        await reader.cancel();
        return Response.json({ error: "Message is too large." }, { status: 413 });
      }
      body += decoder.decode(value, { stream: true });
    }
    data = JSON.parse(body + decoder.decode());
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const fields = (data ?? {}) as Record<string, unknown>;
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";
  if (fields.website) return Response.json({ ok: true });
  if (!name || name.length > 100 || /[\r\n]/.test(name) || email.length > 254 || !/^[^\s@]+@[^\s@]+$/.test(email) || !message || message.length > 3000) {
    return Response.json({ error: "Check your name, email, and message." }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!token || !/^\d+:[\w-]+$/.test(token) || !chatId) {
    return Response.json({ error: "Message delivery is unavailable." }, { status: 503 });
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: `New portfolio message\n\nName: ${name}\nReply email: ${email}\n\n${message}`,
        link_preview_options: { is_disabled: true },
      }),
      redirect: "error",
      signal: AbortSignal.timeout(8_000),
    });
    if (response.ok && (await response.json()).ok === true) return Response.json({ ok: true });
  } catch {
    // Keep Telegram response details and credentials out of the form response.
  }
  return Response.json({ error: "Message delivery could not be confirmed." }, { status: 502 });
}
