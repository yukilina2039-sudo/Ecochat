export default function ImpactBadge({ trees }: { trees: number }) {
 return (
 <div className="flex items-center gap-1.5 bg-eco-600/30 px-3 py-1 rounded-full text-sm">
 <span>🌱</span>
 <span className="font-medium">{trees} arbres plantés</span>
 </div>
 );
}
