"use client";

import { useState } from "react";
import { contactForm as f } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const inputCls =
    "w-full rounded-lg border border-sage bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 focus:border-ever focus:outline-none focus:ring-2 focus:ring-ever/25";
  const labelCls = "mb-1.5 block text-[13px] font-medium text-ink/70";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      clinic: fd.get("clinic"),
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      topic: fd.get("topic"),
      message: fd.get("message"),
      company: fd.get("company"), // honeypot
    };

    if (!payload.clinic || !payload.name || !payload.email) {
      setStatus("error");
      setErrorMsg(f.required);
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.error || f.error);
      }
    } catch {
      setStatus("error");
      setErrorMsg(f.error);
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex min-h-[280px] flex-col items-center justify-center text-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ever/10 text-[22px] text-ever">
          ✓
        </div>
        <p className="mt-4 text-[16px] font-medium text-ink">{f.success}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-[13px] font-medium text-ever underline-offset-2 hover:underline"
        >
          もう一度送る
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="clinic" className={labelCls}>
            {f.labels.clinic} <span className="text-ever">必須</span>
          </label>
          <input id="clinic" name="clinic" type="text" required className={inputCls} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="name" className={labelCls}>
            {f.labels.name} <span className="text-ever">必須</span>
          </label>
          <input id="name" name="name" type="text" required className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            {f.labels.email} <span className="text-ever">必須</span>
          </label>
          <input id="email" name="email" type="email" required className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            {f.labels.phone}
          </label>
          <input id="phone" name="phone" type="tel" className={inputCls} autoComplete="tel" />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className={labelCls}>
          {f.topicLabel}
        </label>
        <select id="topic" name="topic" defaultValue={f.topics[0]} className={inputCls}>
          {f.topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          {f.labels.message}
        </label>
        <textarea id="message" name="message" rows={4} className={inputCls} />
      </div>

      {/* ハニーポット（非表示・ボット対策） */}
      <div aria-hidden="true" className="absolute left-[-9999px]" tabIndex={-1}>
        <label>
          会社名（入力しないでください）
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="text-[13px] font-medium text-[#B42318]">
          {errorMsg || f.error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? f.sending : f.submit}
      </button>
    </form>
  );
}
