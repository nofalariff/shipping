import type { LucideIcon } from "lucide-react";
import { Anchor, Home } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  badge?: string;
  description: string;
  features: string[];
  documents: string[];
  highlight?: boolean;
}

export const services: Service[] = [
  {
    id: "port-to-port",
    icon: Anchor,
    title: "Port to Port",
    tagline: "Pelabuhan asal → pelabuhan tujuan",
    description:
      "Kargo diantar dari pelabuhan asal sampai pelabuhan tujuan. Penerima atau kuasanya mengambil sendiri barang di gudang pelabuhan tujuan.",
    features: [
      "Tarif lebih hemat karena tanpa biaya angkut darat",
      "Estimasi waktu sandar & bongkar transparan",
      "Tracking status kapal dan kontainer real-time",
      "Cocok untuk kargo besar atau kontainer penuh (FCL)",
    ],
    documents: [
      "Bill of Lading (B/L) asli",
      "Invoice & Packing List",
      "KTP/NPWP penerima barang",
      "Delivery Order (DO) dari pelabuhan",
      "Surat kuasa pengambilan barang (jika diwakilkan)",
    ],
  },
  {
    id: "port-to-door",
    icon: Home,
    title: "Port to Door",
    tagline: "Pelabuhan tujuan → alamat penerima",
    badge: "Populer",
    highlight: true,
    description:
      "Layanan lengkap — kargo diurus dari pelabuhan tujuan sampai diantar langsung ke alamat penerima. Kamu tinggal terima barang.",
    features: [
      "Diantar langsung ke alamat, tanpa perlu ke pelabuhan",
      "Sudah termasuk trucking, bongkar muat, dan izin gudang",
      "Tracking real-time sampai kargo tiba",
      "Didampingi tim customs clearance untuk kargo impor",
    ],
    documents: [
      "Bill of Lading (B/L)",
      "Invoice & Packing List",
      "KTP/NPWP penerima barang",
      "Alamat lengkap & nomor kontak penerima",
      "Surat Jalan / Delivery Note",
      "PIB atau dokumen bea cukai (khusus kargo impor)",
    ],
  },
];
