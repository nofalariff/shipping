import Link from "next/link";
import { Zap, Play, PackageCheck, Bike } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { RateCheckerCard } from "./RateCheckerCard";
import { FloatingCard } from "./FloatingCard";
import { HeroStats } from "./HeroStats";

const trustAvatars = [
  { initials: "RK", cls: "bg-harbor-100 text-harbor-900" },
  { initials: "AN", cls: "bg-cargo-100 text-cargo-700" },
  { initials: "BW", cls: "bg-status-delivered/15 text-status-delivered" },
  { initials: "DS", cls: "bg-status-delayed/15 text-status-delayed" },
];

export function HeroSection() {
  return (
    <section className="bg-card overflow-hidden">
      {/* Konten utama hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[380px]">
        {/* Sisi kiri — headline dan CTA */}
        <div className="flex flex-col justify-center px-8 lg:px-12 py-16">
          <Badge
            variant="accent"
            className="mb-5 w-fit animate-fade-up [animation-delay:60ms]"
          >
            <Zap size={11} />
            Pengiriman same day tersedia
          </Badge>

          <h1 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4 text-balance animate-fade-up [animation-delay:140ms]">
            Kirim paket lebih{" "}
            <span className="text-harbor-500">cepat</span>,<br />
            lebih mudah, lebih hemat
          </h1>

          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md animate-fade-up [animation-delay:220ms]">
            Solusi logistik untuk individu dan bisnis. Pickup langsung dari
            lokasi kamu, pantau real-time, dan dapatkan harga terbaik.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:300ms]">
            <Button variant="primary" size="lg">
              <Link href="/cek-tarif">Cek tarif sekarang</Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Play size={13} className="fill-current" />}
            >
              Lihat cara kerja
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 mt-8 animate-fade-up [animation-delay:380ms]">
            <div className="flex">
              {trustAvatars.map((a, i) => (
                <div
                  key={a.initials}
                  className={`w-7 h-7 rounded-full border-2 border-card flex items-center justify-center text-[10px] font-medium ${a.cls} ${
                    i > 0 ? "-ml-2" : ""
                  }`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">
                12.000+ pengirim aktif
              </span>{" "}
              sudah mempercayakan paket mereka
            </p>
          </div>
        </div>

        {/* Sisi kanan — interactive widget */}
        <div className="relative hero-canvas flex items-center justify-center p-10 min-h-[400px]">
          {/* Floating notification atas */}
          <FloatingCard
            title="Paket tiba!"
            subtitle="Jl. Sudirman, Jakarta — 2 menit lalu"
            dotColor="green"
            icon={
              <PackageCheck
                size={16}
                className="text-status-delivered shrink-0"
              />
            }
            className="top-6 right-6"
          />

          {/* Rate checker card utama */}
          <RateCheckerCard />

          {/* Floating notification bawah */}
          <FloatingCard
            title="Kurir dalam perjalanan"
            subtitle="ETA 15 menit — estimasi tiba 14:30"
            dotColor="blue"
            icon={<Bike size={16} className="text-harbor-500 shrink-0" />}
            className="bottom-6 left-6 [animation-delay:-3.5s]"
          />
        </div>
      </div>

      {/* Stats bar bawah */}
      <HeroStats />
    </section>
  );
}
