"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"

export default function OpsPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

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

      const blocks = section.querySelectorAll(".ops-block")
      if (blocks.length > 0) {
        gsap.from(blocks, {
          y: 24,
          opacity: 0,
          duration: 0.65,
          stagger: 0.06,
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
            Internal Ops
          </span>
          <h1 className="mt-5 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight leading-[0.9]">
            CLIENT
            <br />
            PROCESS
          </h1>
          <p className="mt-6 text-foreground/60 font-mono text-xs uppercase tracking-[0.2em]">
            Confidential · Internal Use Only
          </p>
          <p className="mt-8 text-lg text-foreground/75 leading-relaxed max-w-2xl">
            Standard start-to-finish workflow, links, timing rules, and email templates.
            Keep every client on the same track.
          </p>
        </div>

        {/* Master Sequence */}
        <div className="ops-block mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
            Master Sequence
          </h2>
          <div className="space-y-5">
            {[
              ["01", "Lead comes in", "Conversation / inquiry"],
              ["02", "Send proposal", "/proposal"],
              ["03", "Client selects package", "Email notification received"],
              ["04", "Send agreement", "/client"],
              ["05", "Send onboarding", "/onboarding"],
              ["06", "Collect payment", "Stripe Payment Link"],
              ["07", "Start work", "Design / build begins"],
              ["08", "Design review rounds", "/approve"],
              ["09", "Final approval", "/approve"],
              ["10", "Launch", "Go live"],
              ["11", "Request review", "/review"],
            ].map(([num, title, detail]) => (
              <div key={num} className="flex gap-5 border-b border-border/20 pb-4">
                <span className="font-mono text-xs text-accent pt-0.5 w-6">
                  {num}
                </span>
                <div>
                  <p className="text-sm text-foreground/90">{title}</p>
                  <p className="text-xs text-foreground/50 mt-1 font-mono tracking-wide">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="ops-block mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
            Core Links
          </h2>
          <div className="space-y-3 text-sm">
            <p>
              <span className="text-foreground/50 font-mono text-xs tracking-wide mr-3">
                PROPOSAL
              </span>
              <a href="/proposal" className="hover:text-accent transition-colors">
                /proposal
              </a>
            </p>
            <p>
              <span className="text-foreground/50 font-mono text-xs tracking-wide mr-3">
                AGREEMENT
              </span>
              <a href="/client" className="hover:text-accent transition-colors">
                /client
              </a>
            </p>
            <p>
              <span className="text-foreground/50 font-mono text-xs tracking-wide mr-3">
                ONBOARDING
              </span>
              <a href="/onboarding" className="hover:text-accent transition-colors">
                /onboarding
              </a>
            </p>
            <p>
              <span className="text-foreground/50 font-mono text-xs tracking-wide mr-3">
                APPROVE
              </span>
              <a href="/approve" className="hover:text-accent transition-colors">
                /approve
              </a>
            </p>
            <p>
              <span className="text-foreground/50 font-mono text-xs tracking-wide mr-3">
                REVIEW
              </span>
              <a href="/review" className="hover:text-accent transition-colors">
                /review
              </a>
            </p>
          </div>
        </div>

        {/* Timing Rules */}
        <div className="ops-block mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
            Timing Rules
          </h2>
          <div className="space-y-3 text-sm text-foreground/75 leading-relaxed">
            <p>1. Never ask for payment before onboarding is complete.</p>
            <p>2. Never start production before payment clears (unless intentionally flexible on Open Water).</p>
            <p>3. Every design delivery uses /approve.</p>
            <p>4. /review is only post-launch.</p>
            <p>5. Open Water requires written scope + price before Stripe.</p>
          </div>
        </div>

        {/* Checklist */}
        <div className="ops-block mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
            Per-Client Checklist
          </h2>
          <div className="space-y-2 text-sm text-foreground/75 font-mono">
            <p>□ Proposal sent</p>
            <p>□ Package selected</p>
            <p>□ Agreement sent (/client)</p>
            <p>□ Onboarding complete</p>
            <p>□ Payment received</p>
            <p>□ Work started</p>
            <p>□ Design round(s) via /approve</p>
            <p>□ Final approval</p>
            <p>□ Launched</p>
            <p>□ Google review requested</p>
          </div>
        </div>

        {/* Email Templates */}
        <div className="ops-block mb-16">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
            Email Templates
          </h2>

          <div className="space-y-10">
            {/* 1 */}
            <div className="border border-border/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
                01 · Proposal Send
              </p>
              <p className="text-xs text-foreground/50 mb-4 font-mono">
                Subject: Rowgle project options
              </p>
              <pre className="whitespace-pre-wrap text-sm text-foreground/75 leading-relaxed font-sans">
{`Hey [Name],

Great talking with you.

Here’s our standard project options page. Pick the package that fits best, and add monthly care only if you want ongoing support after launch.

Review options here:
https://rowgle.com/proposal

Once you confirm direction, I’ll send next steps.

— Nick
Rowgle`}
              </pre>
            </div>

            {/* 2 */}
            <div className="border border-border/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
                02 · Agreement
              </p>
              <p className="text-xs text-foreground/50 mb-4 font-mono">
                Subject: Next step — agreement
              </p>
              <pre className="whitespace-pre-wrap text-sm text-foreground/75 leading-relaxed font-sans">
{`Hey [Name],

Got your package selection — thank you.

Next step is a quick agreement review:
https://rowgle.com/client

Once that’s done, I’ll send the project kickoff form.

— Nick
Rowgle`}
              </pre>
            </div>

            {/* 3 */}
            <div className="border border-border/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
                03 · Onboarding
              </p>
              <p className="text-xs text-foreground/50 mb-4 font-mono">
                Subject: Project kickoff form
              </p>
              <pre className="whitespace-pre-wrap text-sm text-foreground/75 leading-relaxed font-sans">
{`Hey [Name],

Ready for kickoff.

Please complete this short onboarding form so we can start with clear goals, assets, and timeline:
https://rowgle.com/onboarding

As soon as that’s in, I’ll send payment details and we can get moving.

— Nick
Rowgle`}
              </pre>
            </div>

            {/* 4 */}
            <div className="border border-border/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
                04 · Payment
              </p>
              <p className="text-xs text-foreground/50 mb-4 font-mono">
                Subject: Payment link — [Package Name]
              </p>
              <pre className="whitespace-pre-wrap text-sm text-foreground/75 leading-relaxed font-sans">
{`Hey [Name],

Onboarding received — thank you.

Here’s the secure payment link for [Lodge / Dam Built / Full Stream / Open Water]:
[STRIPE LINK]

Once payment clears, we start work.

If you selected monthly care, that begins once the project is active and is billed separately.

— Nick
Rowgle`}
              </pre>
            </div>

            {/* 5 */}
            <div className="border border-border/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
                05 · Work Started
              </p>
              <p className="text-xs text-foreground/50 mb-4 font-mono">
                Subject: We’re underway
              </p>
              <pre className="whitespace-pre-wrap text-sm text-foreground/75 leading-relaxed font-sans">
{`Hey [Name],

Payment received and you’re officially in production.

I’ll keep communication tight and send the first review link when concepts are ready.

— Nick
Rowgle`}
              </pre>
            </div>

            {/* 6 */}
            <div className="border border-border/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
                06 · Design Review
              </p>
              <p className="text-xs text-foreground/50 mb-4 font-mono">
                Subject: Design ready for review
              </p>
              <pre className="whitespace-pre-wrap text-sm text-foreground/75 leading-relaxed font-sans">
{`Hey [Name],

First pass is ready.

Please review the files/link sent above, then submit your decision here:
https://rowgle.com/approve

You can approve and continue, or request revisions with notes.

— Nick
Rowgle`}
              </pre>
            </div>

            {/* 7 */}
            <div className="border border-border/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
                07 · Revisions
              </p>
              <p className="text-xs text-foreground/50 mb-4 font-mono">
                Subject: Updated design ready
              </p>
              <pre className="whitespace-pre-wrap text-sm text-foreground/75 leading-relaxed font-sans">
{`Hey [Name],

Revisions are in.

Please review and submit your response here:
https://rowgle.com/approve

— Nick
Rowgle`}
              </pre>
            </div>

            {/* 8 */}
            <div className="border border-border/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
                08 · Final Approval
              </p>
              <p className="text-xs text-foreground/50 mb-4 font-mono">
                Subject: Final approval before launch
              </p>
              <pre className="whitespace-pre-wrap text-sm text-foreground/75 leading-relaxed font-sans">
{`Hey [Name],

We’re at final review.

If everything looks good, approve here so we can move to launch:
https://rowgle.com/approve

— Nick
Rowgle`}
              </pre>
            </div>

            {/* 9 */}
            <div className="border border-border/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
                09 · Launch
              </p>
              <p className="text-xs text-foreground/50 mb-4 font-mono">
                Subject: You’re live
              </p>
              <pre className="whitespace-pre-wrap text-sm text-foreground/75 leading-relaxed font-sans">
{`Hey [Name],

You’re live.

Site: [URL]

If anything small needs adjusting in the first few days, just reply here.
If you’re on a monthly care plan, you’re already covered.

— Nick
Rowgle`}
              </pre>
            </div>

            {/* 10 */}
            <div className="border border-border/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
                10 · Google Review
              </p>
              <p className="text-xs text-foreground/50 mb-4 font-mono">
                Subject: Quick favor
              </p>
              <pre className="whitespace-pre-wrap text-sm text-foreground/75 leading-relaxed font-sans">
{`Hey [Name],

Hope the new site is treating you well.

If you’re happy with the work, a short Google review helps a lot:
https://rowgle.com/review

Appreciate you.

— Nick
Rowgle`}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border/20 flex items-center justify-between gap-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Rowgle · Internal Ops
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