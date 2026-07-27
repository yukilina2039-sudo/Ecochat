"use client";
import { useState } from "react";

export default function MessageInput({ onSend }: { onSend: (text: string) => void }) {
 const text, setText = useState("");

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (!text.trim()) return;
 onSend(text.trim());
 setText("");
 };

 return (
 <form onSubmit={handleSubmit} className="border-t border-earth-sand p-3 md:p-4 bg-earth-beige/80">
 <div className="flex gap-2">
 <input
 type="text"
 value={text}
 onChange={(e) => setText(e.target.value)}
 placeholder="Écris un message…"
 className="flex-1 rounded-xl border border-earth-sand px-3 md:px-4 py-2 md:py-2.5 bg-white/80 focus:outline-none focus:ring-2 focus:ring-eco-400 placeholder-earth-stone/60 text-sm md:text-base"
 />
 <button
 type="submit"
 className="bg-eco-600 hover:bg-eco-700 text-white px-4 md:px-5 py-2 rounded-xl transition text-sm md:text-base"
 >
 Envoyer
 </button>
 </div>
 </form>
 );
}
