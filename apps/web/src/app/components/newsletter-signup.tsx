'use client';
import React, { useState } from "react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

interface NewsletterSignupProps {
  variant?: "light" | "dark";
  title?: string;
  subtitle?: string;
}

/**
 * Email capture for new-product / restock alerts. Currently stores nothing
 * server-side — wire the `handleSubmit` below up to EmailJS (already a
 * project dependency, see the contact form) or a real mailing-list
 * provider when ready.
 */
const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = "light",
  title = "Never miss a new can",
  subtitle = "Get an email the moment a new Switchoff flavour or restock drops.",
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // TODO: replace with a real subscribe call (EmailJS / Mailchimp / etc.)
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-xl2 p-6 sm:p-8 ${
        isDark ? "bg-brand-950 text-white" : "card-surface"
      }`}
    >
      <div className="mx-auto max-w-xl text-center">
        <h3 className={`text-xl font-bold sm:text-2xl ${isDark ? "text-white" : "text-gray-900 dark:text-white"}`}>
          {title}
        </h3>
        <p className={`mt-2 text-sm ${isDark ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}>{subtitle}</p>

        {status === "success" ? (
          <div className="mt-5 flex items-center justify-center gap-2 font-semibold text-emerald-500">
            <FaCheckCircle /> You&apos;re on the list!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`input-field flex-1 ${isDark ? "border-white/20 bg-white/10 text-white placeholder:text-white/50" : ""}`}
            />
            <button type="submit" disabled={status === "submitting"} className="btn-primary shrink-0">
              {status === "submitting" ? "Sending..." : (
                <>
                  Notify Me <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
