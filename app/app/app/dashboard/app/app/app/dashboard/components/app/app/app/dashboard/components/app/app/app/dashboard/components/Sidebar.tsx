"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = { label: "Nouveau Chat", href: "/dashboard", icon: "💬" },
 { label: "Historique", href: "/dashboard/history", icon: "📋" },
 { label: "Paramètres", href: "/dashboard/settings", icon: "⚙️" },;

export default function Sidebar() {
 const pathname = usePathname();

 return (
 <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
 <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-4">
 <span className="text-xl">🌿</span>
 <span className="text-lg font-semibold text-gray-900">EcoChat</span>
 </div>

 <nav className="flex-1 space-y-1 px-2 py-4">
 {navItems.map((item) => {
 const isActive = pathname === item.href;
 return (
 <Link
 key={item.href}
 href={item.href}
 className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
 isActive
? "bg-emerald-50 text-emerald-700"
: "text-gray-700 hover:bg-gray-100"
 }`}
 >
 <span>{item.icon}</span>
 {item.label}
 </Link>
 );
 })}
 </nav>

 <div className="border-t border-gray-200 p-4">
 <div className="rounded-lg bg-emerald-50 p-3">
 <p className="text-xs font-medium text-emerald-800">Ton impact</p>
 <p className="mt-1 text-xs text-emerald-600">
 🌳 {0.04} arbre planté
 </p>
 <p className="text-xs text-emerald-600">
 💨 {0.012} kg CO₂ évité
 </p>
 </div>
 </div>
 </aside>
 );
   }
