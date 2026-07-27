"use client";

import { useState, useRef } from "react";
import { createClient } from "@/utils/supabase/client";

interface MessageInputProps {
 channelId?: string;
 onMessageSent?: () => void;
}

export default function MessageInput({ channelId = "general", onMessageSent }: MessageInputProps) {
 const message, setMessage = useState("");
 const loading, setLoading = useState(false);
 const textareaRef = useRef<HTMLTextAreaElement>(null);
 const supabase = createClient();

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 if (!message.trim() || loading) return;

 setLoading(true);
 try {
 const {
 data: { user },
 } = await supabase.auth.getUser();
 if (!user) return;

 const res = await fetch("/api/chat", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({
 message: message.trim(),
 userId: user.id,
 channelId,
 }),
 });

 if (!res.ok) throw new Error("Erreur envoi");
 setMessage("");
 if (onMessageSent) onMessageSent();
 } catch (err) {
 console.error("Erreur:", err);
 } finally {
 setLoading(false);
 }
 };

 return (
 <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
 <div className="flex items-end gap-2">
 <textarea
 ref={textareaRef}
 value={message}
 onChange={(e) => setMessage(e.target.value)}
 placeholder="Écris ton message..."
 rows={1}
 className="flex-1 resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
 disabled={loading}
 />
 <button
 type="submit"
 disabled={!message.trim() || loading}
 className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
 >
 {loading? "Envoi...": "Envoyer"}
 </button>
 </div>
 </form>
 );
}
