import { howItWorksSteps } from "../../lib/content";
import { Card } from "../ui/card";

export function HowItWorks() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">How ODEE Works</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {howItWorksSteps.map((step, index) => (
          <Card key={step.title}>
            <p className="text-sm font-bold text-amber-500">Step {index + 1}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
