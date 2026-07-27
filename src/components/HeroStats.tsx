const stats = [
  { value: "50K+", label: "Paket dikirim per bulan" },
  { value: "98.2%", label: "Tingkat keberhasilan pengiriman" },
  { value: "120+", label: "Kota terjangkau" },
];

export function HeroStats() {
  return (
    <div className="grid grid-cols-3 border-t border-border">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`py-4 text-center ${
            i < stats.length - 1 ? "border-r border-border" : ""
          }`}
        >
          <p className="text-xl font-semibold text-foreground tabular-nums">
            {stat.value}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
