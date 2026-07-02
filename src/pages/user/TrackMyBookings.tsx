import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { PlusIcon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type BookingStatus =
  | "confirmed"
  | "pending"
  | "checked-in"
  | "checked-out"
  | "cancelled";

interface TimelineEvent {
  label: string;
  date: string;
  done: boolean;
}

interface Booking {
  id: string;
  hotelName: string;
  hotelLocation: string;
  room: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  status: BookingStatus;
  totalAmount: string;
  bookedOn: string;
  timeline: TimelineEvent[];
  amenities: string[];
}

// ─── Mock Data ────────────────────────────────────────────────────────────────
// TODO: replace with a real fetch (e.g. `getBookingsForUser(user.id)`) once the
// bookings endpoint is wired up — this stays here purely for layout/testing.

const USER_BOOKINGS: Booking[] = [
  {
    id: "BK-00421",
    hotelName: "The Galle Face Hotel",
    hotelLocation: "Colombo, Sri Lanka",
    room: "Deluxe Ocean Suite 301",
    roomType: "King Bed · Ocean View",
    checkIn: "28 Jun 2026",
    checkOut: "02 Jul 2026",
    nights: 4,
    guests: 2,
    status: "checked-in",
    totalAmount: "LKR 128,000",
    bookedOn: "15 Jun 2026",
    amenities: ["Free Wi-Fi", "Breakfast included", "Pool access", "Spa"],
    timeline: [
      { label: "Booking confirmed", date: "15 Jun 2026", done: true },
      { label: "Pre-check-in sent", date: "26 Jun 2026", done: true },
      { label: "Checked in", date: "28 Jun 2026", done: true },
      { label: "Check-out", date: "02 Jul 2026", done: false },
    ],
  },
  {
    id: "BK-00388",
    hotelName: "Cinnamon Grand",
    hotelLocation: "Colombo 03, Sri Lanka",
    room: "Premier Room 215",
    roomType: "Queen Bed · City View",
    checkIn: "10 Jul 2026",
    checkOut: "13 Jul 2026",
    nights: 3,
    guests: 1,
    status: "confirmed",
    totalAmount: "LKR 74,500",
    bookedOn: "22 Jun 2026",
    amenities: ["Free Wi-Fi", "Gym access", "Airport transfer"],
    timeline: [
      { label: "Booking confirmed", date: "22 Jun 2026", done: true },
      { label: "Pre-check-in", date: "08 Jul 2026", done: false },
      { label: "Check-in", date: "10 Jul 2026", done: false },
      { label: "Check-out", date: "13 Jul 2026", done: false },
    ],
  },
  {
    id: "BK-00361",
    hotelName: "Jetwing Yala",
    hotelLocation: "Yala, Sri Lanka",
    room: "Luxury Chalet 07",
    roomType: "King Bed · Jungle View",
    checkIn: "05 May 2026",
    checkOut: "08 May 2026",
    nights: 3,
    guests: 2,
    status: "checked-out",
    totalAmount: "LKR 96,000",
    bookedOn: "18 Apr 2026",
    amenities: ["Safari included", "All meals", "Pool access"],
    timeline: [
      { label: "Booking confirmed", date: "18 Apr 2026", done: true },
      { label: "Pre-check-in sent", date: "03 May 2026", done: true },
      { label: "Checked in", date: "05 May 2026", done: true },
      { label: "Checked out", date: "08 May 2026", done: true },
    ],
  },
  {
    id: "BK-00340",
    hotelName: "Amangalla",
    hotelLocation: "Galle Fort, Sri Lanka",
    room: "Garden Suite 04",
    roomType: "King Bed · Garden View",
    checkIn: "14 Mar 2026",
    checkOut: "17 Mar 2026",
    nights: 3,
    guests: 2,
    status: "cancelled",
    totalAmount: "LKR 112,000",
    bookedOn: "01 Mar 2026",
    amenities: ["Breakfast included", "Pool access"],
    timeline: [
      { label: "Booking confirmed", date: "01 Mar 2026", done: true },
      { label: "Booking cancelled", date: "08 Mar 2026", done: true },
    ],
  },
];

// ─── Design tokens ──────────────────────────────────────────────────────────
// bg page  #F5F6F8   surface #FFFFFF   text primary #14181F   text muted #6B7280
// accent   #0F766E (teal-700)   accent soft #F0FDFA   border #E7E9EC

// ─── Icons (inline, flat line style — no emoji) ────────────────────────────

const Icon = {
  Calendar: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  Moon: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  ),
  User: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
    </svg>
  ),
  Building: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  ),
  Chevron: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
};

// ─── Status config ──────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<
  BookingStatus,
  { label: string; badge: string; dot: string }
