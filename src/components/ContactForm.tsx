"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("https://formspree.io/f/mgvkeoej", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("sent");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Your name"
        required
        className="w-full border p-2 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        className="w-full border p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Your message"
        rows={5}
        required
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send"}
      </button>
      {status === "sent" && <p className="text-green-600">Message sent ✅</p>}
      {status === "error" && <p className="text-red-600">Failed to send ❌</p>}
    </form>
  );
}
