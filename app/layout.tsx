"use client";
import { useState } from "react";
import ImpactBadge from "@/components/ImpactBadge";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
 const sidebarOpen, setSidebarOpen = useState(true);
 const activeChannel, setActiveChannel = useState("general");

 return (
 <html lang="fr">
 <body className="min-h-screen flex flex-col">
 <header className="bg-eco-700 text-white px-4 md:px-6 py-3 flex items-center justify-between shadow-md">
 <div className="flex items-center gap-3">
 <button
 onClick={() => setSidebarOpen(!sidebarOpen)}
 className="md:hidden p-1 hover:bg-eco-600 rounded"
 >
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
 d={sidebarOpen? "M6 18L18 6M6 6l12 12": "M4 6h16M4 12h16M4 18h16"}
 />
 </svg>
 </button>
 <h1 className="text-lg md:text-xl font-semibold">🌿 EcoChat</h1>
 </div>
 <ImpactBadge trees={42} />
 </header>

 <div className="flex-1 flex relative">
 <aside
 className={`
 ${sidebarOpen? "translate-x-0": "-translate-x-full"}
 md:translate-x-0
 fixed md:static inset-y-0 left-0 z-10
 w-64 bg-earth-sand/50 p-4 space-y-2 border-r border-earth-sand
 transition-transform duration-200 ease-in-out
 pt-16 md:pt-4
 `}
 >
 <h3 className="text-sm uppercase tracking-wider text-earth-stone mb-4">Salons</h3>
 { { id: "general", label: "🌍 général" },
 { id: "ecologie", label: "🌱 écologie" },
 { id: "dev", label: "💻 dev" },
 { id: "detente", label: "🧘 détente" },.map((ch) => (
 <button
 key={ch.id}
 onClick={() => setActiveChannel(ch.id)}
 className={`w-full text-left px-3 py-2 rounded-lg transition ${
 activeChannel === ch.id
? "bg-eco-200 text-eco-900 font-medium"
: "hover:bg-eco-100 text-earth-bark"
 }`}
 >
 {ch.label}
 </button>
 ))}
 </aside>

 {sidebarOpen && (
 <div
 className="fixed inset-0 bg-black/20 md:hidden z-0"
 onClick={() => setSidebarOpen(false)}
 />
 )}

 <main className="flex-1 flex flex-col z-0">{children}</main>
 </div>
 </body>
 </html>
 );
}
