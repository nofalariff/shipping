import { FileText, PackageCheck, PackageSearch, Ship } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Siapkan dokumen",
    desc: "Lengkapi B/L, invoice, dan dokumen sesuai layanan yang dipilih.",
  },
  {
    icon: Ship,
    title: "Kargo diberangkatkan",
    desc: "Tim kami proses keberangkatan kargo dari pelabuhan asal.",
  },
  {
    icon: PackageSearch,
    title: "Lacak perjalanan",
    desc: "Pantau status kargo secara real-time lewat dashboard.",
  },
  {
    icon: PackageCheck,
    title: "Kargo diterima",
    desc: "Ambil di pelabuhan (Port to Port) atau terima di alamat (Port to Door).",
  },
];

export function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <div key={step.title} className="rounded-2xl border border-border bg-card p-6">
          <span className="text-xs font-medium text-harbor-500">Langkah {i + 1}</span>
          <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-lg bg-harbor-100">
            <step.icon size={18} className="text-harbor-900" />
          </div>
          <h3 className="mt-4 text-sm font-semibold text-foreground">{step.title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
