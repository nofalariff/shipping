import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Wallet, Clock, Headphones } from "lucide-react";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = {
  title: "Daftar gratis — LogiSend",
  description:
    "Buat akun LogiSend gratis dan mulai kirim paket lebih cepat, mudah, dan hemat.",
};

const benefits = [
  { icon: Wallet, text: "Tanpa biaya langganan — bayar per pengiriman" },
  { icon: Clock, text: "Pickup terjadwal dalam hitungan menit" },
  { icon: Headphones, text: "Dukungan pelanggan 24/7" },
];

export default function RegisterPage() {
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
            Mulai kirim dalam hitungan menit
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Gabung bersama 12.000+ pengirim yang sudah mempercayakan paket
            mereka ke LogiSend.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li
                key={b.text}
                className="flex items-center gap-3 text-sm text-white/85"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <b.icon size={15} />
                </span>
                {b.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-4 text-white/85">
          {[
            { value: "50K+", label: "Paket / bulan" },
            { value: "98.2%", label: "Sukses kirim" },
            { value: "120+", label: "Kota" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-xl font-semibold tabular-nums">{s.value}</p>
              <p className="mt-0.5 text-xs text-white/55">{s.label}</p>
            </div>
          ))}
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

          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
