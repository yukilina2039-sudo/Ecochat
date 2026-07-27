"use client";
import { useState } from "react";
import ChatWindow from "@/components/ChatWindow";
import MessageInput from "@/components/MessageInput";

export default function Dashboard() {
 const messages, setMessages = useState( { id: "1", username: "EcoBot", content: "Bienvenue sur EcoChat 🌿", created_at: new Date().toISOString() },);

 const handleSend = (text: string) => {
 const newMsg = {
 id: Date.now().toString(),
 username: "Toi",
 content: text,
 created_at: new Date().toISOString(),
 };
 setMessages((prev) =>...prev, newMsg);
 };

 return (
 <div className="flex-1 flex flex-col h- calc(100vh-60px)">
 <div className="px-4 md:px-6 py-3 border-b border-earth-sand bg-white/50">
 <h2 className="text-lg font-semibold text-eco-800">🌍 général</h2>
 <p className="text-sm text-earth-stone">Discussions générales</p>
 </div>
 <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4">
 <ChatWindow messages={messages} />
 </div>
 <MessageInput onSend={handleSend} />
 </div>
 );
}
