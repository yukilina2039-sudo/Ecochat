import Link from "next/link";

export default function Home() {
 return (
 <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
 <div className="max-w-md space-y-6">
 <span className="text-6xl">🌿</span>
 <h2 className="text-3xl font-bold text-eco-800">Bienvenue sur EcoChat</h2>
 <p className="text-earth-stone text-lg">
 Un espace de discussion doux, minimaliste et bon pour la planète.
 </p>
 <div className="flex gap-4 justify-center">
 <Link
 href="/signup"
 className="bg-eco-600 hover:bg-eco-700 text-white px-6 py-2 rounded-lg transition"
 >
 Rejoindre
 </Link>
 <Link
 href="/login"
 className="border border-eco-600 text-eco-700 hover:bg-eco-50 px-6 py-2 rounded-lg transition"
 >
 Connexion
 </Link>
 </div>
 </div>
 </div>
 );
}
