import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <HeroSection />
          </div>
        </div>
      </main>
    </div>
  );
}
