import { useState, useMemo } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type BookingStatus = "confirmed" | "pending" | "checked-in" | "cancelled";

interface Booking {
  id: string;
  guestName: string;
  initials: string;
  avatarColor: { bg: string; text: string };
  room: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  status: BookingStatus;
}

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const MOCK_BOOKINGS: Booking[] = [
  {
    id: "BK-00421",
    guestName: "Saman Rajapaksa",
    initials: "SR",
    avatarColor: { bg: "#eaf3fd", text: "#1d6fb5" },
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
    avatarColor: { bg: "#fff3e6", text: "#c2710c" },
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
    avatarColor: { bg: "#fce7f3", text: "#be185d" },
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
    avatarColor: { bg: "#e8f5e9", text: "#15803d" },
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
    avatarColor: { bg: "#fef2f2", text: "#b91c1c" },
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
    avatarColor: { bg: "#ede9fe", text: "#6d28d9" },
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
    avatarColor: { bg: "#eaf3fd", text: "#1d6fb5" },
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
    avatarColor: { bg: "#e8f5e9", text: "#15803d" },
    room: "Standard Room 115",
    roomType: "Twin Bed",
    checkIn: "02 Jul 2026",
    checkOut: "04 Jul 2026",
    nights: 2,
    status: "pending",
  },
];

const STATUS_LABELS: Record<BookingStatus, string> = {
  "confirmed": "Confirmed",
  "pending": "Pending",
  "checked-in": "Checked in",
  "cancelled": "Cancelled",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: BookingStatus }) {
  const styles: Record<BookingStatus, { bg: string; color: string }> = {
    "confirmed":  { bg: "#eaf8f0", color: "#15803d" },
    "pending":    { bg: "#fff8e6", color: "#b45309" },
    "checked-in": { bg: "#eaf3fd", color: "#1d6fb5" },
    "cancelled":  { bg: "#fef2f2", color: "#b91c1c" },
  };
  const s = styles[status];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.03em",
        backgroundColor: s.bg,
        color: s.color,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: s.color,
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      {STATUS_LABELS[status]}
    </span>
  );
}

