export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-slate-200 bg-white p-4 lg:block">
      <h2 className="text-lg font-semibold text-blue-900">ODEE Menu</h2>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        <li>Dashboard</li>
        <li>Goals</li>
        <li>Daily Tasks</li>
        <li>Quiz</li>
      </ul>
    </aside>
  );
}
