"use client";

import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { day: "Mon", score: 42 },
  { day: "Tue", score: 51 },
  { day: "Wed", score: 60 },
  { day: "Thu", score: 58 },
  { day: "Fri", score: 67 },
  { day: "Sat", score: 75 },
];

export function ProgressChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-60 w-full rounded-2xl border border-slate-200 bg-white p-4" />;
  }

  return (
    <div className="h-60 w-full rounded-2xl border border-slate-200 bg-white p-4">
      <p className="mb-3 text-sm font-semibold text-slate-700">Weekly Progress (Preview)</p>
      <ResponsiveContainer width="100%" height="85%" minWidth={280} minHeight={200}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#1E3A8A" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