function Avatar({ initials, color }: { initials: string; color: { bg: string; text: string } }) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        backgroundColor: color.bg,
        color: color.text,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: 600,
        flexShrink: 0,
        letterSpacing: "0.04em",
      }}
    >
      {initials}
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: "1.2rem 1.4rem",
        border: "0.5px solid #e8eaed",
      }}
    >
      <p
        style={{
          fontSize: 10.5,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#4AAEF0",
          fontWeight: 500,
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: 28,
          fontWeight: 300,
          color: "#1a1a2e",
          lineHeight: 1,
          marginBottom: 4,
        }}
      >
        {value}
      </p>
      <p style={{ fontSize: 11.5, color: accent ? "#22c55e" : "#9ca3af" }}>{sub}</p>
    </div>
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
      const matchesRoom =
        roomFilter === "all" ||
        b.roomType.toLowerCase().includes(roomFilter.toLowerCase());
      return matchesSearch && matchesStatus && matchesRoom;
    });
  }, [search, statusFilter, roomFilter]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const selectedBooking = MOCK_BOOKINGS.find((b) => b.id === selectedId) ?? null;

  // ── Styles ──────────────────────────────────────────────────────────────────

  const pageStyle: React.CSSProperties = {
    backgroundColor: "#F0F2F5",
    minHeight: "100vh",
    padding: "2rem 1.75rem",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    color: "#1a1a2e",
    boxSizing: "border-box",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    borderRadius: 12,
    border: "0.5px solid #e8eaed",
  };

  const inputBase: React.CSSProperties = {
    border: "none",
    borderBottom: "1px solid #e8eaed",
    padding: "6px 0",
    fontSize: 13,
    color: "#1a1a2e",
    background: "transparent",
    outline: "none",
    fontFamily: "inherit",
    appearance: "none" as const,
  };

  return (
    <div style={pageStyle}>
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#4AAEF0",
              fontWeight: 500,
              marginBottom: 4,
            }}
          >
            Hotel Management
          </p>
          <h1 style={{ fontSize: 28, fontWeight: 400, letterSpacing: "-0.3px" }}>
            Manage Bookings
          </h1>
        </div>
        <button
          style={{
            backgroundColor: "#4AAEF0",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "10px 20px",
            fontSize: 12.5,
            fontWeight: 500,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
          onClick={() => alert("Open new booking form")}
        >
          + New Booking
        </button>
      </div>

      {/* ── Stats ──────────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 14,
          marginBottom: "1.75rem",
        }}
      >
        <StatCard label="Total Bookings" value="1,284" sub="▲ 12% this month" accent />
        <StatCard label="Checked In" value="48" sub="Active guests today" />
        <StatCard label="Pending" value="23" sub="Awaiting confirmation" />
        <StatCard label="Occupancy Rate" value="87%" sub="▲ 4% vs last week" accent />
      </div>

      {/* ── Filters ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          ...cardStyle,
          padding: "0.9rem 1.4rem",
          marginBottom: "1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {/* Search */}
        <div style={{ flex: 1, minWidth: 180, position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#b0b8c8",
              fontSize: 15,
              pointerEvents: "none",
            }}
          >
            🔍
          </span>
          <input
            type="text"
            placeholder="Search guest name or booking ID"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            style={{ ...inputBase, width: "100%", paddingLeft: 24 }}
          />
        </div>

        <div style={{ width: 1, height: 28, backgroundColor: "#e8eaed", flexShrink: 0 }} />

        {/* Status filter */}
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value as "all" | BookingStatus);
            setCurrentPage(1);
          }}
          style={{ ...inputBase, paddingRight: 18, cursor: "pointer" }}
        >
          <option value="all">All Status</option>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="checked-in">Checked In</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <div style={{ width: 1, height: 28, backgroundColor: "#e8eaed", flexShrink: 0 }} />

        {/* Room filter */}
        <select
          value={roomFilter}
          onChange={(e) => {
            setRoomFilter(e.target.value);
            setCurrentPage(1);
          }}
          style={{ ...inputBase, paddingRight: 18, cursor: "pointer" }}
        >
          <option value="all">All Rooms</option>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
          <option value="executive">Executive</option>
        </select>
      </div>

      {/* ── Table + Detail Panel ─────────────────────────────────────────────── */}
      <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
        {/* Table */}
        <div style={{ ...cardStyle, flex: 1, overflow: "hidden", minWidth: 0 }}>
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1.5fr 1.1fr 1.1fr 0.7fr 1.2fr 90px",
              padding: "11px 1.4rem",
              backgroundColor: "#fafbfc",
              borderBottom: "0.5px solid #e8eaed",
            }}
          >
            {["Guest", "Room", "Check-in", "Check-out", "Nights", "Status", ""].map((h, i) => (
              <span
                key={i}
                style={{
                  fontSize: 10.5,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9ca3af",
                  fontWeight: 500,
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          {paginated.length === 0 ? (
            <div
              style={{
                padding: "3rem 1.4rem",
                textAlign: "center",
                color: "#9ca3af",
                fontSize: 14,
              }}
            >
              No bookings match your filters.
            </div>
          ) : (
            paginated.map((booking, i) => (
              <div
                key={booking.id}
                onClick={() => setSelectedId(selectedId === booking.id ? null : booking.id)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1.5fr 1.1fr 1.1fr 0.7fr 1.2fr 90px",
                  padding: "13px 1.4rem",
                  borderBottom:
                    i < paginated.length - 1 ? "0.5px solid #f3f4f6" : "none",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor:
                    selectedId === booking.id ? "#f5f9ff" : "transparent",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (selectedId !== booking.id)
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "#fafbff";
                }}
                onMouseLeave={(e) => {
                  if (selectedId !== booking.id)
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
                }}
              >
                {/* Guest */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Avatar initials={booking.initials} color={booking.avatarColor} />
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: "#1a1a2e" }}>
                      {booking.guestName}
                    </p>
                    <p style={{ fontSize: 11, color: "#b0b8c8" }}>#{booking.id}</p>
                  </div>
                </div>
                {/* Room */}
                <div>
                  <p style={{ fontSize: 13, color: "#4b5563" }}>{booking.room}</p>
                  <p style={{ fontSize: 11.5, color: "#9ca3af" }}>{booking.roomType}</p>
                </div>
                {/* Dates */}
                <p style={{ fontSize: 13, color: "#4b5563" }}>{booking.checkIn}</p>
                <p style={{ fontSize: 13, color: "#4b5563" }}>{booking.checkOut}</p>
                <p style={{ fontSize: 13, color: "#4b5563" }}>{booking.nights}</p>
                {/* Status */}
                <div>
                  <StatusBadge status={booking.status} />
                </div>
                {/* Actions */}
                <div
                  style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ActionBtn title="Edit" onClick={() => alert(`Edit ${booking.id}`)}>
                    ✏️
                  </ActionBtn>
                  <ActionBtn title="Delete" onClick={() => alert(`Delete ${booking.id}`)}>
                    🗑️
                  </ActionBtn>
                </div>
              </div>
            ))
          )}

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.9rem 1.4rem",
              borderTop: "0.5px solid #e8eaed",
            }}
          >
            <span style={{ fontSize: 12, color: "#9ca3af" }}>
              Showing {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–
              {Math.min(currentPage * PAGE_SIZE, filtered.length)} of {filtered.length} bookings
            </span>
            <div style={{ display: "flex", gap: 4 }}>
              <PageBtn
                label="‹"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              />
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((p) => (
                <PageBtn
                  key={p}
                  label={String(p)}
                  active={p === currentPage}
                  onClick={() => setCurrentPage(p)}
                />
              ))}
              {totalPages > 5 && (
                <span
                  style={{
                    fontSize: 13,
                    color: "#b0b8c8",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 4px",
                  }}
                >
                  …
                </span>
              )}
              <PageBtn
                label="›"
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage((p) => p + 1)}
              />
            </div>
          </div>
        </div>

        {/* ── Detail Panel ──────────────────────────────────────────────────── */}
        {selectedBooking && (
          <div
            style={{
              ...cardStyle,
              width: 280,
              flexShrink: 0,
              padding: "1.4rem",
              animation: "slideIn 0.18s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <p
                style={{
                  fontSize: 10.5,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#4AAEF0",
                  fontWeight: 500,
                }}
              >
                Booking Detail
              </p>
              <button
                onClick={() => setSelectedId(null)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#9ca3af",
                  cursor: "pointer",
                  fontSize: 16,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            {/* Guest avatar + name */}
            <div
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
            >
              <Avatar
                initials={selectedBooking.initials}
                color={selectedBooking.avatarColor}
              />
              <div>
                <p style={{ fontSize: 14, fontWeight: 500, color: "#1a1a2e" }}>
                  {selectedBooking.guestName}
                </p>
                <p style={{ fontSize: 11.5, color: "#9ca3af" }}>#{selectedBooking.id}</p>
              </div>
            </div>

            <StatusBadge status={selectedBooking.status} />

            <div
              style={{
                marginTop: 18,
                borderTop: "0.5px solid #f3f4f6",
                paddingTop: 16,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                { label: "Room", value: selectedBooking.room },
                { label: "Bed type", value: selectedBooking.roomType },
                { label: "Check-in", value: selectedBooking.checkIn },
                { label: "Check-out", value: selectedBooking.checkOut },
                { label: "Duration", value: `${selectedBooking.nights} nights` },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
                >
                  <span style={{ fontSize: 12, color: "#9ca3af" }}>{label}</span>
                  <span
                    style={{
                      fontSize: 12,
                      color: "#1a1a2e",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <button
                style={{
                  backgroundColor: "#4AAEF0",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "9px 0",
                  fontSize: 12.5,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={() => alert(`Edit booking ${selectedBooking.id}`)}
              >
                Edit Booking
              </button>
              {selectedBooking.status !== "cancelled" && (
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#b91c1c",
                    border: "0.5px solid #fca5a5",
                    borderRadius: 6,
                    padding: "9px 0",
                    fontSize: 12.5,
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={() => alert(`Cancel booking ${selectedBooking.id}`)}
                >
                  Cancel Booking
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        select { appearance: none; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}

// ─── Small helpers ─────────────────────────────────────────────────────────────

function ActionBtn({
  children,
  title,
  onClick,
}: {
  children: React.ReactNode;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      title={title}
      onClick={onClick}
      style={{
        width: 28,
        height: 28,
        borderRadius: 6,
        border: "0.5px solid #e8eaed",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: 13,
        color: "#9ca3af",
        transition: "all 0.12s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = "#4AAEF0";
        el.style.backgroundColor = "#eaf3fd";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = "#e8eaed";
        el.style.backgroundColor = "transparent";
      }}
    >
      {children}
    </button>
  );
}

function PageBtn({
  label,
  active,
  disabled,
  onClick,
}: {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 30,
        height: 30,
        borderRadius: 6,
        border: active ? "none" : "0.5px solid #e8eaed",
        backgroundColor: active ? "#4AAEF0" : "transparent",
        color: active ? "#fff" : disabled ? "#d1d5db" : "#4b5563",
        fontSize: 12.5,
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "inherit",
        transition: "all 0.12s",
      }}
    >
      {label}
    </button>
  );
}