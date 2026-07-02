interface AdminComingSoonProps {
  title: string;
  description: string;
}

const AdminComingSoon = ({ title, description }: AdminComingSoonProps) => {
  return (
    <div className="min-h-screen bg-[#F5F6F8] p-6 pt-10 md:p-10 font-sans text-zinc-900 antialiased">
      <div className="max-w-6xl mx-auto">
        <p className="text-[12px] font-medium text-teal-700 mb-1">Hotel Management</p>
        <h1 className="text-[26px] font-semibold tracking-tight text-zinc-900 mb-8">{title}</h1>

        <div className="bg-white rounded-2xl border border-dashed border-zinc-200 px-8 py-16 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l2.5 2.5" />
            </svg>
          </div>
          <p className="text-[15px] font-medium text-zinc-800 mb-1.5">Coming soon</p>
          <p className="text-[13px] text-zinc-400 max-w-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminComingSoon;