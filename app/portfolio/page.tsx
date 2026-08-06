import { PortfolioSection } from "@/components/portfolio-section"

export const metadata = {
  title: "Portfolio",
  description: "Selected clients and live work.",
}

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-10" aria-hidden="true" />
      <div className="relative z-10">
        <PortfolioSection />
      </div>
    </main>
  )
}