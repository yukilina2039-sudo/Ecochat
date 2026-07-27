interface Message {
 id: string;
 username: string;
 content: string;
 created_at: string;
}

export default function ChatWindow({ messages }: { messages: Message[] }) {
 return (
 <div className="space-y-3">
 {messages.length === 0 && (
 <p className="text-earth-stone text-center mt-20 text-sm md:text-base">
 Aucun message pour l'instant. Sois le premier à écrire! 🌿
 </p>
 )}
 {messages.map((msg) => (
 <div key={msg.id} className="bg-white/70 rounded-xl px-3 md:px-4 py-3 shadow-sm">
 <div className="flex items-baseline gap-2 flex-wrap">
 <span className="font-semibold text-eco-700 text-sm">{msg.username}</span>
 <span className="text-xs text-earth-stone">
 {new Date(msg.created_at).toLocaleTimeString("fr-FR", {
 hour: "2-digit",
 minute: "2-digit",
 })}
 </span>
 </div>
 <p className="text-earth-bark mt-1 text-sm md:text-base">{msg.content}</p>
 </div>
 ))}
 </div>
 );
}
