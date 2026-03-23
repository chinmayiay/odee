import { goals } from "../../lib/theme";
import { Card } from "../ui/card";

export function Goals() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">Goal-Based Learning</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {goals.map((goal) => (
          <Card key={goal.title} className="transition hover:-translate-y-1">
            <p className="text-xs font-semibold uppercase text-blue-700">{goal.target}</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">{goal.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{goal.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
