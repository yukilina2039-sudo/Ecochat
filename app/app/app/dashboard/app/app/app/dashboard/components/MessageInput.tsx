"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function MessageInput() {
 const message, setMessage = useState("");
 const loading, setLoading = useState(false);
 const router = useRouter();
 const textareaRef = useRef<HTMLTextAreaElement>(null);
 const supabase = createClient();

 // Auto-resize textarea
 useEffect(() => {
 if (textareaRef.current) {
 textareaRef.current.style.height = "auto";
 textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
 }
 }, message);

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 if (!message.trim() || loading) return;

 setLoading(true);
 try {
 const {
 data: { user },
 } = await supabase.auth.getUser();
 if (!user) {
 router.push("/login");
 return;
 }

 // Envoyer le message via API
 const res = await fetch("/api/chat", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({ message: message.trim(), userId: user.id }),
 });

 if (!res.ok) throw new Error("Erreur lors de l'envoi");

 setMessage("");
 // Optionnel: rafraîchir la liste des messages
 } catch (err) {
 console.error("Erreur:", err);
 } finally {
 setLoading(false);
 }
 };

 const handleKeyDown = (e: React.KeyboardEvent) => {
 if (e.key === "Enter" &&!e.shiftKey) {
 e.preventDefault();
 handleSubmit(e);
 }
 };

 return (
 <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
 <div className="flex items-end gap-2">
 <textarea
 ref={textareaRef}
 value={message}
 onChange={(e) => setMessage(e.target.value)}
 onKeyDown={handleKeyDown}
 placeholder="Écris ton message ici..."
 rows={1}
 className="flex-1 resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
 disabled={loading}
 />
 <button
 type="submit"
 disabled={!message.trim() || loading}
 className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
 >
 {loading? (
 <span className="flex items-center gap-2">
 <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
 </svg>
 Envoi...
 </span>
 ): (
 "Envoyer"
 )}
 </button>
 </div>
 </form>
 );
 }
