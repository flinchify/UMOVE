"use client";

import { useState } from "react";
import Image from "next/image";

const ADMIN_PASSWORD = "umove-admin-2026";

interface Quote { id: number; name: string; email: string; phone: string; company: string; service: string; size: string; location: string; message: string; date: string; status: "new"|"contacted"|"quoted"|"won"|"lost"; verified: boolean; }
interface ContainerPrice { id: string; name: string; size: string; condition: string; priceMin: number; priceMax: number; visible: boolean; }
interface FreightZone { zone: string; min: number; max: number; days: string; }

const initQuotes: Quote[] = [];

const initPrices: ContainerPrice[] = [
  { id: "20ft-std-new", name: "20ft Standard", size: "20ft", condition: "New", priceMin: 3200, priceMax: 3600, visible: true },
  { id: "20ft-std-used", name: "20ft Standard", size: "20ft", condition: "Used", priceMin: 2100, priceMax: 2500, visible: true },
  { id: "20ft-hc-new", name: "20ft High Cube", size: "20ft", condition: "New", priceMin: 3800, priceMax: 4350, visible: true },
  { id: "40ft-hc-new", name: "40ft High Cube", size: "40ft", condition: "New", priceMin: 6200, priceMax: 6700, visible: true },
  { id: "40ft-hc-used", name: "40ft High Cube", size: "40ft", condition: "Used", priceMin: 3100, priceMax: 3600, visible: true },
  { id: "10ft-hc-new", name: "10ft High Cube", size: "10ft", condition: "New", priceMin: 6400, priceMax: 7400, visible: true },
  { id: "20ft-side", name: "20ft Side Opening", size: "20ft", condition: "New", priceMin: 9000, priceMax: 10000, visible: true },
  { id: "40ft-side-4d", name: "40ft 4-Door Side Opening", size: "40ft", condition: "New", priceMin: 12200, priceMax: 13200, visible: true },
  { id: "20ft-dg", name: "20ft Dangerous Goods", size: "20ft", condition: "New", priceMin: 19250, priceMax: 21500, visible: true },
];

const initFreight: FreightZone[] = [
  { zone: "Perth Metro", min: 250, max: 450, days: "2-3" },
  { zone: "Perth Extended", min: 400, max: 650, days: "3-5" },
  { zone: "Regional WA South", min: 800, max: 1500, days: "5-10" },
  { zone: "Regional WA North", min: 1500, max: 3500, days: "7-14" },
  { zone: "Remote WA", min: 3000, max: 6000, days: "10-21" },
];

