"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function UnbuiltPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const state = formData.get("state") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const currentWeb = formData.get("currentWeb") as string
    const domainStatus = formData.get("domainStatus") as string
    const hasLogo = formData.get("hasLogo") as string
    const launchWindow = formData.get("launchWindow") as string
    const whatYouDo = formData.get("whatYouDo") as string
    const primaryCustomer = formData.get("primaryCustomer") as string
    const whyNoSite = formData.get("whyNoSite") as string
    const heardAbout = formData.get("heardAbout") as string
    const anythingElse = formData.get("anythingElse") as string

    const subject = encodeURIComponent(`UNBUILT Application — ${company}`)
    const body = encodeURIComponent(
      `UNBUILT APPLICATION\n\n` +
        `Name: ${name}\n` +
        `Company (legal): ${company}\n` +
        `State of registration: ${state}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || "—"}\n\n` +
        `Current web presence: ${currentWeb || "—"}\n` +
        `Domain status: ${domainStatus || "—"}\n` +
        `Logo status: ${hasLogo || "—"}\n` +
        `Ideal launch window: ${launchWindow || "—"}\n` +
        `How they heard about this: ${heardAbout || "—"}\n\n` +
        `What the business does:\n${whatYouDo}\n\n` +
        `Primary customer:\n${primaryCustomer}\n\n` +
        `Why no website yet:\n${whyNoSite}\n\n` +
        `Anything else:\n${anythingElse || "—"}\n\n` +
        `Confirmations:\n` +
        `- Decision-maker: Yes\n` +
        `- Fixed Stream scope + 2 revisions: Yes\n` +
        `- Portfolio use OK: Yes\n` +
        `- Understand applications may be declined: Yes`
    )

    window.location.href = `mailto:hello@rowgle.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <section
        ref={sectionRef}
        className="relative z-10 pt-32 pb-40 pl-6 md:pl-28 pr-6 md:pr-12"
      >
        {/* Header */}
        <div ref={headerRef} className="mb-16 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            00 / Unbuilt
          </span>
          <h1 className="mt-5 font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight leading-[0.9]">
            NO SITE.<br />
            ONE BUILD.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            One registered U.S. business with no active marketing website gets a
            Full Stream package — on us. Not a raffle. First qualified applicant.
          </p>
        </div>

        {/* What you get / don't */}
        <div className="max-w-2xl mb-14 grid md:grid-cols-2 gap-6">
          <div className="border border-border/40 p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
              What you get
            </p>
            <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed">
              <li>Full Stream package</li>
              <li>Scope matches /proposal</li>
              <li>Mobile-responsive build</li>
              <li>Two revision rounds</li>
              <li>Deployed to your domain</li>
              <li>~14–21 days after assets in</li>
            </ul>
          </div>
          <div className="border border-border/40 p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              What you don’t
            </p>
            <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed">
              <li>Unlimited revisions</li>
              <li>Ongoing monthly retainer</li>
              <li>Custom apps / ecommerce catalogs</li>
              <li>Full brand identity systems</li>
              <li>Rush weekend delivery</li>
              <li>Transferable “free credit”</li>
            </ul>
          </div>
        </div>

        {/* Rules */}
        <div className="max-w-2xl mb-20 border border-border/40 p-6 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-5">
            Rules
          </p>
          <ul className="space-y-3 text-sm text-foreground/75 leading-relaxed">
            <li>
              <span className="text-foreground">One winner</span> — first qualified,
              not first to submit.
            </li>
            <li>
              Must be a <span className="text-foreground">U.S.-registered business</span> with
              no active marketing website.
            </li>
            <li>
              Decision-maker only. Verification + short agreement required before work starts.
            </li>
            <li>
              Scope is fixed to the{" "}
              <Link href="/proposal" className="text-accent hover:underline">
                Full Stream package
              </Link>
              . Two revision rounds. Portfolio rights with approval.
            </li>
            <li>
              Rowgle may decline any application that doesn’t meet eligibility.
            </li>
          </ul>
        </div>

        {/* Form or Success */}
        <div className="max-w-2xl">
          {submitted ? (
            <div className="border border-border/40 p-10 md:p-14">
              <p className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-4">
                APPLICATION SENT
              </p>
              <p className="text-foreground/70 leading-relaxed mb-2">
                Your email client should have opened with a pre-filled application.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                If it didn’t, email{" "}
                <a
                  href="mailto:hello@rowgle.com"
                  className="text-accent hover:underline"
                >
                  hello@rowgle.com
                </a>{" "}
                with the subject line{" "}
                <span className="text-foreground">UNBUILT Application</span>.
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
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Your Name
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
                  Company Legal Name
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  State of Registration
                </label>
                <input
                  type="text"
                  name="state"
                  required
                  placeholder="e.g. Texas"
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/40"
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
                  Current web presence
                </label>
                <select
                  name="currentWeb"
                  required
                  className="w-full bg-background border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors appearance-none"
                >
                  <option value="">Select one…</option>
                  <option value="None">None</option>
                  <option value="Social only">Social only</option>
                  <option value="Old / dead site">Old / dead site</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Domain status
                </label>
                <select
                  name="domainStatus"
                  required
                  className="w-full bg-background border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors appearance-none"
                >
                  <option value="">Select one…</option>
                  <option value="No domain yet">No domain yet</option>
                  <option value="Own domain, no site">Own domain, no site</option>
                  <option value="Need help getting a domain">
                    Need help getting a domain
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Logo status
                </label>
                <select
                  name="hasLogo"
                  required
                  className="w-full bg-background border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors appearance-none"
                >
                  <option value="">Select one…</option>
                  <option value="Yes — have a logo">Yes — have a logo</option>
                  <option value="In progress">In progress</option>
                  <option value="No logo yet">No logo yet</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Ideal launch window
                </label>
                <select
                  name="launchWindow"
                  required
                  className="w-full bg-background border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors appearance-none"
                >
                  <option value="">Select one…</option>
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="Within 30 days">Within 30 days</option>
                  <option value="Within 60 days">Within 60 days</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  What the business does
                </label>
                <textarea
                  name="whatYouDo"
                  required
                  rows={4}
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Who is your primary customer?
                </label>
                <textarea
                  name="primaryCustomer"
                  required
                  rows={3}
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Why no website yet
                </label>
                <textarea
                  name="whyNoSite"
                  required
                  rows={4}
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  How did you hear about this?
                </label>
                <input
                  type="text"
                  name="heardAbout"
                  required
                  placeholder="e.g. Instagram, X, referral"
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/40"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Anything else we should know?{" "}
                  <span className="text-muted-foreground/50">(optional)</span>
                </label>
                <textarea
                  name="anythingElse"
                  rows={3}
                  className="w-full bg-transparent border border-border/50 focus:border-accent px-5 py-4 text-sm outline-none transition-colors resize-none"
                />
              </div>

              {/* Confirmations */}
              <div className="space-y-4 border border-border/30 p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="decisionMaker" required className="mt-1" />
                  <span className="text-sm text-foreground/80">
                    I am the decision-maker for this business.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="scope" required className="mt-1" />
                  <span className="text-sm text-foreground/80">
                    I agree to the fixed Full Stream package scope and 2 revision rounds.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="portfolio" required className="mt-1" />
                  <span className="text-sm text-foreground/80">
                    Rowgle may feature this project in portfolio and social (with approval).
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="decline" required className="mt-1" />
                  <span className="text-sm text-foreground/80">
                    I understand Rowgle may decline any application that doesn’t meet eligibility.
                  </span>
                </label>
              </div>

              <div className="border border-border/30 p-5">
  <p className="text-sm text-foreground/75 leading-relaxed">
    Review the{" "}
    <Link href="/unbuilt-agreement" className="text-accent hover:underline">
      Unbuilt Agreement
    </Link>{" "}
    before you submit. Submitting an application means you acknowledge those terms.
  </p>
</div>

              <button
                type="submit"
                className="mt-4 font-mono text-xs uppercase tracking-[0.25em] border border-foreground/30 hover:border-accent hover:text-accent px-8 py-4 transition-colors duration-200"
              >
                Submit Application
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