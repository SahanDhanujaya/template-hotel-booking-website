import { useState, useMemo } from "react";
import { PlusIcon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type BookingStatus = "confirmed" | "pending" | "checked-in" | "cancelled";

interface Booking {
  id: string;
  guestName: string;
  initials: string;
  room: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  status: BookingStatus;
}

// ─── Mock Data ─────────────────────────────────────────────────────────────────
// TODO: replace with a real fetch (e.g. `getBookings()`) once the bookings
// endpoint is wired up — this stays here purely for layout/testing.

const MOCK_BOOKINGS: Booking[] = [
  {
    id: "BK-00421",
    guestName: "Saman Rajapaksa",
    initials: "SR",
    room: "Deluxe Suite 301",
    roomType: "King Bed",
    checkIn: "28 Jun 2026",
    checkOut: "02 Jul 2026",
    nights: 4,
    status: "checked-in",
  },
  {
    id: "BK-00418",
    guestName: "Nimal Perera",
    initials: "NP",
    room: "Standard Room 112",
    roomType: "Twin Bed",
    checkIn: "29 Jun 2026",
    checkOut: "01 Jul 2026",
    nights: 2,
    status: "confirmed",
  },
  {
    id: "BK-00416",
    guestName: "Amaya Mendis",
    initials: "AM",
    room: "Premium Suite 502",
    roomType: "King Bed",
    checkIn: "30 Jun 2026",
    checkOut: "05 Jul 2026",
    nights: 5,
    status: "pending",
  },
  {
    id: "BK-00414",
    guestName: "Kasun Fernando",
    initials: "KF",
    room: "Deluxe Room 207",
    roomType: "Queen Bed",
    checkIn: "25 Jun 2026",
    checkOut: "28 Jun 2026",
    nights: 3,
    status: "confirmed",
  },
  {
    id: "BK-00411",
    guestName: "Dilhani Silva",
    initials: "DS",
    room: "Standard Room 108",
    roomType: "Single Bed",
    checkIn: "20 Jun 2026",
    checkOut: "22 Jun 2026",
    nights: 2,
    status: "cancelled",
  },
  {
    id: "BK-00409",
    guestName: "Roshan Wijesinghe",
    initials: "RW",
    room: "Executive Suite 601",
    roomType: "King Bed",
    checkIn: "01 Jul 2026",
    checkOut: "07 Jul 2026",
    nights: 6,
    status: "confirmed",
  },
  {
    id: "BK-00405",
    guestName: "Thilini Jayawardena",
    initials: "TJ",
    room: "Deluxe Suite 310",
    roomType: "King Bed",
    checkIn: "27 Jun 2026",
    checkOut: "30 Jun 2026",
    nights: 3,
    status: "checked-in",
  },
  {
    id: "BK-00402",
    guestName: "Chamara Bandara",
    initials: "CB",
    room: "Standard Room 115",
    roomType: "Twin Bed",
    checkIn: "02 Jul 2026",
    checkOut: "04 Jul 2026",
    nights: 2,
    status: "pending",
  },
];

// ─── Design tokens (matches TrackMyBookings) ───────────────────────────────
// bg page  #F5F6F8   surface #FFFFFF   text primary #14181F   text muted #6B7280
// accent   #0F766E (teal-700)   accent soft #F0FDFA   border #E7E9EC

// ─── Icons (inline, flat line style — no emoji) ────────────────────────────

const Icon = {
  Search: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
  Calendar: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  Edit: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  Trash: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    </svg>
  ),
  Chevron: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  ),
  Close: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
  TrendUp: () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  ),
};

// ─── Status config (matches TrackMyBookings palette) ───────────────────────