const statusColors: Record<string, string> = { new: "bg-blue-100 text-blue-700", contacted: "bg-yellow-100 text-yellow-700", quoted: "bg-purple-100 text-purple-700", won: "bg-green-100 text-green-700", lost: "bg-red-100 text-red-700" };
const stats = { totalQuotes: 0, thisMonth: 0, conversionRate: 0, avgResponse: "—", revenue: "$0", topService: "—" };

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [tab, setTab] = useState<"dashboard"|"quotes"|"pricing"|"freight"|"blog"|"api">("dashboard");
  const [quotes, setQuotes] = useState(initQuotes);
  const [prices, setPrices] = useState(initPrices);
  const [freight, setFreight] = useState(initFreight);

  if (!authed) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full">
        <Image src="/images/U-Move-logo-copy.png" alt="U-Move" width={120} height={36} className="mb-6" />
        <h1 className="text-xl font-bold text-gray-900">Admin Login</h1>
        <form onSubmit={e => { e.preventDefault(); if(pw===ADMIN_PASSWORD) setAuthed(true); }} className="mt-4 space-y-4">
          <input type="password" value={pw} onChange={e=>setPw(e.target.value)} placeholder="Password" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[var(--color-umove-red)]" />
          <button type="submit" className="w-full bg-[var(--color-umove-red)] text-white font-bold py-3 rounded-xl hover:bg-[var(--color-umove-red-light)]">Login</button>
        </form>
      </div>
    </div>
  );

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "quotes", label: "Quotes", badge: quotes.filter(q=>q.status==="new").length },
    { id: "pricing", label: "Pricing" },
    { id: "freight", label: "Freight" },
    { id: "blog", label: "Blog" },
    { id: "api", label: "API" },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/images/U-Move-logo-copy.png" alt="U-Move" width={100} height={30} />
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">Admin</span>
        </div>
        <div className="flex items-center gap-1 overflow-x-auto">
          {tabs.map(t => (
            <button key={t.id} onClick={()=>setTab(t.id)} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${tab===t.id ? "bg-[var(--color-umove-red)] text-white" : "text-gray-500 hover:bg-gray-100"}`}>
              {t.label}
              {"badge" in t && t.badge ? <span className="ml-1.5 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">{t.badge}</span> : null}
            </button>
          ))}
          <button onClick={()=>setAuthed(false)} className="text-xs text-gray-400 hover:text-gray-600 ml-3">Logout</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* DASHBOARD */}
        {tab==="dashboard" && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {[
                { l: "Total Quotes", v: stats.totalQuotes.toString() },
                { l: "This Month", v: stats.thisMonth.toString() },
                { l: "Conversion", v: `${stats.conversionRate}%` },
                { l: "Avg Response", v: stats.avgResponse },
                { l: "Revenue (MTD)", v: stats.revenue },
                { l: "Top Service", v: stats.topService },
              ].map(s=>(
                <div key={s.l} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">{s.l}</div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Quotes by Service</h3>
                {[{s:"Self Storage",c:15,p:32},{s:"Container Hire",c:11,p:23},{s:"Container Sales",c:8,p:17},{s:"Modifications",c:7,p:15},{s:"Mining",c:4,p:9},{s:"Removals",c:2,p:4}].map(i=>(
                  <div key={i.s} className="mb-3"><div className="flex justify-between text-sm mb-1"><span>{i.s}</span><span className="text-gray-400">{i.c} ({i.p}%)</span></div><div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[var(--color-umove-red)] rounded-full" style={{width:`${i.p}%`}}/></div></div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button onClick={()=>setTab("pricing")} className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm"><span className="font-bold">Update Pricing</span> — Change container sale/hire prices</button>
                  <button onClick={()=>setTab("freight")} className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm"><span className="font-bold">Edit Freight Zones</span> — Adjust delivery cost estimates</button>
                  <button onClick={()=>setTab("blog")} className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm"><span className="font-bold">Manage Blog</span> — View and manage articles</button>
                  <button onClick={()=>setTab("api")} className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm"><span className="font-bold">API Documentation</span> — For freight & AI integrations</button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* QUOTES */}
        {tab==="quotes" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100"><h3 className="font-bold text-gray-900">Quote Requests ({quotes.length})</h3></div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left"><tr>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Verified</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Name</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Service</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Size</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Location</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Date</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Status</th>
                </tr></thead>
                <tbody>{quotes.map(q=>(
                  <tr key={q.id} className={`border-t border-gray-50 hover:bg-gray-50 ${!q.verified?"opacity-50":""}`}>
                    <td className="px-4 py-3">{q.verified?<span className="text-green-500 text-xs font-bold">✓</span>:<span className="text-red-500 text-xs font-bold">✗</span>}</td>
                    <td className="px-4 py-3"><div className="font-medium text-gray-900">{q.name}</div><div className="text-[11px] text-gray-400">{q.email} · {q.phone}</div>{q.company&&<div className="text-[11px] text-gray-400">{q.company}</div>}</td>
                    <td className="px-4 py-3 text-gray-600">{q.service}</td>
                    <td className="px-4 py-3 text-gray-600">{q.size}</td>
                    <td className="px-4 py-3 text-gray-600">{q.location||"—"}</td>
                    <td className="px-4 py-3 text-gray-400">{q.date}</td>
                    <td className="px-4 py-3"><select value={q.status} onChange={e=>setQuotes(p=>p.map(x=>x.id===q.id?{...x,status:e.target.value as Quote["status"]}:x))} className={`text-xs font-bold px-3 py-1 rounded-full border-0 ${statusColors[q.status]}`}>{["new","contacted","quoted","won","lost"].map(s=><option key={s} value={s}>{s}</option>)}</select></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </div>
        )}

        {/* PRICING */}
        {tab==="pricing" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Container Pricing (excl. GST)</h3>
              <span className="text-xs text-gray-400">Changes update the website and API instantly</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left"><tr>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Container</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Size</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Condition</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Price From ($)</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Price To ($)</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Show on Site</th>
                </tr></thead>
                <tbody>{prices.map((p,i)=>(
                  <tr key={p.id} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                    <td className="px-4 py-3 text-gray-600">{p.size}</td>
                    <td className="px-4 py-3 text-gray-600">{p.condition}</td>
                    <td className="px-4 py-2"><input type="number" value={p.priceMin} onChange={e=>setPrices(prev=>{const n=[...prev];n[i]={...n[i],priceMin:+e.target.value};return n;})} className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[var(--color-umove-red)]" /></td>
                    <td className="px-4 py-2"><input type="number" value={p.priceMax} onChange={e=>setPrices(prev=>{const n=[...prev];n[i]={...n[i],priceMax:+e.target.value};return n;})} className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[var(--color-umove-red)]" /></td>
                    <td className="px-4 py-2 text-center"><button onClick={()=>setPrices(prev=>{const n=[...prev];n[i]={...n[i],visible:!n[i].visible};return n;})} className={`relative w-12 h-6 rounded-full transition-colors ${p.visible?"bg-green-500":"bg-gray-300"}`}><span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${p.visible?"translate-x-6":""}`}/></button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-100">
              <button className="bg-[var(--color-umove-red)] text-white font-bold px-6 py-2 text-sm rounded-lg hover:bg-[var(--color-umove-red-light)]">Save Pricing</button>
            </div>
          </div>
        )}

        {/* FREIGHT */}
        {tab==="freight" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100"><h3 className="font-bold text-gray-900">Estimated Freight Costs (excl. GST)</h3></div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left"><tr>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Zone</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Cost From ($)</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Cost To ($)</th>
                  <th className="px-4 py-3 text-gray-400 font-medium text-xs">Est. Delivery Days</th>
                </tr></thead>
                <tbody>{freight.map((f,i)=>(
                  <tr key={f.zone} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{f.zone}</td>
                    <td className="px-4 py-2"><input type="number" value={f.min} onChange={e=>setFreight(prev=>{const n=[...prev];n[i]={...n[i],min:+e.target.value};return n;})} className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[var(--color-umove-red)]" /></td>
                    <td className="px-4 py-2"><input type="number" value={f.max} onChange={e=>setFreight(prev=>{const n=[...prev];n[i]={...n[i],max:+e.target.value};return n;})} className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[var(--color-umove-red)]" /></td>
                    <td className="px-4 py-2"><input type="text" value={f.days} onChange={e=>setFreight(prev=>{const n=[...prev];n[i]={...n[i],days:e.target.value};return n;})} className="w-20 px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[var(--color-umove-red)]" /></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-100">
              <button className="bg-[var(--color-umove-red)] text-white font-bold px-6 py-2 text-sm rounded-lg hover:bg-[var(--color-umove-red-light)]">Save Freight Costs</button>
            </div>
          </div>
        )}

        {/* BLOG */}
        {tab==="blog" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Blog Posts (12)</h3>
              <button className="bg-[var(--color-umove-red)] text-white font-bold px-4 py-2 text-xs rounded-lg">+ New Post</button>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { title: "Container Storage vs Traditional Self-Storage Perth", date: "Mar 28", cat: "Storage", views: 342 },
                { title: "What Can You Fit in a 20ft Container?", date: "Mar 25", cat: "Guides", views: 518 },
                { title: "Container Modifications for Mining Operations", date: "Mar 20", cat: "Mining", views: 287 },
                { title: "How Container Storage Saves Businesses Thousands", date: "Mar 15", cat: "Business", views: 195 },
                { title: "Long-Term vs Short-Term Storage", date: "Mar 10", cat: "Storage", views: 421 },
                { title: "Best Self-Storage Options Perth 2026", date: "Mar 5", cat: "Guides", views: 632 },
                { title: "Building a Container Home in Perth 2026", date: "Feb 28", cat: "Modifications", views: 456 },
                { title: "How to Choose the Right Container Size", date: "Feb 20", cat: "Guides", views: 389 },
                { title: "Starting a Container Cafe in Perth", date: "Feb 10", cat: "Modifications", views: 278 },
                { title: "Dangerous Goods Container Storage in WA", date: "Jan 25", cat: "Mining", views: 167 },
                { title: "How to Prepare for Container Delivery", date: "Jan 15", cat: "Guides", views: 234 },
                { title: "Side-Opening Containers Guide", date: "Jan 5", cat: "Guides", views: 312 },
              ].map(b=>(
                <div key={b.title} className="px-6 py-3 flex items-center justify-between hover:bg-gray-50">
                  <div><div className="font-medium text-gray-900 text-sm">{b.title}</div><div className="text-xs text-gray-400">{b.date} · {b.cat}</div></div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-400">{b.views} views</span>
                    <button className="text-xs text-[var(--color-umove-red)] font-bold">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* API */}
        {tab==="api" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg">Container API</h3>
              <p className="text-gray-500 text-sm mt-1">Public REST API for freight services, AI agents, and third-party integrations to query U-Move container availability and pricing.</p>
              <div className="mt-6 space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2"><span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">GET</span><code className="text-sm font-mono text-gray-700">/api/containers</code></div>
                  <p className="text-xs text-gray-500">Returns all containers with pricing. Add <code>?size=20ft</code> or <code>?type=hire</code> to filter. Add <code>?freight=true</code> to include delivery zone estimates.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Example Request</div>
                  <code className="text-sm font-mono text-[var(--color-umove-red)] break-all">GET https://u-move.com.au/api/containers?size=20ft&type=sale&freight=true</code>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Example Response</div>
                  <pre className="text-xs font-mono text-gray-600 overflow-x-auto">{JSON.stringify({success:true,provider:"U-Move Australia",containers:[{id:"20ft-std-new",size:"20ft",condition:"new",variant:"Standard",priceMin:3200,priceMax:3600}],freightZones:[{zone:"Perth Metro",estimatedCost:{min:250,max:450}}]},null,2)}</pre>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Rate Limits</div>
                  <p className="text-xs text-gray-500">100 requests per hour per IP. No API key required. CORS enabled for all origins.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
