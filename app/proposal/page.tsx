"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"

export default function ProposalPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [packageChoice, setPackageChoice] = useState("")
  const [carePlan, setCarePlan] = useState("none")
  const [accepted, setAccepted] = useState(false)
  const [notes, setNotes] = useState("")

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

      const blocks = section.querySelectorAll(".proposal-block")
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

  const handleSubmit = () => {
    const packageLabel =
  packageChoice === "lodge"
    ? "Lodge — $1,800"
    : packageChoice === "dam-built"
      ? "Dam Built — $3,500"
      : packageChoice === "full-stream"
        ? "Full Stream — $5,500"
        : packageChoice === "open-water"
          ? "Open Water — Custom / Contract-Based"
          : "None selected"

    const careLabel =
      carePlan === "steady"
        ? "Steady — $49/mo"
        : carePlan === "managed"
          ? "Managed — $89/mo"
          : "No monthly care plan"

    const subject = encodeURIComponent("Proposal Selection — Rowgle")
    const body = encodeURIComponent(
      `A client has submitted a proposal selection.\n\n` +
        `Full Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${company || "N/A"}\n\n` +
        `Selected Package: ${packageLabel}\n` +
        `Monthly Care: ${careLabel}\n\n` +
        `Notes:\n${notes || "None"}\n\n` +
        `Submitted: ${new Date().toLocaleString()}`
    )
    window.location.href = `mailto:hello@rowgle.com?subject=${subject}&body=${body}`
  }

  const isValid =
    name.trim().length > 1 &&
    email.trim().length > 5 &&
    packageChoice !== "" &&
    accepted

  return (
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <section
        ref={sectionRef}
        className="relative z-10 pt-28 pb-40 px-6 md:px-12 max-w-3xl mx-auto"
      >
        {/* Brand Mark */}
        <div className="mb-14 flex items-center gap-4">
          <img
            src="/beaver.png"
            alt="Rowgle"
            className="h-12 w-auto opacity-90"
          />
          <div className="h-px flex-1 bg-border/30" />
        </div>

        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Project Proposal
          </span>
          <h1 className="mt-5 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight leading-[0.9]">
            CHOOSE
            <br />
            YOUR BUILD
          </h1>
          <p className="mt-6 text-foreground/60 font-mono text-xs uppercase tracking-[0.2em]">
            Standard Engagement Options
          </p>
          <p className="mt-8 text-lg text-foreground/75 leading-relaxed max-w-2xl">
            Review the packages below, select what fits, and confirm your direction.
            We’ll follow up with agreement details and payment next.
          </p>
        </div>

        {/* How it works */}
        <div className="proposal-block mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
            How It Works
          </h2>
          <div className="space-y-6">
            <div className="flex gap-5">
              <span className="font-mono text-xs text-accent pt-1">01</span>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Review project packages and optional monthly care.
              </p>
            </div>
            <div className="flex gap-5">
              <span className="font-mono text-xs text-accent pt-1">02</span>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Select your preferred options and confirm below.
              </p>
            </div>
            <div className="flex gap-5">
              <span className="font-mono text-xs text-accent pt-1">03</span>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Rowgle sends your formal next steps, agreement, and payment link.
              </p>
            </div>
          </div>
        </div>
{/* Project Packages */}
<div className="proposal-block mb-16">
  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
    Project Packages
  </h2>

  <div className="space-y-4">
    {/* Lodge */}
    <button
      type="button"
      onClick={() => setPackageChoice("lodge")}
      className={`w-full text-left border p-6 transition-colors ${
        packageChoice === "lodge"
          ? "border-accent"
          : "border-border/40 hover:border-foreground/40"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
            Package 01
          </div>
          <h3 className="text-2xl mb-2">Lodge</h3>
          <p className="text-sm text-foreground/65 leading-relaxed">
            A clean, sharp business website. Designed and built to launch
            with clarity and zero template energy.
          </p>
        </div>
        <div className="font-mono text-sm whitespace-nowrap pt-1">
          $1,800
        </div>
      </div>
    </button>

    {/* Dam Built */}
    <button
      type="button"
      onClick={() => setPackageChoice("dam-built")}
      className={`w-full text-left border p-6 transition-colors ${
        packageChoice === "dam-built"
          ? "border-accent"
          : "border-border/40 hover:border-foreground/40"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
            Package 02
          </div>
          <h3 className="text-2xl mb-2">Dam Built</h3>
          <p className="text-sm text-foreground/65 leading-relaxed">
            Brand identity plus a full custom website. For teams ready
            to look established and move with confidence.
          </p>
        </div>
        <div className="font-mono text-sm whitespace-nowrap pt-1">
          $3,500
        </div>
      </div>
    </button>

    {/* Full Stream */}
    <button
      type="button"
      onClick={() => setPackageChoice("full-stream")}
      className={`w-full text-left border p-6 transition-colors ${
        packageChoice === "full-stream"
          ? "border-accent"
          : "border-border/40 hover:border-foreground/40"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
            Package 03
          </div>
          <h3 className="text-2xl mb-2">Full Stream</h3>
          <p className="text-sm text-foreground/65 leading-relaxed">
            Complete brand and web system. Expanded structure, stronger
            foundation, and room to grow without rebuilding later.
          </p>
        </div>
        <div className="font-mono text-sm whitespace-nowrap pt-1">
          $5,500
        </div>
      </div>
    </button>

    {/* Open Water */}
    <button
      type="button"
      onClick={() => setPackageChoice("open-water")}
      className={`w-full text-left border p-6 transition-colors ${
        packageChoice === "open-water"
          ? "border-accent"
          : "border-border/40 hover:border-foreground/40"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
            Package 04
          </div>
          <h3 className="text-2xl mb-2">Open Water</h3>
          <p className="text-sm text-foreground/65 leading-relaxed">
            Custom, contract-based work for one-off projects.
            Scope and investment are defined together based on what the job actually needs.
          </p>
        </div>
        <div className="font-mono text-sm whitespace-nowrap pt-1">
          Custom
        </div>
      </div>
    </button>
  </div>
</div>

        {/* Monthly Care */}
        <div className="proposal-block mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
            Monthly Care
          </h2>
          <p className="text-sm text-foreground/65 leading-relaxed mb-8">
            Optional. Keep things maintained without scrambling later.
          </p>

          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setCarePlan("none")}
              className={`w-full text-left border p-5 transition-colors ${
                carePlan === "none"
                  ? "border-accent"
                  : "border-border/40 hover:border-foreground/40"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="mb-1">No monthly plan</h3>
                  <p className="text-sm text-foreground/60">
                    Support billed separately if needed later.
                  </p>
                </div>
                <div className="font-mono text-sm">$0</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setCarePlan("steady")}
              className={`w-full text-left border p-5 transition-colors ${
                carePlan === "steady"
                  ? "border-accent"
                  : "border-border/40 hover:border-foreground/40"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="mb-1">Steady</h3>
                  <p className="text-sm text-foreground/60">
                    Light upkeep, small edits, basic ongoing support.
                  </p>
                </div>
                <div className="font-mono text-sm">$49/mo</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setCarePlan("managed")}
              className={`w-full text-left border p-5 transition-colors ${
                carePlan === "managed"
                  ? "border-accent"
                  : "border-border/40 hover:border-foreground/40"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="mb-1">Managed</h3>
                  <p className="text-sm text-foreground/60">
                    Priority fixes, domain help, and ongoing minor updates.
                  </p>
                </div>
                <div className="font-mono text-sm">$89/mo</div>
              </div>
            </button>
          </div>

          <p className="mt-6 text-sm text-foreground/55 leading-relaxed border-l border-border/40 pl-4">
            Monthly care is optional. Without an active plan, future edits and fixes
            are billed separately and usually cost more over time than simply
            staying on a care plan.
          </p>
        </div>

        {/* Payments */}
<div className="proposal-block mb-16">
  <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
    Payments
  </h2>
  <div className="space-y-4 text-sm text-foreground/75 leading-relaxed">
    <p>
      Selecting a package confirms your preferred direction — it is not payment.
    </p>
    <p>
      After your selection is received, Rowgle will guide you through agreement
      review and onboarding. Payment is initiated after those steps are complete,
      through a secure digital Stripe link.
    </p>
    <p>
      If you choose a monthly care plan, that subscription begins once the project
      is active and is billed separately on a recurring basis. You can cancel anytime.
      Receipts are provided automatically for your records.
    </p>
  </div>
</div>

        {/* Terms */}
        <div className="proposal-block mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
            Standard Terms
          </h2>
          <div className="space-y-3 text-sm text-foreground/70 leading-relaxed">
            <p>• Package selection confirms direction, not final legal execution.</p>
            <p>• Formal agreement and payment details are sent after confirmation.</p>
            <p>• Scope adjustments may affect timeline and investment.</p>
            <p>• Work begins after agreement confirmation and payment.</p>
          </div>
        </div>

        {/* Confirmation form */}
        <div className="proposal-block mb-16 pt-10 border-t border-border/30">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
            Confirm Direction
          </h2>

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
                placeholder="Your full name"
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
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                Company
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-transparent border border-border/40 focus:border-accent px-4 py-3 text-sm outline-none transition-colors"
                placeholder="Optional"
              />
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                Notes
              </label>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-transparent border border-border/40 focus:border-accent px-4 py-3 text-sm outline-none transition-colors resize-none"
                placeholder="Anything we should know before next steps"
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
                I have reviewed the package options and would like to proceed
                with the selected direction. I understand Rowgle will follow up
                with agreement and payment details.
              </span>
            </label>

            <button
              disabled={!isValid}
              onClick={handleSubmit}
              className="font-mono text-xs uppercase tracking-[0.25em] border border-foreground/30 hover:border-accent hover:text-accent px-8 py-4 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Confirm Selection →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border/20 flex items-center justify-between gap-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Rowgle · Proposal
          </p>
          <img
            src="/orangeharp.png"
            alt=""
            className="h-10 w-auto opacity-40"
          />
        </div>
      </section>
    </main>
  )
}