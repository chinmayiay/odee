import { testimonials } from "../../lib/content";
import { Card } from "../ui/card";

export function Testimonials() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">Voices of ODEE Learners</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <Card key={item.name}>
            <p className="text-sm italic text-slate-700">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-4 font-semibold text-slate-900">{item.name}</p>
            <p className="text-xs text-slate-500">{item.type}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
