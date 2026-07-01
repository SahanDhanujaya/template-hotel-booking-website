import { useState } from "react";
import {
  CameraIcon,
  ShieldCheckIcon,
  BellIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  CalendarIcon,
  GlobeIcon,
} from "lucide-react";
import { useAuth } from "../../context/AuthProvider";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProfileForm {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  nationality: string;
  address: string;
}

interface PasswordForm {
  current: string;
  next: string;
  confirm: string;
}

// ─── Small building blocks ─────────────────────────────────────────────────────

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12.5px] font-medium text-zinc-600 flex items-center gap-1.5">
        {icon}
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-zinc-50 text-[13.5px] text-zinc-900 placeholder-zinc-400 px-3.5 py-2.5 rounded-lg border border-zinc-200 outline-none transition-colors focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10";

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative w-9 h-5 rounded-full transition-colors cursor-pointer shrink-0 ${
        checked ? "bg-teal-700" : "bg-zinc-200"
      }`}
      aria-pressed={checked}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function PreferenceRow({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <div>
        <p className="text-[13px] font-medium text-zinc-800">{title}</p>
        <p className="text-[12px] text-zinc-400">{description}</p>
      </div>
      <Toggle checked={checked} onChange={onChange} />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Profile() {
  const { user } = useAuth();

  // TODO: replace with a real fetch/mutation (e.g. `getUserProfile(user.id)` /
  // `updateUserProfile(...)`) once the profile endpoint is wired up — mock
  // state here purely for layout/testing.
  const [form, setForm] = useState<ProfileForm>({
    fullName: (user as unknown as { name?: string })?.name || "",
    email: user?.email || "",
    phone: "",
    dob: "",
    nationality: "",
    address: "",
  });

  const [password, setPassword] = useState<PasswordForm>({
    current: "",
    next: "",
    confirm: "",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsUpdates: false,
    marketingOffers: true,
  });

  const [saving, setSaving] = useState(false);

  const initials =
    form.fullName
      .split(" ")
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() ||
    form.email?.slice(0, 2).toUpperCase() ||
    "U";

  const handleFieldChange = (key: keyof ProfileForm) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handlePasswordChange = (key: keyof PasswordForm) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setPassword((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSave = () => {
    setSaving(true);
    // TODO: call the real update-profile mutation here.
    setTimeout(() => setSaving(false), 900);
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] font-sans text-zinc-900 antialiased">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-[12px] font-medium text-teal-700 mb-1">
              My Account
            </p>
            <h1 className="text-[26px] font-semibold tracking-tight">Profile</h1>
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className={`px-5 py-2.5 bg-teal-700 text-white text-[13px] font-medium rounded-lg transition-all hover:bg-teal-800 active:scale-[0.98] cursor-pointer ${
              saving ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ── Left column: avatar + membership ──────────────────────────── */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 text-white flex items-center justify-center text-2xl font-semibold">
                  {initials}
                </div>
                <button
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-teal-700 hover:border-teal-300 transition-colors cursor-pointer"
                  aria-label="Change photo"
                >
                  <CameraIcon className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[15px] font-semibold text-zinc-900">
                {form.fullName || "Guest User"}
              </p>
              <p className="text-[12.5px] text-zinc-400 mb-4">{form.email}</p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-teal-50 text-teal-700">
                Gold Member
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-zinc-200 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400 mb-4">
                Membership
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-[13px]">
                  <span className="text-zinc-400">Member ID</span>
                  <span className="font-medium font-mono text-zinc-800">
                    690231407596
                  </span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-zinc-400">Tier</span>
                  <span className="font-medium text-zinc-800">Gold</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-zinc-400">Points balance</span>
                  <span className="font-medium text-zinc-800">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right column: forms ─────────────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Personal information */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <UserIcon className="w-4 h-4 text-teal-700" />
                <h2 className="text-[14px] font-semibold text-zinc-900">
                  Personal information
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full name">
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={handleFieldChange("fullName")}
                    placeholder="Jane Perera"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" icon={<MailIcon className="w-3 h-3 text-zinc-400" />}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleFieldChange("email")}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone" icon={<PhoneIcon className="w-3 h-3 text-zinc-400" />}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleFieldChange("phone")}
                    placeholder="+94 77 123 4567"
                    className={inputClass}
                  />
                </Field>
                <Field label="Date of birth" icon={<CalendarIcon className="w-3 h-3 text-zinc-400" />}>
                  <input
                    type="date"
                    value={form.dob}
                    onChange={handleFieldChange("dob")}
                    className={inputClass}
                  />
                </Field>
                <Field label="Nationality" icon={<GlobeIcon className="w-3 h-3 text-zinc-400" />}>
                  <input
                    type="text"
                    value={form.nationality}
                    onChange={handleFieldChange("nationality")}
                    placeholder="Sri Lankan"
                    className={inputClass}
                  />
                </Field>
                <Field label="Address">
                  <input
                    type="text"
                    value={form.address}
                    onChange={handleFieldChange("address")}
                    placeholder="Colombo, Sri Lanka"
                    className={inputClass}
                  />
                </Field>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-6">
              <div className="flex items-center gap-2 mb-5">
                <ShieldCheckIcon className="w-4 h-4 text-teal-700" />
                <h2 className="text-[14px] font-semibold text-zinc-900">
                  Security
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Current password">
                  <input
                    type="password"
                    value={password.current}
                    onChange={handlePasswordChange("current")}
                    placeholder="••••••••"
                    className={inputClass}
                  />
                </Field>
                <div className="hidden sm:block" />
                <Field label="New password">
                  <input
                    type="password"
                    value={password.next}
                    onChange={handlePasswordChange("next")}
                    placeholder="••••••••"
                    className={inputClass}
                  />
                </Field>
                <Field label="Confirm new password">
                  <input
                    type="password"
                    value={password.confirm}
                    onChange={handlePasswordChange("confirm")}
                    placeholder="••••••••"
                    className={inputClass}
                  />
                </Field>
              </div>

              <button className="mt-4 px-4 py-2 bg-white text-teal-700 border border-teal-200 rounded-lg text-[12.5px] font-medium hover:bg-teal-50 transition-all cursor-pointer">
                Update password
              </button>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-6">
              <div className="flex items-center gap-2 mb-1">
                <BellIcon className="w-4 h-4 text-teal-700" />
                <h2 className="text-[14px] font-semibold text-zinc-900">
                  Notification preferences
                </h2>
              </div>
              <div className="divide-y divide-zinc-100">
                <PreferenceRow
                  title="Email notifications"
                  description="Booking confirmations, receipts, and account alerts"
                  checked={preferences.emailNotifications}
                  onChange={(v) =>
                    setPreferences((prev) => ({ ...prev, emailNotifications: v }))
                  }
                />
                <PreferenceRow
                  title="SMS updates"
                  description="Check-in reminders and time-sensitive alerts"
                  checked={preferences.smsUpdates}
                  onChange={(v) =>
                    setPreferences((prev) => ({ ...prev, smsUpdates: v }))
                  }
                />
                <PreferenceRow
                  title="Marketing offers"
                  description="Exclusive deals, promotions, and rewards updates"
                  checked={preferences.marketingOffers}
                  onChange={(v) =>
                    setPreferences((prev) => ({ ...prev, marketingOffers: v }))
                  }
                />
              </div>
            </div>

            {/* Danger zone */}
            <div className="bg-white rounded-2xl border border-red-100 p-6">
              <h2 className="text-[14px] font-semibold text-red-600 mb-1">
                Delete account
              </h2>
              <p className="text-[12.5px] text-zinc-400 mb-4">
                Permanently remove your account and all associated data. This
                action can't be undone.
              </p>
              <button className="px-4 py-2 bg-white text-red-600 border border-red-200 rounded-lg text-[12.5px] font-medium hover:bg-red-50 transition-all cursor-pointer">
                Delete my account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}