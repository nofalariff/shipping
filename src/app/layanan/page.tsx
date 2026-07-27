import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Ship } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { services } from "@/components/layanan/data";
import { ServiceCard } from "@/components/layanan/ServiceCard";
import { ServiceComparison } from "@/components/layanan/ServiceComparison";
import { ProcessSteps } from "@/components/layanan/ProcessSteps";

export const metadata: Metadata = {
  title: "Layanan — LogiSend",
  description:
    "Pilih layanan pengiriman kargo laut LogiSend: Port to Port atau Port to Door. Lengkap dengan dokumen yang diperlukan untuk tiap layanan.",
};

export default function LayananPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 text-center">
            <Badge variant="accent" className="mx-auto mb-4 w-fit">
              <Ship size={11} />
              Layanan pengiriman kargo laut
            </Badge>
            <h1 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-foreground text-balance lg:text-4xl">
              Dua cara kirim kargo, kamu yang pilih
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Dari pelabuhan ke pelabuhan, atau langsung sampai depan pintu.
              Semua dilengkapi dokumen yang jelas supaya kargo kamu lancar
              tanpa hambatan.
            </p>
          </div>
        </section>

        {/* Service cards */}
        <section className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="border-y border-border bg-muted/40">
          <div className="mx-auto w-full max-w-6xl px-4 py-14">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground">
                Bandingkan layanan
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Sesuaikan dengan kebutuhan pengiriman kargo kamu
              </p>
            </div>
            <ServiceComparison />
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              Cara kerjanya
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Empat langkah sederhana dari pemesanan sampai kargo diterima
            </p>
          </div>
          <ProcessSteps />
        </section>

        {/* CTA */}
        <section className="mx-auto w-full max-w-6xl px-4 pb-14">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-harbor-700 px-8 py-12 text-center text-white">
            <ClipboardCheck size={28} className="text-harbor-100" />
            <h2 className="text-2xl font-semibold text-balance">
              Siapkan dokumenmu, kami urus pengirimannya
            </h2>
            <p className="max-w-md text-sm text-white/75">
              Tim kami bantu cek kelengkapan dokumen sebelum kargo
              diberangkatkan.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-harbor-900 hover:bg-harbor-100"
                rightIcon={<ArrowRight size={15} />}
              >
                <Link href="/cek-tarif">Cek tarif sekarang</Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/tentang">Hubungi tim kami</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
