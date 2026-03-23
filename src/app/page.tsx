import { CsrImpact } from "../components/landing/csr-impact";
import { Features } from "../components/landing/features";
import { Footer } from "../components/landing/footer";
import { Goals } from "../components/landing/goals";
import { Hero } from "../components/landing/hero";
import { HowItWorks } from "../components/landing/how-it-works";
import { LearningMomentum } from "../components/landing/learning-momentum";
import { Navbar } from "../components/landing/navbar";
import { Testimonials } from "../components/landing/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 sm:py-10">
        <Hero />
        <HowItWorks />
        <Goals />
        <Features />
        <LearningMomentum />
        <Testimonials />
        <CsrImpact />
      </main>
      <Footer />
    </div>
  );
}
