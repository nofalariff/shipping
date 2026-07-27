"use client";

import { ReactNode, useState } from "react";
import { MapPin, ArrowUpDown, Weight, Zap, Truck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface RateResult {
  label: string;
  price: string;
  icon: ReactNode;
  badge?: { text: string; variant: "success" | "warning" };
}

// Data ini nantinya dari API
const mockResults: RateResult[] = [
  {
    label: "Same day",
    price: "Rp 35.000",
    icon: <Zap size={14} className="text-status-delayed" />,
    badge: { text: "Tercepat", variant: "warning" },
  },
  {
    label: "Reguler",
    price: "Rp 18.000",
    icon: <Truck size={14} className="text-harbor-500" />,
    badge: { text: "Termurah", variant: "success" },
  },
  {
    label: "Kargo",
    price: "Rp 12.000",
    icon: <Building2 size={14} className="text-muted-foreground" />,
  },
];

export function RateCheckerCard() {
  const [origin, setOrigin] = useState("Jakarta Selatan");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("1");
  const [showResults, setShowResults] = useState(true);

  const handleCheck = () => {
    // TODO: panggil API tarif
    setShowResults(true);
  };

  return (
    <div className="relative z-10 bg-card rounded-2xl border border-border p-5 w-full max-w-[280px] shadow-xl shadow-steel-900/10 transition-shadow duration-300 hover:shadow-2xl">
      <p className="text-xs font-medium text-muted-foreground mb-4 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-[3px] bg-harbor-500" aria-hidden />
        Cek tarif pengiriman
      </p>

      {/* Input asal */}
      <div className="mb-3">
        <label className="text-[10px] text-muted-foreground mb-1 block">Dari</label>
        <div className="flex items-center gap-2 bg-muted border border-border rounded-lg px-3 py-2 focus-within:border-harbor-500 transition-colors">
          <MapPin size={13} className="text-harbor-500 shrink-0" />
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} className="text-xs text-foreground bg-transparent outline-none w-full" placeholder="Kota asal..." />
        </div>
      </div>

      {/* Divider swap */}
      <div className="flex items-center gap-2 my-1.5 mb-3">
        <div className="flex-1 h-px bg-border" />
        <button
          onClick={() => {
            const tmp = origin;
            setOrigin(destination);
            setDestination(tmp);
          }}
          className="p-1 rounded-full text-muted-foreground hover:bg-muted hover:text-harbor-500 transition-colors"
          aria-label="Tukar asal dan tujuan"
        >
          <ArrowUpDown size={12} />
        </button>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Input tujuan */}
      <div className="mb-3">
        <label className="text-[10px] text-muted-foreground mb-1 block">Ke</label>
        <div className="flex items-center gap-2 bg-muted border border-border rounded-lg px-3 py-2 focus-within:border-harbor-500 transition-colors">
          <MapPin size={13} className="text-muted-foreground/60 shrink-0" />
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} className="text-xs text-foreground bg-transparent outline-none w-full" placeholder="Kota tujuan..." />
        </div>
      </div>

      {/* Input berat */}
      <div className="mb-4">
        <label className="text-[10px] text-muted-foreground mb-1 block">Berat paket</label>
        <div className="flex items-center gap-2 bg-muted border border-border rounded-lg px-3 py-2 focus-within:border-harbor-500 transition-colors">
          <Weight size={13} className="text-muted-foreground/60 shrink-0" />
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} min="0.1" step="0.1" className="text-xs text-foreground bg-transparent outline-none w-full" />
          <span className="text-xs text-muted-foreground shrink-0">kg</span>
        </div>
      </div>

      <Button variant="primary" size="sm" className="w-full justify-center" onClick={handleCheck}>
        Cek tarif
      </Button>

      {/* Hasil tarif */}
      {showResults && (
        <div className="mt-4 pt-4 border-t border-border space-y-2">
          {mockResults.map((result) => (
            <div key={result.label} className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                {result.icon}
                {result.label}
                {result.badge && (
                  <Badge variant={result.badge.variant} className="text-[9px] px-1.5 py-0.5">
                    {result.badge.text}
                  </Badge>
                )}
              </span>
              <span className="text-xs font-medium text-foreground tabular-nums">{result.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
