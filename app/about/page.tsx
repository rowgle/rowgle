"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
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
      {/* Background elements matching the rest of the site */}
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <section
        ref={sectionRef}
        className="relative z-10 pt-32 pb-40 pl-6 md:pl-28 pr-6 md:pr-12"
      >
        {/* Header */}
        <div ref={headerRef} className="mb-24 max-w-4xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            01 / About
          </span>
          <h1 className="mt-5 font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight leading-[0.9]">
            BUILT FROM<br />THE INSIDE
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Rowgle was forged by someone who has operated at the highest levels of security —
            not as an outsider looking in, but as a practitioner who understands what defense
            companies actually need.
          </p>
        </div>

        {/* Content Blocks */}
        <div ref={contentRef} className="max-w-4xl space-y-20">
          {/* Origin */}
          <div className="about-block">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              Origin
            </h3>
            <div className="space-y-6 text-foreground/85 leading-relaxed text-base md:text-lg">
              <p>
                Rowgle was developed by a former law enforcement officer who now operates at the
                director level inside the Department of Defense ecosystem. His day-to-day work
                centers on personnel security clearances, physical security programs, and the
                protection of facilities that handle classified information — as well as those
                that do not.
              </p>
              <p>
                That background is not a footnote. It is the foundation. When you have spent years
                protecting the things that cannot fail, you develop a different standard for
                everything else you build.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="about-block">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              Mission
            </h3>
            <div className="space-y-6 text-foreground/85 leading-relaxed text-base md:text-lg">
              <p>
                Rowgle exists to deliver premium branding and digital design specifically for
                defense contractors and the broader national security community. We understand the
                culture, the constraints, and the quiet professionalism that defines this industry.
              </p>
              <p>
                While defense remains our primary focus, the same standard of craft applies across
                any sector. The goal is the same: elevate a brand past industry norms and into
                something that feels deliberate, sharp, and built to last.
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
                We do not treat design as decoration. Every decision — from type and color to
                structure and interaction — is made with the same discipline required in high-stakes
                environments. Clarity over noise. Precision over excess. Substance over trends.
              </p>
              <p>
                The result is work that feels intentional. Work that earns trust. Work that
                performs under pressure.
              </p>
            </div>
          </div>

          {/* Closing statement */}
          <div className="about-block pt-12 border-t border-border/30">
            <p className="font-[var(--font-bebas)] text-3xl md:text-5xl tracking-tight text-foreground/90 leading-tight">
              DESIGNED WITH THE SAME STANDARD<br />
              USED TO PROTECT WHAT MATTERS.
            </p>
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