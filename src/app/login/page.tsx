import type { Metadata } from "next";
import Link from "next/link";
import { Truck, MapPin, Zap, PackageCheck } from "lucide-react";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Masuk — LogiSend",
  description:
    "Masuk ke akun LogiSend untuk mengelola pengiriman dan melacak paket kamu.",
};

const highlights = [
  { icon: MapPin, text: "Lacak paket real-time di 120+ kota" },
  { icon: Zap, text: "Harga terbaik dari banyak kurir sekaligus" },
  { icon: PackageCheck, text: "Pickup langsung dari lokasi kamu" },
];

const avatars = ["RK", "AN", "BW", "DS"];

export default function LoginPage() {
  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-2">
      {/* Panel brand — kiri */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-harbor-700 px-12 py-10 text-white lg:flex">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(120% 100% at 100% 0%, rgba(143,180,199,0.28), transparent 55%), radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 22px 22px",
          }}
        />

        <Link
          href="/"
          className="relative z-10 flex w-fit items-center gap-2 font-semibold"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/15 backdrop-blur">
            <Truck size={16} />
          </div>
          LogiSend
        </Link>

        <div className="relative z-10 max-w-sm">
          <h2 className="text-3xl font-semibold leading-tight text-balance">
            Selamat datang kembali
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Kelola pengiriman, lacak paket, dan pantau semuanya dari satu
            dashboard.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li
                key={h.text}
                className="flex items-center gap-3 text-sm text-white/85"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <h.icon size={15} />
                </span>
                {h.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 flex items-center gap-3 text-xs text-white/65">
          <div className="flex -space-x-2">
            {avatars.map((a) => (
              <div
                key={a}
                className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-harbor-700 bg-white/15 text-[10px] font-medium"
              >
                {a}
              </div>
            ))}
          </div>
          12.000+ pengirim aktif mempercayakan paket mereka
        </div>
      </div>

      {/* Form — kanan */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <Link
            href="/"
            className="mb-8 flex w-fit items-center gap-2 font-semibold text-foreground lg:hidden"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-harbor-700">
              <Truck size={14} className="text-white" />
            </div>
            LogiSend
          </Link>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
