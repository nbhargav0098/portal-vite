import CTASection from './CTASection'
import DashboardPreview from './DashboardPreview'
import FeaturesSection from './FeaturesSection'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import ProblemSection from './ProblemSection'

function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.2),transparent_25%),linear-gradient(180deg,#020617_0%,#0f172a_45%,#111827_100%)]" />
      <div className="relative">
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorks />
        <DashboardPreview />
        <CTASection />
      </div>
    </div>
  )
}

export default LandingPage
