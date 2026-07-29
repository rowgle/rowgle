"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ServicesPage() {
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

      const blocks = section.querySelectorAll(".service-block")
      if (blocks.length) {
        gsap.from(blocks, {
          y: 50,
          opacity: 0,
          duration: 0.9,
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
        <div ref={headerRef} className="mb-28 max-w-4xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            05 / Services
          </span>
          <h1 className="mt-5 font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight leading-[0.9]">
            WHAT WE<br />ACTUALLY DO
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            We don’t offer packages. We build systems — visual, digital, and operational —
            that hold up under real pressure.
          </p>
        </div>

        <div className="max-w-4xl space-y-32">
          {/* ===================== CREATIVE ===================== */}
          <div className="service-block">
            <div className="flex items-baseline gap-6 mb-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                01
              </span>
              <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight">
                CREATIVE
              </h2>
            </div>

            <div className="space-y-16">
              {/* Brand Identity */}
              <div id="brand-identity" className="scroll-mt-32">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Brand Identity
                </h3>
                <p className="text-foreground/85 text-lg leading-relaxed max-w-2xl">
                  We build brands that feel inevitable. Naming, positioning, visual systems,
                  and language that actually mean something. No generic logos. No moodboard
                  recycling. Just clear, durable identity work designed to last.
                </p>
              </div>

              {/* Visual Systems */}
              <div id="visual-systems" className="scroll-mt-32">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Visual Systems
                </h3>
                <p className="text-foreground/85 text-lg leading-relaxed max-w-2xl">
                  Beyond the mark. We design the full system — type, color, imagery rules,
                  layout principles, and application guidelines — so your brand stays consistent
                  without becoming rigid.
                </p>
              </div>

              {/* Art Direction */}
              <div id="art-direction" className="scroll-mt-32">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Art Direction
                </h3>
                <p className="text-foreground/85 text-lg leading-relaxed max-w-2xl">
                  Campaigns, photography direction, illustration systems, and visual storytelling.
                  We set the standard and make sure every piece that leaves the studio holds
                  the same level of intention.
                </p>
              </div>
            </div>
          </div>

          {/* ===================== DIGITAL ===================== */}
          <div className="service-block">
            <div className="flex items-baseline gap-6 mb-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                02
              </span>
              <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight">
                DIGITAL
              </h2>
            </div>

            <div className="space-y-16">
              {/* Web Experiences */}
              <div id="web-experiences" className="scroll-mt-32">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Web Experiences
                </h3>
                <p className="text-foreground/85 text-lg leading-relaxed max-w-2xl">
                  Custom-built websites with no templates and no bloat. Clean architecture,
                  strong performance, and design that feels deliberate. We build sites that
                  look expensive and function under real use.
                </p>
              </div>

              {/* Digital Products */}
              <div id="digital-products" className="scroll-mt-32">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Digital Products
                </h3>
                <p className="text-foreground/85 text-lg leading-relaxed max-w-2xl">
                  Interfaces, tools, and product surfaces. We design and develop digital
                  experiences that prioritize clarity, speed, and long-term maintainability
                  over trends.
                </p>
              </div>

              {/* Content Systems */}
              <div id="content-systems" className="scroll-mt-32">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Content Systems
                </h3>
                <p className="text-foreground/85 text-lg leading-relaxed max-w-2xl">
                  Newsletters, presentations, training materials, and internal communications.
                  We build the structure and visual language so your content stays consistent
                  and professional across every channel.
                </p>
              </div>
            </div>
          </div>

          {/* Closing */}
<div className="service-block pt-12 border-t border-border/30">
  <p className="font-[var(--font-bebas)] text-3xl md:text-5xl tracking-tight leading-tight text-foreground/90 max-w-3xl">
    WE DON’T FILL TIME.<br />
    WE BUILD THINGS THAT HOLD.
  </p>

  {/* Designed in USA */}
  <div className="mt-10 flex items-center gap-3">
    <img
      src="/orangeflag.png"
      alt="USA Flag"
      className="h-5 w-auto"
    />
    <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
      Designed in USA
    </span>
  </div>

  <div className="mt-12">
    <Link
      href="/inquiry"
      className="inline-block font-mono text-xs uppercase tracking-[0.25em] border border-foreground/30 hover:border-accent hover:text-accent px-8 py-4 transition-colors duration-200"
    >
      Start a Project →
    </Link>
  </div>
</div>
        </div>

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