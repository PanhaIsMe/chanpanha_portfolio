"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const sending = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "invalid" | "error">("idle");

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    sending.current = true;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        setStatus(response.status === 400 ? "invalid" : "error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  return <div className="contact-form-panel">
    <h2 id="message-heading">Send me a message.</h2>
    <p id="message-description">Your message and reply email go to my Telegram.</p>
    <form action="/api/contact" method="post" onSubmit={sendMessage} aria-labelledby="message-heading" aria-describedby="message-description">
      <fieldset disabled={status === "sending"} className="contact-form-fields">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" autoComplete="name" maxLength={100} required />
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required />
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={5} maxLength={3000} required />
        <input name="website" type="text" autoComplete="off" hidden />
        <button type="submit" className="button">{status === "sending" ? "Sending…" : "Send message"} <Send size={17} aria-hidden="true" /></button>
      </fieldset>
      <p className="contact-form-status" role="status">{status === "sent" && "Message sent. Thanks for reaching out."}{status === "invalid" && "Please check your name, email, and message and try again."}{status === "error" && "Your message could not be confirmed. Try again or reach me by email."}</p>
    </form>
  </div>;
}
