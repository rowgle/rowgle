"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function LegalPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
      }

      const blocks = section.querySelectorAll(".legal-block")

      if (blocks.length > 0) {
        gsap.from(blocks, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
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
        className="relative z-10 pt-32 pb-40 pl-6 md:pl-28 pr-6 md:pr-12"
      >
        {/* Header */}
        <div ref={headerRef} className="mb-24 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Legal
          </span>
          <h1 className="mt-5 font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight leading-[0.9]">
            LEGAL
          </h1>
          <p className="mt-8 text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Last updated: July 2026
          </p>
        </div>

        <div className="max-w-3xl space-y-24">
          {/* Privacy Policy */}
          <div id="privacy" className="legal-block scroll-mt-32">
            <h2 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-8">
              PRIVACY POLICY
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Rowgle (“we”, “us”, or “our”) respects your privacy. This Privacy Policy explains
                how we collect, use, and protect information when you interact with our website
                or engage our services.
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
                Information We Collect
              </h3>
              <p>
                We may collect personal information you voluntarily provide, including your name,
                email address, company name, phone number, and any details submitted through our
                inquiry form. We may also collect limited technical data such as browser type and
                IP address for security and performance purposes.
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
                How We Use Information
              </h3>
              <p>
                Information is used to respond to inquiries, deliver services, improve our website,
                and communicate with you about projects. We do not sell personal information.
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
                Data Protection
              </h3>
              <p>
                We take reasonable administrative and technical measures to protect information
                under our control. However, no method of transmission over the internet is
                completely secure.
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
                Contact
              </h3>
              <p>
                For privacy-related questions, contact us at{" "}
                <a href="mailto:hello@rowgle.com" className="text-accent hover:underline">
                  hello@rowgle.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Terms of Service */}
          <div id="terms" className="legal-block scroll-mt-32">
            <h2 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-8">
              TERMS OF SERVICE
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                By accessing this website or engaging Rowgle for services, you agree to these Terms.
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
                Services
              </h3>
              <p>
                Rowgle provides branding, web design, development, and related creative services.
                Harpy Industries provides Facility Security Officer and Personnel Security
                consulting support. Scope, deliverables, and fees are defined in individual
                project agreements.
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
                Intellectual Property
              </h3>
              <p>
                All design work, code, and materials created by Rowgle remain our intellectual
                property until full payment is received, at which point agreed-upon deliverables
                are transferred to the client as specified in the project agreement.
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
                Limitation of Liability
              </h3>
              <p>
                To the fullest extent permitted by law, Rowgle and Harpy Industries shall not be
                liable for any indirect, incidental, or consequential damages arising from the
                use of our website or services.
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
                Governing Law
              </h3>
              <p>
                These Terms are governed by the laws of the State of Texas.
              </p>
            </div>
          </div>

          {/* Data & Security Disclaimer */}
          <div id="data" className="legal-block scroll-mt-32">
            <h2 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-8">
              DATA & SECURITY DISCLAIMER
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Harpy Industries provides Facility Security Officer (FSO) and Personnel Security
                (PERSEC) consulting and remote support services. This work is advisory and
                operational in nature.
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
                No Legal Advice
              </h3>
              <p>
                Information and support provided by Harpy Industries does not constitute legal
                advice. Clients remain responsible for compliance with all applicable laws,
                regulations, and contractual security requirements.
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
                Client Responsibility
              </h3>
              <p>
                Ultimate responsibility for security programs, clearance processing, self-inspections,
                and compliance rests with the client organization. Harpy Industries supports these
                efforts but does not assume ownership of the client’s security program unless
                explicitly agreed in writing.
              </p>

              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
                Classification & Controlled Information
              </h3>
              <p>
                Clients must not transmit classified or controlled unclassified information to
                Rowgle or Harpy Industries through unapproved channels. All handling of sensitive
                information must follow applicable government and contractual requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-24">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-accent transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}