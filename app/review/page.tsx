"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ReviewPage() {
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
        gsap.from(contentRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const googleReviewUrl = "https://g.page/r/CYuVQVFTwOHyEBM/review"
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(googleReviewUrl)}&bgcolor=080808&color=f2f2f2&margin=12`

  return (
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <section
        ref={sectionRef}
        className="relative z-10 pt-32 pb-40 pl-6 md:pl-28 pr-6 md:pr-12"
      >
        {/* Header */}
        <div ref={headerRef} className="mb-20 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            04 / Review
          </span>
          <h1 className="mt-5 font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight leading-[0.9]">
            LEAVE A<br />REVIEW
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            If we delivered strong work for you, a Google review helps more than you know.
            It takes less than a minute and means a great deal.
          </p>
        </div>

        {/* Content */}
        <div ref={contentRef} className="max-w-2xl space-y-16">
          {/* QR + Button */}
          <div className="flex flex-col sm:flex-row items-start gap-10">
            {/* QR Code */}
            <div className="border border-border/40 p-5 bg-background/50">
              <img
                src={qrCodeUrl}
                alt="Scan to leave a Google review"
                width={220}
                height={220}
                className="block"
              />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center">
                Scan to Review
              </p>
            </div>

            {/* Text CTA */}
            <div className="pt-2">
              <p className="text-foreground/80 leading-relaxed mb-8 max-w-sm">
                Prefer the direct link? Click below to open the Google review page.
              </p>
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-xs uppercase tracking-[0.25em] border border-foreground/30 hover:border-accent hover:text-accent px-8 py-4 transition-colors duration-200"
              >
                Leave a Google Review →
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="pt-10 border-t border-border/30">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Stay Connected
            </h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://x.com/rowgle"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-foreground/80 hover:text-accent transition-colors"
              >
                X / @rowgle
              </a>
              <a
                href="https://www.instagram.com/rowgle"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-foreground/80 hover:text-accent transition-colors"
              >
                Instagram / @rowgle
              </a>
            </div>
          </div>

          {/* Logo + Closing */}
<div className="pt-6">
  <img
    src="/orangeflag.png"
    alt="Rowgle"
    className="h-12 md:h-14 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 mb-8"
  />
  <p className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground/90">
    APPRECIATE THE SUPPORT.
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