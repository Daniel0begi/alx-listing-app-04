import { useState } from "react";

const ACCOMMODATION_TYPES = ["Rooms", "Mansion", "Countryside", "Villa", "Apartments"];

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-black" />
          <span className="text-base font-semibold text-gray-900">ALX Stays</span>
        </div>

        <div className="hidden flex-1 sm:block">
          <div className="mx-auto flex max-w-xl items-center rounded-full border border-gray-300 bg-white px-4 py-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations..."
              className="w-full text-sm outline-none"
              aria-label="Search destinations"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100">
            Sign in
          </button>
          <button className="rounded-lg bg-black px-3 py-2 text-sm font-medium text-white hover:opacity-90">
            Sign up
          </button>
        </div>
      </div>

      <nav className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-2">
          <ul className="flex gap-2 overflow-x-auto">
            {ACCOMMODATION_TYPES.map((t) => (
              <li key={t}>
                <button className="whitespace-nowrap rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile search */}
      <div className="px-4 pb-3 sm:hidden">
        <div className="flex items-center rounded-full border border-gray-300 bg-white px-4 py-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations..."
            className="w-full text-sm outline-none"
            aria-label="Search destinations"
          />
        </div>
      </div>
    </header>
  );
}
