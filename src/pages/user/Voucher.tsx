import { useState } from "react";
import {
  ChevronDownIcon,
  SmartphoneIcon,
  UtensilsCrossedIcon,
  TicketIcon,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type VoucherStatus = "valid" | "used" | "expired";

interface Voucher {
  id: string;
  title: string;
  category: "Hospitality" | "F&B" | "Wellness" | "Other";
  validFrom: string;
  validTo: string;
  voucherId: string;
  hotel: string;
  status: VoucherStatus;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────
// TODO: replace with a real fetch (e.g. `getVouchersForUser(user.id)`) once the
// vouchers endpoint is wired up — this stays here purely for layout/testing.

const VOUCHERS: Voucher[] = [
  {
    id: "v1",
    title: "25% Off On Buffet",
    category: "F&B",
    validFrom: "02/07/2026",
    validTo: "28/12/2026",
    voucherId: "FBC004883805296",
    hotel: "Multiple Hotels Available",
    status: "valid",
  },
];

const CATEGORIES: Voucher["category"][] = ["Hospitality", "F&B", "Wellness", "Other"];
const SORT_OPTIONS = ["Issue Date", "Validity Period"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-[12.5px] font-medium border transition-all cursor-pointer ${
        active
          ? "bg-teal-700 border-teal-700 text-white"
          : "bg-white border-zinc-200 text-zinc-600 hover:border-teal-600 hover:text-teal-700"
      }`}
    >
      {label}
    </button>
  );
}

function VoucherCard({ voucher }: { voucher: Voucher }) {
  return (
    <div className="px-6 py-5">
      <div className="flex items-center justify-between gap-3 pb-4">
        <h3 className="text-[15px] font-semibold text-zinc-900">
          {voucher.title}
        </h3>
        <button className="text-[12.5px] font-medium text-teal-700 hover:text-teal-800 transition-colors cursor-pointer shrink-0">
          View details
        </button>
      </div>

      <div className="border-t border-dashed border-zinc-200 pt-4 flex items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-[13px] text-zinc-500">
            Validity period{" "}
            <span className="text-zinc-800 font-medium">
              {voucher.validFrom} – {voucher.validTo}
            </span>
          </p>
          <p className="text-[13px] text-zinc-500">
            Voucher ID{" "}
            <span className="text-zinc-800 font-medium font-mono">
              {voucher.voucherId}
            </span>
          </p>
          <p className="text-[13px] text-zinc-500">
            Hotel <span className="text-teal-700 font-medium">{voucher.hotel}</span>
          </p>
        </div>

        <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
          <UtensilsCrossedIcon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

type Tab = "valid" | "used" | "expired";

export default function Vouchers() {
  const [activeTab, setActiveTab] = useState<Tab>("valid");
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  const toggleCategory = (cat: string) => {
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const valid = VOUCHERS.filter((v) => v.status === "valid");
  const used = VOUCHERS.filter((v) => v.status === "used");
  const expired = VOUCHERS.filter((v) => v.status === "expired");

  const list =
    activeTab === "valid" ? valid : activeTab === "used" ? used : expired;

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "valid", label: "Valid", count: valid.length },
    { key: "used", label: "Used", count: used.length },
    { key: "expired", label: "Expired / Refunded", count: expired.length },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6F8] font-sans text-zinc-900 antialiased">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-[26px] font-semibold tracking-tight">Vouchers</h1>
          <button className="hidden sm:flex items-center gap-1.5 text-[12.5px] font-medium text-teal-700 hover:text-teal-800 transition-colors cursor-pointer">
            <SmartphoneIcon className="w-3.5 h-3.5" />
            Download the app to check your vouchers on mobile
          </button>
        </div>

        {/* ── Main card ──────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
          {/* Tabs */}
          <div className="flex items-center gap-1 px-6 pt-5">
            {tabs.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-3 pb-3 text-[13.5px] font-semibold transition-colors cursor-pointer ${
                    active ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  {tab.label} <span className={active ? "text-teal-700" : "text-zinc-400"}>({tab.count})</span>
                  {active && (
                    <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-teal-700 rounded-full" />
                  )}
                </button>
              );
            })}
            <div className="flex-1 border-b border-zinc-100 self-end" />
          </div>

          {/* Filters */}
          <div className="px-6 py-5">
            <p className="text-[13.5px] font-medium text-zinc-800 mb-3.5">
              Filter your result
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <div className="flex items-center gap-2.5">
                <span className="text-[12.5px] font-medium text-zinc-500 shrink-0">
                  Sort by
                </span>
                {SORT_OPTIONS.map((opt) => (
                  <FilterChip
                    key={opt}
                    label={opt}
                    active={sortBy === opt}
                    onClick={() => setSortBy(sortBy === opt ? null : opt)}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-[12.5px] font-medium text-zinc-500 shrink-0">
                  Category
                </span>
                {CATEGORIES.map((cat) => (
                  <FilterChip
                    key={cat}
                    label={cat}
                    active={activeCategories.includes(cat)}
                    onClick={() => toggleCategory(cat)}
                  />
                ))}
              </div>

              <button className="ml-auto flex items-center gap-1 text-[12.5px] font-semibold text-zinc-700 hover:text-teal-700 transition-colors cursor-pointer">
                See more filters
                <ChevronDownIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Promo banner */}
          <div className="px-6 pb-6">
            <div className="relative w-full h-[150px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=1400&q=80"
                alt="Rewards promo"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 via-teal-800/30 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-center px-8 max-w-sm">
                <h2 className="text-white text-[22px] font-semibold tracking-tight mb-1.5">
                  Your New World of Rewards
                </h2>
                <p className="text-white/85 text-[13px] leading-relaxed">
                  Enhance your experiences with exclusive offers by starting
                  your rewards journey.
                </p>
              </div>
            </div>
          </div>

          {/* Just For You */}
          <div className="px-6 py-3.5 bg-zinc-50 border-y border-zinc-100">
            <p className="text-[13px] font-semibold text-zinc-800">Just for you</p>
          </div>

          {/* Voucher list */}
          {list.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
              <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center mb-3">
                <TicketIcon className="w-5 h-5" />
              </div>
              <p className="text-[13.5px] font-medium text-zinc-600 mb-1">
                No vouchers here
              </p>
              <p className="text-[12.5px] text-zinc-400">
                {activeTab === "valid"
                  ? "You don't have any valid vouchers right now."
                  : activeTab === "used"
                    ? "You haven't used any vouchers yet."
                    : "Nothing expired or refunded."}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-zinc-100">
              {list.map((voucher) => (
                <VoucherCard key={voucher.id} voucher={voucher} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}