const STATUS_CONFIG: Record<BookingStatus, { label: string; badge: string; dot: string }> = {
  confirmed: { label: "Confirmed", badge: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
  pending: { label: "Pending", badge: "bg-amber-50 text-amber-700", dot: "bg-amber-500" },
  "checked-in": { label: "Checked in", badge: "bg-teal-50 text-teal-700", dot: "bg-teal-600" },
  cancelled: { label: "Cancelled", badge: "bg-red-50 text-red-600", dot: "bg-red-500" },
};

const AVATAR_PALETTE = [
  "bg-teal-50 text-teal-700",
  "bg-amber-50 text-amber-700",
  "bg-rose-50 text-rose-600",
  "bg-emerald-50 text-emerald-700",
  "bg-violet-50 text-violet-700",
];

function avatarClass(seed: string) {
  const idx = seed.charCodeAt(0) % AVATAR_PALETTE.length;
  return AVATAR_PALETTE[idx];
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: BookingStatus }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${cfg.badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0 ${avatarClass(initials)}`}>
      {initials}
    </div>
  );
}

function StatCard({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: boolean }) {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200 px-5 py-5">
      <p className="text-[12px] font-medium text-zinc-400 mb-2.5">{label}</p>
      <p className="text-[28px] font-semibold tracking-tight text-zinc-900 leading-none mb-1.5">{value}</p>
      <p className={`text-[12px] flex items-center gap-1 ${accent ? "text-teal-700 font-medium" : "text-zinc-400"}`}>
        {accent && <Icon.TrendUp />}
        {sub}
      </p>
    </div>
  );
}

function ActionBtn({ children, title, onClick, danger }: { children: React.ReactNode; title: string; onClick: () => void; danger?: boolean }) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`w-8 h-8 rounded-lg border border-zinc-200 bg-white flex items-center justify-center cursor-pointer transition-colors ${
        danger ? "text-zinc-400 hover:text-red-600 hover:border-red-200 hover:bg-red-50" : "text-zinc-400 hover:text-teal-700 hover:border-teal-200 hover:bg-teal-50"
      }`}
    >
      {children}
    </button>
  );
}

function PageBtn({ label, active, disabled, onClick }: { label: React.ReactNode; active?: boolean; disabled?: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-8 h-8 rounded-lg text-[12.5px] flex items-center justify-center transition-all cursor-pointer ${
        active
          ? "bg-teal-700 text-white"
          : disabled
            ? "text-zinc-300 cursor-default"
            : "border border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ManageBookings() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | BookingStatus>("all");
  const [roomFilter, setRoomFilter] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 6;

  const filtered = useMemo(() => {
    return MOCK_BOOKINGS.filter((b) => {
      const matchesSearch =
        search === "" ||
        b.guestName.toLowerCase().includes(search.toLowerCase()) ||
        b.id.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "all" || b.status === statusFilter;
      const matchesRoom = roomFilter === "all" || b.roomType.toLowerCase().includes(roomFilter.toLowerCase());
      return matchesSearch && matchesStatus && matchesRoom;
    });
  }, [search, statusFilter, roomFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const selectedBooking = MOCK_BOOKINGS.find((b) => b.id === selectedId) ?? null;

  return (
    <div className="min-h-screen bg-[#F5F6F8] p-6 pt-10 md:p-10 font-sans text-zinc-900 [&_*]:box-border antialiased">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <p className="text-[12px] font-medium text-teal-700 mb-1">Hotel Management</p>
            <h1 className="text-[26px] font-semibold tracking-tight text-zinc-900">Manage Bookings</h1>
          </div>
          <button
            onClick={() => alert("Open new booking form")}
            className="flex items-center gap-2 text-[13px] bg-teal-700 hover:bg-teal-800 text-white px-4 py-2.5 rounded-lg font-medium self-start md:self-auto cursor-pointer transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            New Booking
          </button>
        </div>

        {/* ── Summary cards ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total bookings" value="1,284" sub="12% this month" accent />
          <StatCard label="Checked in" value="48" sub="Active guests today" />
          <StatCard label="Pending" value="23" sub="Awaiting confirmation" />
          <StatCard label="Occupancy rate" value="87%" sub="4% vs last week" accent />
        </div>

        {/* ── Filters ─────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-zinc-200 px-5 py-3.5 mb-4 flex items-center gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px] relative flex items-center">
            <span className="absolute left-0 text-zinc-300">
              <Icon.Search />
            </span>
            <input
              type="text"
              placeholder="Search guest name or booking ID"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-6 py-1.5 text-[13px] bg-transparent outline-none placeholder:text-zinc-400"
            />
          </div>

          <div className="w-px h-6 bg-zinc-200 shrink-0" />

          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value as "all" | BookingStatus);
              setCurrentPage(1);
            }}
            className="text-[13px] bg-transparent outline-none cursor-pointer text-zinc-700"
          >
            <option value="all">All status</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="checked-in">Checked in</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <div className="w-px h-6 bg-zinc-200 shrink-0" />

          <select
            value={roomFilter}
            onChange={(e) => {
              setRoomFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="text-[13px] bg-transparent outline-none cursor-pointer text-zinc-700"
          >
            <option value="all">All rooms</option>
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
            <option value="executive">Executive</option>
          </select>
        </div>

        {/* ── Table + Detail panel ─────────────────────────────────────────── */}
        <div className="flex gap-4 items-start flex-col lg:flex-row">
          {/* Table */}
          <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex-1 min-w-0 w-full">
            <div className="grid grid-cols-[2fr_1.4fr_1fr_1fr_0.6fr_1.1fr_84px] px-5 py-3 bg-zinc-50/60 border-b border-zinc-100">
              {["Guest", "Room", "Check-in", "Check-out", "Nights", "Status", ""].map((h) => (
                <span key={h} className="text-[10.5px] font-semibold uppercase tracking-wide text-zinc-400">
                  {h}
                </span>
              ))}
            </div>

            {paginated.length === 0 ? (
              <div className="py-14 text-center text-zinc-400 text-sm">No bookings match your filters.</div>
            ) : (
              paginated.map((booking) => (
                <div
                  key={booking.id}
                  onClick={() => setSelectedId(selectedId === booking.id ? null : booking.id)}
                  className={`grid grid-cols-[2fr_1.4fr_1fr_1fr_0.6fr_1.1fr_84px] items-center px-5 py-3.5 border-b border-zinc-100 last:border-b-0 cursor-pointer transition-colors ${
                    selectedId === booking.id ? "bg-teal-50/40" : "hover:bg-zinc-50/60"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Avatar initials={booking.initials} />
                    <div className="min-w-0">
                      <p className="text-[13px] font-medium text-zinc-900 truncate">{booking.guestName}</p>
                      <p className="text-[11px] text-zinc-400 font-mono">#{booking.id}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[13px] text-zinc-600">{booking.room}</p>
                    <p className="text-[11.5px] text-zinc-400">{booking.roomType}</p>
                  </div>
                  <p className="text-[13px] text-zinc-600">{booking.checkIn}</p>
                  <p className="text-[13px] text-zinc-600">{booking.checkOut}</p>
                  <p className="text-[13px] text-zinc-600">{booking.nights}</p>
                  <div>
                    <StatusBadge status={booking.status} />
                  </div>
                  <div className="flex gap-1.5 justify-end" onClick={(e) => e.stopPropagation()}>
                    <ActionBtn title="Edit" onClick={() => alert(`Edit ${booking.id}`)}>
                      <Icon.Edit />
                    </ActionBtn>
                    <ActionBtn title="Delete" danger onClick={() => alert(`Delete ${booking.id}`)}>
                      <Icon.Trash />
                    </ActionBtn>
                  </div>
                </div>
              ))
            )}

            {/* Pagination */}
            <div className="flex items-center justify-between px-5 py-3.5 border-t border-zinc-100">
              <span className="text-[12px] text-zinc-400">
                Showing {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–
                {Math.min(currentPage * PAGE_SIZE, filtered.length)} of {filtered.length} bookings
              </span>
              <div className="flex gap-1.5">
                <PageBtn
                  label={<span className="rotate-180"><Icon.Chevron /></span>}
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                />
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((p) => (
                  <PageBtn key={p} label={String(p)} active={p === currentPage} onClick={() => setCurrentPage(p)} />
                ))}
                {totalPages > 5 && <span className="text-[13px] text-zinc-300 flex items-center px-1">···</span>}
                <PageBtn
                  label={<Icon.Chevron />}
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                />
              </div>
            </div>
          </div>

          {/* Detail panel */}
          {selectedBooking && (
            <div className="bg-white rounded-2xl border border-teal-200 shadow-sm w-full lg:w-[280px] shrink-0 px-5 py-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-teal-700">Booking detail</p>
                <button onClick={() => setSelectedId(null)} className="text-zinc-400 hover:text-zinc-700 cursor-pointer">
                  <Icon.Close />
                </button>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Avatar initials={selectedBooking.initials} />
                <div>
                  <p className="text-[14px] font-semibold text-zinc-900">{selectedBooking.guestName}</p>
                  <p className="text-[11px] text-zinc-400 font-mono">#{selectedBooking.id}</p>
                </div>
              </div>

              <StatusBadge status={selectedBooking.status} />

              <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-2.5">
                {[
                  { label: "Room", value: selectedBooking.room },
                  { label: "Bed type", value: selectedBooking.roomType },
                  { label: "Check-in", value: selectedBooking.checkIn },
                  { label: "Check-out", value: selectedBooking.checkOut },
                  { label: "Duration", value: `${selectedBooking.nights} nights` },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-2">
                    <span className="text-[12px] text-zinc-400">{label}</span>
                    <span className="text-[12px] font-medium text-zinc-800 text-right">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <button
                  onClick={() => alert(`Edit booking ${selectedBooking.id}`)}
                  className="bg-teal-700 text-white rounded-lg py-2.5 text-[12.5px] font-medium hover:bg-teal-800 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Edit booking
                </button>
                {selectedBooking.status !== "cancelled" && (
                  <button
                    onClick={() => alert(`Cancel booking ${selectedBooking.id}`)}
                    className="bg-white text-red-600 border border-zinc-200 rounded-lg py-2.5 text-[12.5px] font-medium hover:bg-red-50 hover:border-red-200 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Cancel booking
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}