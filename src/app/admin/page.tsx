"use client";

import { useState } from "react";
import Image from "next/image";

const ADMIN_PASSWORD = "umove-admin-2026";

interface Quote {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  size: string;
  location: string;
  message: string;
  date: string;
  status: "new" | "contacted" | "quoted" | "won" | "lost";
  verified: boolean;
}

const mockQuotes: Quote[] = [
  { id: 1, name: "James Thompson", email: "james@example.com", phone: "0412 345 678", company: "Thompson Mining", service: "Mining & Industrial", size: "40ft", location: "Karratha WA", message: "Need 3x 40ft crib rooms for mine site shutdown in May.", date: "2026-03-30", status: "new", verified: true },
  { id: 2, name: "Sarah Mitchell", email: "sarah@example.com", phone: "0423 456 789", company: "", service: "Self Storage", size: "20ft", location: "Fremantle", message: "Moving house, need 3 months storage. Settlement in 2 weeks.", date: "2026-03-29", status: "contacted", verified: true },
  { id: 3, name: "David Chen", email: "david@chen.com.au", phone: "0434 567 890", company: "Chen Construction", service: "Container Hire", size: "20ft", location: "Henderson", message: "Need 2x 20ft containers for construction site. 6 month hire.", date: "2026-03-28", status: "quoted", verified: true },
  { id: 4, name: "Test User", email: "test@spam.com", phone: "0000000000", company: "", service: "Container Sales (New)", size: "10ft", location: "", message: "asdfasdf", date: "2026-03-28", status: "new", verified: false },
  { id: 5, name: "Lisa Wang", email: "lisa@wanglogistics.com.au", phone: "0445 678 901", company: "Wang Logistics", service: "Custom Modification", size: "40ft", location: "Welshpool", message: "Container office with AC, power, and network. Need plans and quote.", date: "2026-03-27", status: "won", verified: true },
];

