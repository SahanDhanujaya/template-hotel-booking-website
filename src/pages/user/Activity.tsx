import { useState } from "react";
import { CalendarIcon, AlertCircleIcon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Period = "3m" | "12m" | "24m";

interface Transaction {
  id: string;
  date: string;
  type: string;
  points: string;
  description: string;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────
// TODO: replace with a real fetch (e.g. `getTransactionsForUser(user.id, period)`)
// once the activity endpoint is wired up — this stays here purely for layout/testing.

const TRANSACTIONS: Transaction[] = [];

const PERIODS: { key: Period; label: string }[] = [
  { key: "3m", label: "Last 3 months" },
  { key: "12m", label: "Last 12 months" },
  { key: "24m", label: "Last 24 months" },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Activity() {
  const [period, setPeriod] = useState<Period>("3m");
  const [fromMonth] = useState("Jun 2026");
  const [toMonth] = useState("Jul 2026");

  return (
    <div className="min-h-screen bg-[#F5F6F8] font-sans text-zinc-900 antialiased">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-6 mb-6">
          <div>
            <h1 className="text-[26px] font-semibold tracking-tight mb-2">
              Transaction History
            </h1>
            <p className="text-[13px] text-zinc-500 leading-relaxed max-w-2xl">
              To view any of your transaction details within the last 2
              calendar years, simply specify the period you're looking into.
              Please review all your transaction details and let us know of
              any discrepancy within 30 days of the transaction date.
            </p>
          </div>
          <button className="shrink-0 text-[12.5px] font-semibold text-teal-700 hover:text-teal-800 transition-colors cursor-pointer whitespace-nowrap">
            Missing points?
          </button>
        </div>

        {/* ── Main card ──────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
          {/* Period selector + date range */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
            <div className="inline-flex p-1 bg-zinc-100 rounded-lg">
              {PERIODS.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setPeriod(p.key)}
                  className={`px-3.5 py-1.5 text-[12.5px] font-medium rounded-md transition-all cursor-pointer ${
                    period === p.key
                      ? "bg-white text-zinc-900 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-700"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[12.5px] font-semibold text-zinc-700 whitespace-nowrap">
                Activities from
              </span>
              <div className="flex items-center gap-2.5 bg-zinc-50 border border-zinc-200 rounded-lg px-3.5 py-2">
                <CalendarIcon className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="text-[12.5px] font-medium text-zinc-800">
                  {fromMonth}
                </span>
                <span className="text-zinc-300">/</span>
                <span className="text-[12.5px] font-medium text-zinc-800">
                  {toMonth}
                </span>
              </div>
            </div>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-zinc-50 border-y border-zinc-100">
            <span className="text-[11.5px] font-semibold uppercase tracking-wide text-zinc-400">
              Transaction date
            </span>
            <span className="text-[11.5px] font-semibold uppercase tracking-wide text-zinc-400">
              Transaction type
            </span>
            <span className="text-[11.5px] font-semibold uppercase tracking-wide text-zinc-400">
              Points
            </span>
            <span className="text-[11.5px] font-semibold uppercase tracking-wide text-zinc-400">
              Description
            </span>
          </div>

          {/* Table body */}
          {TRANSACTIONS.length === 0 ? (
            <div className="px-6 py-5">
              <div className="flex items-center justify-center gap-2.5 bg-zinc-50 rounded-xl py-8 px-6 text-center">
                <AlertCircleIcon className="w-4 h-4 text-amber-500 shrink-0" />
                <p className="text-[13px] text-zinc-500">
                  You don't have any points transaction record in this
                  period. If we missed any transaction, please click{" "}
                  <button className="text-zinc-800 font-semibold hover:text-teal-700 transition-colors cursor-pointer">
                    missing points
                  </button>{" "}
                  to claim.
                </p>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-zinc-100">
              {TRANSACTIONS.map((tx) => (
                <div key={tx.id} className="grid grid-cols-4 gap-4 px-6 py-4">
                  <span className="text-[13px] text-zinc-700">{tx.date}</span>
                  <span className="text-[13px] text-zinc-700">{tx.type}</span>
                  <span className="text-[13px] font-medium text-zinc-900">
                    {tx.points}
                  </span>
                  <span className="text-[13px] text-zinc-500">
                    {tx.description}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}