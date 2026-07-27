"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Sidebar from "./components/Sidebar";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import UserMenu from "./components/UserMenu";

export default function DashboardPage() {
 const loading, setLoading = useState(true);
 const router = useRouter();
 const supabase = createClient();

 useEffect(() => {
 const checkUser = async () => {
 const {
 data: { user },
 } = await supabase.auth.getUser();
 if (!user) {
 router.push("/login");
 } else {
 setLoading(false);
 }
 };
 checkUser();
 }, []);

 if (loading) {
 return (
 <div className="flex h-screen items-center justify-center">
 <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
 </div>
 );
 }

 return (
 <div className="flex h-screen bg-white">
 <Sidebar />

 <div className="flex flex-1 flex-col">
 {/* Header */}
 <header className="flex items-center justify-between border-b border-gray-200 px-6 py-3">
 <h1 className="text-lg font-semibold text-gray-900">EcoChat</h1>
 <UserMenu />
 </header>

 {/* Messages */}
 <MessageList />

 {/* Input */}
 <MessageInput />
 </div>
 </div>
 );
}
