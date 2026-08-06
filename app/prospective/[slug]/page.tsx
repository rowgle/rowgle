type Props = {
  params: Promise<{ slug: string }> | { slug: string }
}

export default async function ProspectivePage({ params }: Props) {
  await Promise.resolve(params) // keeps route dynamic; content is for this pitch

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Photo placement: full-bleed hero vehicle wrap shot */}
        <div className="absolute inset-0 bg-zinc-950">
          <div className="absolute inset-0 flex items-center justify-center border border-dashed border-white/10 m-6 rounded-2xl">
            <p className="text-xs tracking-[0.25em] uppercase text-white/30 text-center px-4">
              [ HERO IMAGE — full vehicle wrap / before-after ]
            </p>
          </div>
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
          <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-white/50 mb-8">
            Concept Design · Prepared by Rowgle
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-6">
            EMERGE
            <br />
            FROM BASIC
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-12 font-light">
            Custom vehicle wraps, fleet graphics, and paint protection film —
            built for drivers and businesses who refuse to blend in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block px-10 py-4 border border-white text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-2xl"
            >
              Get a Quote
            </a>
            <a
              href="#work"
              className="inline-block px-10 py-4 border border-white/40 text-sm tracking-[0.2em] uppercase hover:border-white transition-all duration-300 rounded-2xl"
            >
              See the Work
            </a>
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="py-28 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            {/* Photo placement */}
            <div className="aspect-[4/5] rounded-2xl border border-dashed border-white/15 flex items-center justify-center bg-zinc-950">
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 text-center px-4">
                [ PHOTO — shop / install in progress ]
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Vinyl Solutions · DFW
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              Turn heads.
              <br />
              Stand out from the crowd.
            </h2>
            <p className="text-white/65 leading-relaxed mb-6">
              Vinyl Solutions is committed to helping clients stand out. Everyone
              should have the chance to show their character, brand, purpose, and
              flair. We’ve studied wraps, films, and specialty applications —
              what works, what lasts, and what makes people look twice.
            </p>
            <p className="text-white/65 leading-relaxed">
              When you drive away, you should do it with confidence in the work
              and a finished product that matches the vision.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="work" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Services
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              What we wrap
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors duration-300">
              <div className="aspect-video rounded-xl border border-dashed border-white/10 flex items-center justify-center bg-zinc-950 mb-8">
                <p className="text-[10px] tracking-[0.15em] uppercase text-white/25 text-center px-3">
                  [ PHOTO — personal vehicle wrap ]
                </p>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                Personal Vehicle Wraps
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Racing stripes, full or partial wraps, and custom graphics.
                Protect the finish or completely change the look — reversible,
                without damaging original paint.
              </p>
            </div>

            {/* Service 2 */}
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors duration-300">
              <div className="aspect-video rounded-xl border border-dashed border-white/10 flex items-center justify-center bg-zinc-950 mb-8">
                <p className="text-[10px] tracking-[0.15em] uppercase text-white/25 text-center px-3">
                  [ PHOTO — commercial / fleet wrap ]
                </p>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                Commercial & Fleet
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Your vehicles are moving billboards. Custom fleet wraps that
                elevate advertising, reinforce the brand, and stay sharp on the
                road.
              </p>
            </div>

            {/* Service 3 */}
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors duration-300">
              <div className="aspect-video rounded-xl border border-dashed border-white/10 flex items-center justify-center bg-zinc-950 mb-8">
                <p className="text-[10px] tracking-[0.15em] uppercase text-white/25 text-center px-3">
                  [ PHOTO — PPF detail / clear bra ]
                </p>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                Paint Protective Film
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                High-grade PPF (including XPEL and similar) to shield paint from
                rocks, scratches, and wear — so the investment stays clean longer.
              </p>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {["Full & Partial Wraps", "Racing Stripes", "Wall Wraps", "Vinyl Graphics"].map(
              (item) => (
                <div
                  key={item}
                  className="border border-white/10 rounded-xl py-4 px-3 text-sm text-white/60"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========== WHY ========== */}
      <section className="py-28 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Why Vinyl Solutions
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Built different
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <p className="text-white/30 text-sm tracking-widest mb-3">01</p>
              <h3 className="text-lg font-semibold mb-3">Expert craftsmanship</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Trained installers, proper prep, heat-formed fit, and clean
                finishes. No shortcuts on application.
              </p>
            </div>
            <div>
              <p className="text-white/30 text-sm tracking-widest mb-3">02</p>
              <h3 className="text-lg font-semibold mb-3">Vinyl innovation</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Quality materials — including options from 3M, Avery, Oracal, and
                XPEL — for looks that hold up.
              </p>
            </div>
            <div>
              <p className="text-white/30 text-sm tracking-widest mb-3">03</p>
              <h3 className="text-lg font-semibold mb-3">Exceptional service</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Clear communication from design through install. Leave confident
                in the work that was done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY STRIP ========== */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-8 text-center">
            Gallery placements
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="aspect-square rounded-xl border border-dashed border-white/10 flex items-center justify-center bg-zinc-950"
              >
                <p className="text-[10px] tracking-[0.15em] uppercase text-white/25">
                  [ IMG {n} ]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA / CONTACT ========== */}
      <section id="contact" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Ready to emerge from basic?
          </h2>
          <p className="text-white/60 mb-10 max-w-lg mx-auto">
            Free estimate and consultation. Tell us about the vehicle, the
            fleet, or the finish you want protected.
          </p>
          <a
            href="tel:8173499861"
            className="inline-block px-10 py-4 border border-white text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-2xl mb-8"
          >
            (817) 349-9861
          </a>
          <p className="text-white/40 text-sm">
            Owner: Brandon Day · DFW Metroplex
          </p>
          <p className="mt-16 text-[10px] tracking-[0.25em] uppercase text-white/25">
            Concept only · Not the live site · Designed by Rowgle
          </p>
        </div>
      </section>
    </main>
  )
}