> = {
  confirmed: {
    label: "Confirmed",
    badge: "bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
  },
  pending: {
    label: "Pending",
    badge: "bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
  },
  "checked-in": {
    label: "Checked in",
    badge: "bg-teal-50 text-teal-700",
    dot: "bg-teal-600",
  },
  "checked-out": {
    label: "Checked out",
    badge: "bg-zinc-100 text-zinc-500",
    dot: "bg-zinc-400",
  },
  cancelled: {
    label: "Cancelled",
    badge: "bg-red-50 text-red-600",
    dot: "bg-red-500",
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: BookingStatus }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${cfg.badge}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="flex flex-col">
      {events.map((ev, i) => (
        <div key={i} className="flex gap-3.5">
          <div className="flex flex-col items-center shrink-0 w-4">
            <div
              className={`w-2.5 h-2.5 rounded-full shrink-0 z-10 ring-4 ${
                ev.done
                  ? "bg-teal-600 ring-teal-50"
                  : "bg-white ring-zinc-100 border border-zinc-300"
              }`}
            />
            {i < events.length - 1 && (
              <div
                className={`w-px flex-1 min-h-[26px] mt-0.5 ${
                  ev.done ? "bg-teal-200" : "bg-zinc-200"
                } ${!ev.done ? "border-l border-dashed border-zinc-200 w-0" : ""}`}
              />
            )}
          </div>
          <div className={i < events.length - 1 ? "pb-5" : ""}>
            <p
              className={`text-[13px] font-medium mb-0.5 ${
                ev.done ? "text-zinc-800" : "text-zinc-400"
              }`}
            >
              {ev.label}
            </p>
            <p className="text-[11.5px] text-zinc-400">{ev.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AmenityPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11.5px] font-medium bg-zinc-100 text-zinc-600">
      {label}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

type Tab = "upcoming" | "past";

export default function TrackMyBookings() {
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState<Tab>("upcoming");
  const [expandedId, setExpandedId] = useState<string | null>(
    USER_BOOKINGS[0]?.id ?? null,
  );

  const upcoming = USER_BOOKINGS.filter((b) =>
    ["confirmed", "pending", "checked-in"].includes(b.status),
  );
  const past = USER_BOOKINGS.filter((b) =>
    ["checked-out", "cancelled"].includes(b.status),
  );
  const list = activeTab === "upcoming" ? upcoming : past;

  // Pulls a display name / initials from the authenticated user, with sane fallbacks
  const displayName =
    (user as unknown as { full_name?: string })?.full_name?.split(" ")[0] +
      " " +
      (user as unknown as { full_name?: string })?.full_name?.split(" ")[1] ||
    "Guest";
  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const memberSince = (user as unknown as { createdAt?: string })?.createdAt
    ? new Date(
        (user as unknown as { createdAt?: string }).createdAt as string,
      ).getFullYear()
    : null;

  const nightsStayed = USER_BOOKINGS.filter(
    (b) => b.status === "checked-out",
  ).reduce((s, b) => s + b.nights, 0);

  return (
    <div className="min-h-screen bg-[#F5F6F8] p-6 pt-10 md:p-10 font-sans text-zinc-900 [&_*]:box-border antialiased">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <p className="text-[12px] font-medium text-teal-700 mb-1">
              My Account
            </p>
            <h1 className="text-[26px] font-semibold tracking-tight text-zinc-900">
              My Bookings
            </h1>
          </div>

          {/* Authenticated user chip */}
          <div className="flex items-center gap-3 bg-white rounded-xl border border-zinc-200 px-3.5 py-2.5 self-start md:self-auto">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 text-white flex items-center justify-center text-[11px] font-semibold shrink-0">
              {initials || "?"}
            </div>
            <div>
              <p className="text-[13px] font-medium text-zinc-900 leading-tight">
                {displayName}
              </p>
              <p className="text-[11.5px] text-zinc-400 leading-tight">
                {user?.email
                  ? user.email
                  : memberSince
                    ? `Member since ${memberSince}`
                    : "Member"}
              </p>
            </div>
          </div>
        </div>

        {/* ── Summary cards ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              label: "Total stays",
              value: String(USER_BOOKINGS.length),
              sub: "All time",
            },
            {
              label: "Upcoming",
              value: String(upcoming.length),
              sub: upcoming[0]
                ? `Next · ${upcoming[0].checkIn}`
                : "None planned",
              accent: true,
            },
            {
              label: "Nights stayed",
              value: String(nightsStayed),
              sub: "Completed stays",
            },
          ].map(({ label, value, sub, accent }) => (
            <div
              key={label}
              className="bg-white rounded-2xl border border-zinc-200 px-5 py-5"
            >
              <p className="text-[12px] font-medium text-zinc-400 mb-2.5">
                {label}
              </p>
              <p className="text-[28px] font-semibold tracking-tight text-zinc-900 leading-none mb-1.5">
                {value}
              </p>
              <p
                className={`text-[12px] ${accent ? "text-teal-700 font-medium" : "text-zinc-400"}`}
              >
                {sub}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between gap-5 mb-4">
          {/* ── Tabs (segmented control) ─────────────────────────────────────── */}
          <div className="inline-flex p-1 bg-zinc-100 rounded-lg mb-6">
            {(["upcoming", "past"] as Tab[]).map((tab) => {
              const active = activeTab === tab;
              const count = tab === "upcoming" ? upcoming.length : past.length;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setExpandedId(null);
                  }}
                  className={`px-4 py-1.5 text-[13px] font-medium rounded-md transition-all cursor-pointer ${
                    active
                      ? "bg-white text-zinc-900 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-700"
                  }`}
                >
                  {tab === "upcoming" ? "Upcoming" : "Past stays"}{" "}
                  <span
                    className={`ml-1 text-[11px] ${active ? "text-teal-700" : "text-zinc-400"}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <div>
            <button className="flex items-center gap-2 text-[13px] bg-teal-700 hover:bg-teal-800 text-white px-4 py-1.5 rounded-md font-medium">
              <PlusIcon className="w-5 h-5" />
              New Reservation
            </button>
          </div>
        </div>

        {/* ── Booking cards ─────────────────────────────────────────────── */}
        {list.length === 0 ? (
          <div className="bg-white rounded-2xl border border-zinc-200 p-12 text-center text-zinc-400 text-sm">
            {activeTab === "upcoming"
              ? "No upcoming bookings. Ready to plan your next stay?"
              : "No past bookings yet."}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {list.map((booking) => {
              const expanded = expandedId === booking.id;
              return (
                <div
                  key={booking.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    expanded
                      ? "border-teal-200 shadow-sm"
                      : "border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  {/* ── Card header ── */}
                  <div
                    onClick={() => setExpandedId(expanded ? null : booking.id)}
                    className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                          <Icon.Building />
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold text-zinc-900">
                            {booking.hotelName}
                          </p>
                          <p className="text-[12px] text-zinc-400">
                            {booking.hotelLocation}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-1 pl-13">
                        {[
                          {
                            icon: <Icon.Calendar />,
                            text: `${booking.checkIn} → ${booking.checkOut}`,
                          },
                          {
                            icon: <Icon.Moon />,
                            text: `${booking.nights} nights`,
                          },
                          {
                            icon: <Icon.User />,
                            text: `${booking.guests} guest${booking.guests > 1 ? "s" : ""}`,
                          },
                        ].map(({ icon, text }) => (
                          <span
                            key={text}
                            className="text-[12px] text-zinc-500 flex items-center gap-1.5"
                          >
                            <span className="text-zinc-400">{icon}</span> {text}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <StatusBadge status={booking.status} />
                      <p className="text-[13px] font-semibold text-zinc-900">
                        {booking.totalAmount}
                      </p>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        #{booking.id}
                      </p>
                    </div>

                    <span
                      className={`text-zinc-400 shrink-0 transition-transform duration-200 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    >
                      <Icon.Chevron />
                    </span>
                  </div>

                  {/* ── Expanded detail ── */}
                  {expanded && (
                    <div className="border-t border-zinc-100 bg-zinc-50/60 px-5 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Col 1: Stay details */}
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400 mb-3.5">
                          Stay details
                        </p>
                        <div className="flex flex-col gap-2.5">
                          {[
                            { label: "Room", value: booking.room },
                            { label: "Bed type", value: booking.roomType },
                            { label: "Check-in", value: booking.checkIn },
                            { label: "Check-out", value: booking.checkOut },
                            { label: "Booked on", value: booking.bookedOn },
                            { label: "Total paid", value: booking.totalAmount },
                          ].map(({ label, value }) => (
                            <div
                              key={label}
                              className="flex justify-between gap-2"
                            >
                              <span className="text-[12px] text-zinc-400">
                                {label}
                              </span>
                              <span className="text-[12px] font-medium text-zinc-800 text-right">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Col 2: Amenities + actions */}
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400 mb-3.5">
                          Included
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {booking.amenities.map((a) => (
                            <AmenityPill key={a} label={a} />
                          ))}
                        </div>

                        {booking.status !== "cancelled" &&
                          booking.status !== "checked-out" && (
                            <div className="mt-6 flex flex-col gap-2">
                              <button
                                onClick={() =>
                                  alert(`Download voucher for ${booking.id}`)
                                }
                                className="bg-teal-700 text-white rounded-lg py-2.5 text-[12.5px] font-medium hover:bg-teal-800 active:scale-[0.98] transition-all cursor-pointer"
                              >
                                Download voucher
                              </button>
                              {booking.status === "confirmed" && (
                                <button
                                  onClick={() =>
                                    alert(`Cancel booking ${booking.id}`)
                                  }
                                  className="bg-white text-red-600 border border-zinc-200 rounded-lg py-2.5 text-[12.5px] font-medium hover:bg-red-50 hover:border-red-200 active:scale-[0.98] transition-all cursor-pointer"
                                >
                                  Cancel booking
                                </button>
                              )}
                            </div>
                          )}

                        {booking.status === "checked-out" && (
                          <button
                            onClick={() =>
                              alert(`Leave a review for ${booking.hotelName}`)
                            }
                            className="mt-6 w-full bg-white text-teal-700 border border-teal-200 rounded-lg py-2.5 text-[12.5px] font-medium hover:bg-teal-50 active:scale-[0.98] transition-all cursor-pointer"
                          >
                            Leave a review
                          </button>
                        )}
                      </div>

                      {/* Col 3: Timeline */}
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400 mb-3.5">
                          Journey
                        </p>
                        <Timeline events={booking.timeline} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
