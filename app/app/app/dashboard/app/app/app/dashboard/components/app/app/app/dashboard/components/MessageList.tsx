"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface Message {
 id: string;
 content: string;
 role: "user" | "assistant";
 created_at: string;
}

export default function MessageList() {
 const messages, setMessages = useState<Message[]>([]);
 const loading, setLoading = useState(true);
 const supabase = createClient();

 useEffect(() => {
 const fetchMessages = async () => {
 const {
 data: { user },
 } = await supabase.auth.getUser();
 if (!user) return;

 const { data, error } = await supabase
.from("messages")
.select("*")
.eq("user_id", user.id)
.order("created_at", { ascending: true });

 if (error) console.error("Erreur chargement messages:", error);
 else setMessages(data || []);
 setLoading(false);
 };

 fetchMessages();
 }, []);

 if (loading) {
 return (
 <div className="flex items-center justify-center py-20">
 <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
 </div>
 );
 }

 return (
 <div className="flex-1 overflow-y-auto px-4 py-6">
 {messages.length === 0? (
 <div className="flex h-full items-center justify-center">
 <p className="text-center text-gray-500">
 Aucun message pour le moment.
 <br />
 Commence une conversation!
 </p>
 </div>
 ): (
 <div className="space-y-4">
 {messages.map((msg) => (
 <div
 key={msg.id}
 className={`flex ${msg.role === "user"? "justify-end": "justify-start"}`}
 >
 <div
 className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
 msg.role === "user"
? "bg-emerald-600 text-white"
: "bg-gray-100 text-gray-900"
 }`}
 >
 <p className="text-sm">{msg.content}</p>
 <p className="mt-1 text-right text-xs opacity-60">
 {new Date(msg.created_at).toLocaleTimeString([], {
 hour: "2-digit",
 minute: "2-digit",
 })}
 </p>
 </div>
 </div>
 ))}
 </div>
 )}
 </div>
 );
}
