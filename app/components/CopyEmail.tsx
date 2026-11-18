"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const copy = async () => {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch { setState("failed"); }
  };
  return <div className="copy-email-row"><button type="button" className="copy-email" onClick={copy}>{state === "copied" ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}{state === "copied" ? "Copied" : "Copy email"}</button><p role="status" aria-live="polite" className="copy-status">{state === "copied" ? "Email address copied." : state === "failed" ? "Copy unavailable. Select the address above or use the email link." : ""}</p></div>;
}
