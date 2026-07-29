"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"

export default function ClientPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [accepted, setAccepted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        })
      }

      const blocks = section.querySelectorAll(".client-block")
      if (blocks.length > 0) {
        gsap.from(blocks, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.1,
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <section
        ref={sectionRef}
        className="relative z-10 pt-28 pb-40 px-6 md:px-12 max-w-3xl mx-auto"

      >

        {/* Logo */}
<div className="mb-12">
  <img
    src="/beaver.png"
    alt="Rowgle"
    className="h-10 w-auto"
  />
</div>

        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Client Portal
          </span>
          <h1 className="mt-5 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight leading-[0.9]">
            PROJECT
            <br />
            ACCESS
          </h1>
          <p className="mt-6 text-foreground/60 font-mono text-xs uppercase tracking-[0.2em]">
            Confidential · Client Use Only
          </p>
        </div>

        {/* Intro */}
        <div className="client-block mb-16">
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
            This page is provided for project agreement review and payment.
            Use the information sent to you by Rowgle to complete the next steps.
          </p>
        </div>

        {/* Intro */}
<div className="client-block mb-16">
  <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
    This page is provided for project agreement review and payment.
    Use the information sent to you by Rowgle to complete the next steps.
  </p>
</div>

{/* Process */}
<div className="client-block mb-16">
  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
    Next Steps
  </h2>

  <div className="space-y-8">
    <div className="flex gap-5">
      <span className="font-mono text-xs text-accent pt-1">01</span>
      <div>
        <h3 className="text-foreground mb-2">Review Agreement</h3>
        <p className="text-sm text-foreground/65 leading-relaxed">
          Open the contract or project summary sent to you by email.
          Confirm scope, timeline, and investment details.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <span className="font-mono text-xs text-accent pt-1">02</span>
      <div>
        <h3 className="text-foreground mb-2">Complete Payment</h3>
        <p className="text-sm text-foreground/65 leading-relaxed">
          Use the secure Stripe payment link provided in your project email
          to complete payment. Receipts are issued automatically.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <span className="font-mono text-xs text-accent pt-1">03</span>
      <div>
        <h3 className="text-foreground mb-2">Confirm Acceptance</h3>
        <p className="text-sm text-foreground/65 leading-relaxed">
          After reviewing terms, complete the acknowledgment below
          so we can begin scheduled work.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Standard Terms */}
<div className="client-block mb-16">
  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
    Standard Terms
  </h2>
  <div className="space-y-4 text-sm text-foreground/75 leading-relaxed">
    <p>• All design work and materials remain the property of Rowgle until full payment is received.</p>
    <p>• Approved scope changes may adjust timeline and fees.</p>
    <p>• Invoices are due upon receipt unless otherwise stated in writing.</p>
    <p>• Project discussions and materials remain confidential.</p>
    <p>• This engagement is governed by the laws of the State of Texas.</p>
  </div>
</div>

{/* Revisions */}
<div className="client-block mb-16">
  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
    Revisions
  </h2>
  <p className="text-sm text-foreground/75 leading-relaxed">
    Project fees include a defined number of revision rounds as outlined in your agreement.
    Additional revisions or scope changes requested after approval may require adjusted
    timing and investment.
  </p>
</div>

{/* After Payment */}
<div className="client-block mb-16">
  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
    After Payment
  </h2>
  <div className="space-y-4 text-sm text-foreground/75 leading-relaxed">
    <p>• Work begins once payment and agreement confirmation are received.</p>
    <p>• You’ll receive a kickoff message with next steps and initial timeline.</p>
    <p>• Primary point of contact remains your Rowgle project lead.</p>
  </div>
</div>

{/* Payment */}
<div className="client-block mb-16">
  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
    Payment
  </h2>
  <p className="text-foreground/80 leading-relaxed">
    A unique Stripe payment link is sent with your project details.
    If you cannot locate it, contact{" "}
    <a href="mailto:hello@rowgle.com" className="text-accent hover:underline">
      hello@rowgle.com
    </a>
    .
  </p>
</div>

        {/* Process */}
        <div className="client-block mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
            Next Steps
          </h2>

          <div className="space-y-8">
            <div className="flex gap-5">
              <span className="font-mono text-xs text-accent pt-1">01</span>
              <div>
                <h3 className="text-foreground mb-2">Review Agreement</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  Open the contract or project summary sent to you by email.
                  Confirm scope, timeline, and investment details.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="font-mono text-xs text-accent pt-1">02</span>
              <div>
                <h3 className="text-foreground mb-2">Complete Payment</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  Use the secure Stripe payment link provided in your project email
                  to complete payment. Receipts are issued automatically.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="font-mono text-xs text-accent pt-1">03</span>
              <div>
                <h3 className="text-foreground mb-2">Confirm Acceptance</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  After reviewing terms, complete the acknowledgment below
                  so we can begin scheduled work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Summary */}
        <div className="client-block mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
            Standard Terms
          </h2>
          <div className="space-y-4 text-sm text-foreground/75 leading-relaxed">
            <p>• All design work and materials remain the property of Rowgle until full payment is received.</p>
            <p>• Approved scope changes may adjust timeline and fees.</p>
            <p>• Invoices are due upon receipt unless otherwise stated in writing.</p>
            <p>• This engagement is governed by the laws of the State of Texas.</p>
          </div>
        </div>

        {/* Payment note */}
        <div className="client-block mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
            Payment
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            A unique Stripe payment link is sent with your project details.
            If you cannot locate it, contact{" "}
            <a href="mailto:hello@rowgle.com" className="text-accent hover:underline">
              hello@rowgle.com
            </a>
            .
          </p>
        </div>

        {/* Acceptance */}
<div className="client-block mb-16 pt-10 border-t border-border/30">
  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
    Acknowledgment
  </h2>
  <p className="text-foreground/80 leading-relaxed mb-8">
    By completing this section, you confirm that you have reviewed the project agreement
    and terms provided by Rowgle.
  </p>

  <div className="space-y-6">
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">
        Full Name
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-transparent border border-border/40 focus:border-accent px-4 py-3 text-sm outline-none transition-colors"
        placeholder="Enter your full name"
      />
    </div>

    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">
        Email
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-transparent border border-border/40 focus:border-accent px-4 py-3 text-sm outline-none transition-colors"
        placeholder="Enter your email"
      />
    </div>

    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={accepted}
        onChange={(e) => setAccepted(e.target.checked)}
        className="mt-1"
      />
      <span className="text-sm text-foreground/75 leading-relaxed">
        I have reviewed and agree to the project terms provided by Rowgle.
      </span>
    </label>

    <button
      disabled={!accepted || name.trim().length < 2 || email.trim().length < 5}
      onClick={() => {
        const subject = encodeURIComponent("Client Agreement Confirmation")
        const body = encodeURIComponent(
          `A client has confirmed agreement on the Rowgle Client Portal.\n\nFull Name: ${name}\nEmail: ${email}\nDate: ${new Date().toLocaleString()}`
        )
        window.location.href = `mailto:hello@rowgle.com?subject=${subject}&body=${body}`
      }}
      className="font-mono text-xs uppercase tracking-[0.25em] border border-foreground/30 hover:border-accent hover:text-accent px-8 py-4 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
    >
      Confirm Agreement
    </button>
  </div>
</div>

        {/* Footer */}
        <div className="pt-8 border-t border-border/20">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Rowgle · Client Portal
          </p>
        </div>
      </section>
    </main>
  )
}