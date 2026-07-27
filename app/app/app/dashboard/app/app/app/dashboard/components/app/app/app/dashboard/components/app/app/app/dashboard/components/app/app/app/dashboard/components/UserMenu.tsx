"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function UserMenu() {
 const open, setOpen = useState(false);
 const router = useRouter();
 const supabase = createClient();

 const handleLogout = async () => {
 await supabase.auth.signOut();
 router.push("/login");
 };

 return (
 <div className="relative">
 <button
 onClick={() => setOpen(!open)}
 className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-700"
 >
 👤
 </button>

 {open && (
 <>
 <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
 <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
 <button
 onClick={() => {
 setOpen(false);
 router.push("/dashboard/settings");
 }}
 className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
 >
 ⚙️ Paramètres
 </button>
 <hr className="my-1 border-gray-100" />
 <button
 onClick={handleLogout}
 className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
 >
 🚪 Déconnexion
 </button>
 </div>
 </>
 )}
 </div>
 );
}