const stats = {
  totalQuotes: 47,
  thisMonth: 12,
  conversionRate: 34.2,
  avgResponseTime: "4.2 hrs",
  revenue: "$28,400",
  topService: "Self Storage",
  byService: [
    { service: "Self Storage", count: 15, pct: 32 },
    { service: "Container Hire", count: 11, pct: 23 },
    { service: "Container Sales", count: 8, pct: 17 },
    { service: "Modifications", count: 7, pct: 15 },
    { service: "Mining", count: 4, pct: 9 },
    { service: "Removals", count: 2, pct: 4 },
  ],
  monthly: [
    { month: "Oct", quotes: 8, converted: 3 },
    { month: "Nov", quotes: 11, converted: 4 },
    { month: "Dec", quotes: 6, converted: 2 },
    { month: "Jan", quotes: 9, converted: 3 },
    { month: "Feb", quotes: 10, converted: 4 },
    { month: "Mar", quotes: 12, converted: 4 },
  ],
};

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  quoted: "bg-purple-100 text-purple-700",
  won: "bg-green-100 text-green-700",
  lost: "bg-red-100 text-red-700",
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState<"dashboard" | "quotes">("dashboard");
  const [quotes, setQuotes] = useState(mockQuotes);

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full">
          <Image src="/images/U-Move-logo-copy.png" alt="U-Move" width={120} height={36} className="mb-6" />
          <h1 className="text-xl font-bold text-gray-900">Admin Login</h1>
          <form onSubmit={(e) => { e.preventDefault(); if (password === ADMIN_PASSWORD) setAuthed(true); }} className="mt-4 space-y-4">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none" />
            <button type="submit" className="w-full bg-[var(--color-umove-red)] text-white font-bold py-3 rounded-xl hover:bg-[var(--color-umove-red-light)] transition-all">Login</button>
          </form>
        </div>
      </div>
    );
  }

  const maxBar = Math.max(...stats.monthly.map(m => m.quotes));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/images/U-Move-logo-copy.png" alt="U-Move" width={100} height={30} />
          <span className="text-sm text-gray-400">Admin Panel</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setTab("dashboard")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "dashboard" ? "bg-[var(--color-umove-red)] text-white" : "text-gray-600 hover:bg-gray-100"}`}>Dashboard</button>
          <button onClick={() => setTab("quotes")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "quotes" ? "bg-[var(--color-umove-red)] text-white" : "text-gray-600 hover:bg-gray-100"}`}>
            Quotes
            <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">{quotes.filter(q => q.status === "new").length}</span>
          </button>
          <button onClick={() => setAuthed(false)} className="text-sm text-gray-400 hover:text-gray-600 ml-4">Logout</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {tab === "dashboard" && (
          <>
            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {[
                { label: "Total Quotes", value: stats.totalQuotes.toString(), sub: "All time" },
                { label: "This Month", value: stats.thisMonth.toString(), sub: "March 2026" },
                { label: "Conversion Rate", value: `${stats.conversionRate}%`, sub: "Quoted → Won" },
                { label: "Avg Response", value: stats.avgResponseTime, sub: "First contact" },
                { label: "Revenue (MTD)", value: stats.revenue, sub: "March 2026" },
                { label: "Top Service", value: stats.topService, sub: "Most enquiries" },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* Monthly chart */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Monthly Quotes & Conversions</h3>
                <div className="flex items-end gap-3 h-48">
                  {stats.monthly.map(m => (
                    <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex flex-col items-center gap-1" style={{ height: "160px", justifyContent: "flex-end" }}>
                        <div className="w-full bg-[var(--color-umove-red)]/20 rounded-t" style={{ height: `${(m.quotes / maxBar) * 100}%` }} />
                        <div className="w-3/4 bg-[var(--color-umove-red)] rounded-t -mt-1" style={{ height: `${(m.converted / maxBar) * 100}%`, marginTop: `-${(m.converted / maxBar) * 160}px`, position: "relative" }} />
                      </div>
                      <div className="text-xs text-gray-400">{m.month}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><span className="w-3 h-3 bg-[var(--color-umove-red)]/20 rounded" /> Quotes</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 bg-[var(--color-umove-red)] rounded" /> Converted</span>
                </div>
              </div>

              {/* Service breakdown */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Quotes by Service</h3>
                <div className="space-y-3">
                  {stats.byService.map(s => (
                    <div key={s.service}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{s.service}</span>
                        <span className="text-gray-400">{s.count} ({s.pct}%)</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[var(--color-umove-red)] rounded-full transition-all duration-700" style={{ width: `${s.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {tab === "quotes" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Quote Requests</h3>
              <div className="flex gap-2 text-xs">
                {["all", "new", "contacted", "quoted", "won", "lost"].map(f => (
                  <button key={f} className="px-3 py-1 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 capitalize">{f}</button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left">
                  <tr>
                    <th className="px-6 py-3 text-gray-400 font-medium">Verified</th>
                    <th className="px-6 py-3 text-gray-400 font-medium">Name</th>
                    <th className="px-6 py-3 text-gray-400 font-medium">Service</th>
                    <th className="px-6 py-3 text-gray-400 font-medium">Size</th>
                    <th className="px-6 py-3 text-gray-400 font-medium">Location</th>
                    <th className="px-6 py-3 text-gray-400 font-medium">Date</th>
                    <th className="px-6 py-3 text-gray-400 font-medium">Status</th>
                    <th className="px-6 py-3 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map(q => (
                    <tr key={q.id} className={`border-t border-gray-50 hover:bg-gray-50 transition-colors ${!q.verified ? "opacity-50" : ""}`}>
                      <td className="px-6 py-4">
                        {q.verified ? (
                          <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                        ) : (
                          <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs">✗</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{q.name}</div>
                        <div className="text-xs text-gray-400">{q.email}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{q.service}</td>
                      <td className="px-6 py-4 text-gray-600">{q.size}</td>
                      <td className="px-6 py-4 text-gray-600">{q.location || "—"}</td>
                      <td className="px-6 py-4 text-gray-400">{q.date}</td>
                      <td className="px-6 py-4">
                        <select
                          value={q.status}
                          onChange={(e) => setQuotes(prev => prev.map(p => p.id === q.id ? { ...p, status: e.target.value as Quote["status"] } : p))}
                          className={`text-xs font-medium px-3 py-1 rounded-full border-0 ${statusColors[q.status]}`}
                        >
                          {["new", "contacted", "quoted", "won", "lost"].map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-[var(--color-umove-red)] text-xs font-medium hover:underline">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
