import { features } from "../../lib/content";
import { Card } from "../ui/card";

export function Features() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">Features Students Love</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{feature.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
