import { Button } from "../ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div>
          <p className="text-lg font-bold text-blue-900">ODEE (ಓದಿ)</p>
          <p className="text-xs text-slate-500">One Destination for Education & Excellence</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700"
            aria-label="Toggle language"
          >
            EN | ಕನ್ನಡ
          </button>
          <Button href="#start" label="Start Learning" />
          <Button href="#login" label="Login" variant="secondary" />
        </div>
      </nav>
    </header>
  );
}
