"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function InquiryPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
      }
      if (formRef.current) {
        gsap.from(formRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/xppaweon", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <section
        ref={sectionRef}
        className="relative z-10 pt-32 pb-40 pl-6 md:pl-28 pr-6 md:pr-12"
      >
        <div ref={headerRef} className="mb-20 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            03 / Inquiry
          </span>
          <h1 className="mt-5 font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight leading-[0.9]">
            START A<br />
            CONVERSATION
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Tell us about your project or security needs. We’ll review and respond promptly.
          </p>
        </div>

        <div className="max-w-2xl">
          {submitted ? (
            <div className="border border-border/40 p-10 md:p-14">
              <p className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-4">
                MESSAGE RECEIVED
              </p>
              <p className="text-foreground/70 leading-relaxed mb-2">
                Thanks — your inquiry is in. We’ll review and get back to you shortly.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Prefer email? Reach us at{" "}
                <a
                  href="mailto:hello@rowgle.com"
                  className="text-accent hover:underline"
                >
                  hello@rowgle.com
                </a>
                .
              </p>
              <Link
                href="/"
                className="inline-block mt-10 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-accent transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <input type="hidden" name="_subject" value="New Rowgle Inquiry" />
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Phone <span className="text-muted-foreground/50">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Interest
                </label>
                <select
                  name="interest"
                  className="w-full bg-background border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors appearance-none"
                >
                  <option value="">Select one…</option>
                  <option value="Branding & Identity">Branding & Identity</option>
                  <option value="Web Design / Development">Web Design / Development</option>
                  <option value="FSO / PERSEC Support">FSO / PERSEC Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Project / Inquiry Details
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="font-mono text-xs text-red-400">
                  Something went wrong. Try again or email hello@rowgle.com.
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="mt-4 font-mono text-xs uppercase tracking-[0.25em] border border-foreground/30 hover:border-accent hover:text-accent px-8 py-4 transition-colors duration-200 disabled:opacity-50"
              >
                {sending ? "Sending…" : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>

        {!submitted && (
          <div className="mt-20">
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}