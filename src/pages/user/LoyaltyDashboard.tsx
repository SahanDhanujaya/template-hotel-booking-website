import React, { useState } from "react";
import { CreditCard, ChevronRight, ArrowRight, Check } from "lucide-react";

// Mock User Data matching the state shape from previous steps
interface LoyaltyDashboardProps {
  userName?: string;
  membershipId?: string;
}

const LoyaltyDashboard: React.FC<LoyaltyDashboardProps> = ({
  userName = "Sahan Ekanayaka",
  membershipId = "690231407596",
}) => {
  const [activeTab, setActiveTab] = useState<"nights" | "tierPoints">("nights");

  // Mock data for benefits comparison table
  const benefits = [
    {
      text: "Book direct with us and discover a variety of member exclusive offers",
      gold: true,
      jade: true,
    },
    {
      text: "Earn points to redeem free nights",
      gold: true,
      jade: true,
    },
    {
      text: "Daily breakfast",
      gold: false,
      jade: true,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F5F6F8] text-zinc-900 font-sans antialiased pb-12">
      {/* Top Profile Strip */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-200">
        <h1 className="text-2xl font-semibold tracking-tight">
          {userName}
        </h1>
        <div className="flex items-center gap-2 text-sm text-zinc-500 mt-2 sm:mt-0 font-medium">
          <span>{membershipId}</span>
          <span className="text-zinc-300">|</span>
          <button className="flex items-center gap-1 hover:text-teal-700 transition-colors cursor-pointer">
            <CreditCard size={16} />
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-6 space-y-4">
        {/* Row 1: Points Balance and Status Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Card: Points Balance */}
          <div className="lg:col-span-1 bg-white p-6 border border-zinc-200 rounded-2xl flex flex-col justify-between">
            <h2 className="text-[13px] font-medium text-zinc-400">Points balance</h2>
            <div className="my-8 text-center">
              <span className="text-4xl font-semibold tracking-tight text-zinc-900">0</span>
              <span className="text-sm font-medium ml-2 text-zinc-400">Points</span>
            </div>
            <div className="h-4"></div> {/* Spacer to balance height */}
          </div>

          {/* Card: Tier Progress */}
          <div className="lg:col-span-2 bg-white p-6 border border-zinc-200 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h2 className="text-[13px] font-medium text-zinc-500">
                Stay with us to earn nights
              </h2>
              <div className="inline-flex p-0.5 bg-zinc-100 rounded-lg">
                <button
                  onClick={() => setActiveTab("nights")}
                  className={`px-3 py-1 text-[12px] font-medium rounded-md transition-all cursor-pointer ${
                    activeTab === "nights"
                      ? "bg-white text-zinc-900 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-700"
                  }`}
                >
                  Nights
                </button>
                <button
                  onClick={() => setActiveTab("tierPoints")}
                  className={`px-3 py-1 text-[12px] font-medium rounded-md transition-all cursor-pointer ${
                    activeTab === "tierPoints"
                      ? "bg-white text-zinc-900 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-700"
                  }`}
                >
                  Tier Points
                </button>
              </div>
            </div>

            {/* Progress Meter Segment */}
            <div className="my-6">
              <p className="text-[13px] font-semibold text-zinc-800 mb-3">0 night(s)</p>

              {/* Custom Track bar layout */}
              <div className="relative w-full h-1.5 bg-zinc-100 rounded-full mt-4">
                <div className="absolute left-0 top-0 bottom-0 w-[5%] bg-teal-600 rounded-full"></div>

                {/* Visual marker pin pointing down */}
                <div className="absolute left-[5%] -top-2.5 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-teal-600"></div>

                {/* Status Segment Markers */}
                <div className="absolute left-1/3 top-0 bottom-0 w-[2px] bg-white"></div>
                <div className="absolute left-2/3 top-0 bottom-0 w-[2px] bg-white"></div>
              </div>

              {/* Progress Labels */}
              <div className="flex justify-between items-center text-[12px] text-zinc-500 mt-3 px-1">
                <span className="font-medium">Gold</span>
                <span className="font-medium">Jade</span>
                <span className="font-medium">Diamond</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Questers Rewards Promo Bar */}
        <div className="bg-white px-6 py-5 border border-zinc-200 rounded-2xl flex justify-between items-center">
          <h2 className="text-[15px] font-semibold tracking-tight">
            Questers Rewards
          </h2>
          <button className="flex items-center gap-1 text-[12px] font-medium text-teal-700 hover:text-teal-800 transition-colors cursor-pointer">
            View more <ArrowRight size={14} />
          </button>
        </div>

        {/* Row 3: Member Benefits Table Matrix */}
        <div className="bg-white p-6 border border-zinc-200 rounded-2xl">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[15px] font-semibold tracking-tight text-zinc-900">Member benefits</h2>
            <button className="flex items-center gap-1 text-[12px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer">
              View all <ChevronRight size={14} />
            </button>
          </div>

          {/* Table Header Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-100">
                  <th className="py-3 px-4 w-2/3 rounded-l-lg"></th>
                  <th className="py-3 px-4 text-center text-[12px] font-semibold text-zinc-500 w-1/6">
                    Gold
                  </th>
                  <th className="py-3 px-4 text-center text-[12px] font-semibold text-zinc-500 w-1/6 rounded-r-lg">
                    Jade
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {benefits.map((benefit, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/60 transition-colors">
                    <td className="py-4 px-4 text-zinc-600 font-normal leading-relaxed text-[13px]">
                      {benefit.text}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {benefit.gold && (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-50 text-amber-600 mx-auto">
                          <Check size={12} strokeWidth={2.5} />
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {benefit.jade && (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-50 text-teal-700 mx-auto">
                          <Check size={12} strokeWidth={2.5} />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyDashboard;