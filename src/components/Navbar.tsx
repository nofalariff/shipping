import Link from "next/link";
import { Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Layanan", href: "/layanan" },
  { label: "Tarif", href: "/tarif" },
  { label: "Lacak paket", href: "/tracking" },
  { label: "Tentang", href: "/tentang" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-3.5 border-b border-border bg-card/80 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
        <div className="w-7 h-7 bg-harbor-700 rounded-md flex items-center justify-center shadow-sm">
          <Truck size={14} className="text-white" />
        </div>
        LogiSend
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Masuk
        </Link>
        <Button variant="primary" size="sm">
          <Link href="/register">Daftar gratis</Link>
        </Button>
      </div>
    </nav>
  );
}
