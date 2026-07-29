"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HarpyPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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

      if (contentRef.current) {
        const blocks = contentRef.current.querySelectorAll(".about-block")
        gsap.from(blocks, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

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
<div ref={headerRef} className="mb-24 max-w-4xl">
  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
    02 / Harpy Industries
  </span>

  <h1 className="mt-5 font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight leading-[0.9]">
    SECURITY WITHOUT<br />THE OVERHEAD
  </h1>

  {/* Logo */}
  <div className="mt-10 mb-2">
    <img
      src="/harpysig.png"
      alt="Harpy Industries"
      className="h-28 md:h-32 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
    />
  </div>

  <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
    Harpy Industries provides Facility Security Officer and Personnel Security
    Management support for defense contractors who need experienced coverage —
    without the cost of a full-time hire.
  </p>
</div>

        {/* Content */}
        <div ref={contentRef} className="max-w-4xl space-y-20">
          {/* The Problem */}
          <div className="about-block">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              The Reality
            </h3>
            <div className="space-y-6 text-foreground/85 leading-relaxed text-base md:text-lg">
              <p>
                Many DoD contractors operate at a scale where a full-time Facility Security
                Officer or dedicated Personnel Security manager is difficult to justify.
                The requirements, however, do not scale down. Clearance processing,
                self-inspections, training, incident response, and continuous monitoring
                still have to be handled correctly.
              </p>
              <p>
                Gaps in these areas create risk. Harpy Industries was built to close that gap.
              </p>
            </div>
          </div>

          {/* What We Provide */}
          <div className="about-block">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              What We Provide
            </h3>
            <div className="space-y-6 text-foreground/85 leading-relaxed text-base md:text-lg">
              <p>
                Harpy Industries delivers experienced FSO and PERSEC support on a consulting
                and remote stand-in basis. We step into the role when a company needs
                qualified coverage but does not yet require (or cannot yet sustain) a
                full-time security professional on staff.
              </p>
              <p>
                Support can include day-to-day program management, clearance processing
                oversight, self-inspection preparation, security education and training,
                policy development, and ongoing advisory work — all performed to the
                standard expected inside the cleared community.
              </p>
            </div>
          </div>

          {/* Approach */}
          <div className="about-block">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              Approach
            </h3>
            <div className="space-y-6 text-foreground/85 leading-relaxed text-base md:text-lg">
              <p>
                This is not generic consulting. The work is performed by someone who currently
                operates at the director level in DoD security, managing both personnel
                security and physical security programs for facilities that handle
                classified information.
              </p>
              <p>
                The standard is the same whether the engagement is short-term coverage or
                ongoing support: protect the program, reduce risk, and keep the company
                audit-ready.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="about-block pt-12 border-t border-border/30">
            <p className="font-[var(--font-bebas)] text-3xl md:text-5xl tracking-tight text-foreground/90 leading-tight">
              EXPERIENCED COVERAGE.<br />
              WITHOUT THE FULL-TIME COST.
            </p>
          </div>
        </div>

        {/* External Site Link */}
<div className="mt-16">
  <a
    href="https://harpyindustries.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block font-mono text-xs uppercase tracking-[0.25em] border border-foreground/30 hover:border-accent hover:text-accent px-8 py-4 transition-colors duration-200"
  >
    Visit Harpy Industries →
  </a>
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