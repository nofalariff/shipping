"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { User, Mail, Phone, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { cn } from "@/lib/utils";

type AccountType = "individu" | "bisnis";

const accountTypes: { value: AccountType; label: string }[] = [
  { value: "individu", label: "Individu" },
  { value: "bisnis", label: "Bisnis" },
];

// 0 = kosong, 1 = lemah, 2 = sedang, 3 = kuat
function passwordScore(pw: string): number {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw) || /[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const strengthMeta = [
  { label: "", color: "" },
  { label: "Lemah", color: "bg-status-exception" },
  { label: "Sedang", color: "bg-status-delayed" },
  { label: "Kuat", color: "bg-status-delivered" },
];

export function RegisterForm() {
  const [accountType, setAccountType] = useState<AccountType>("individu");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const score = passwordScore(password);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Mohon lengkapi nama, email, dan password kamu.");
      return;
    }
    if (score < 2) {
      setError("Gunakan password yang lebih kuat (min. 8 karakter).");
      return;
    }
    if (!agree) {
      setError("Kamu perlu menyetujui Syarat Layanan terlebih dahulu.");
      return;
    }
    setLoading(true);
    // TODO: hubungkan ke API pendaftaran
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-semibold text-foreground">Buat akun</h1>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Sudah punya akun?{" "}
        <Link
          href="/login"
          className="font-medium text-harbor-500 hover:text-harbor-700 transition-colors"
        >
          Masuk di sini
        </Link>
      </p>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        <GoogleIcon />
        Daftar dengan Google
      </button>

      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">
          atau daftar dengan email
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Tipe akun */}
        <div>
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Daftar sebagai
          </span>
          <div className="grid grid-cols-2 gap-1 rounded-lg border border-border bg-muted p-1">
            {accountTypes.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => setAccountType(t.value)}
                aria-pressed={accountType === t.value}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  accountType === t.value
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <Input
          id="name"
          type="text"
          label={accountType === "bisnis" ? "Nama bisnis" : "Nama lengkap"}
          placeholder={
            accountType === "bisnis" ? "PT Contoh Logistik" : "Nama kamu"
          }
          leftIcon={<User size={15} />}
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />

        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="nama@email.com"
          leftIcon={<Mail size={15} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <Input
          id="phone"
          type="tel"
          label="Nomor HP"
          placeholder="0812xxxxxxxx"
          leftIcon={<Phone size={15} />}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
        />

        <div>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            placeholder="Minimal 8 karakter"
            leftIcon={<Lock size={15} />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            rightSlot={
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={
                  showPassword ? "Sembunyikan password" : "Tampilkan password"
                }
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            }
          />
          {password && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex flex-1 gap-1">
                {[1, 2, 3].map((seg) => (
                  <div
                    key={seg}
                    className={cn(
                      "h-1 flex-1 rounded-full transition-colors",
                      seg <= score ? strengthMeta[score].color : "bg-border"
                    )}
                  />
                ))}
              </div>
              <span className="w-12 text-right text-[10px] font-medium text-muted-foreground">
                {strengthMeta[score].label}
              </span>
            </div>
          )}
        </div>

        {error && <p className="text-xs text-status-exception">{error}</p>}

        <label className="flex items-start gap-2 text-xs text-muted-foreground select-none">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-harbor-700"
          />
          <span>
            Saya menyetujui{" "}
            <Link href="/syarat" className="text-foreground hover:underline">
              Syarat Layanan
            </Link>{" "}
            dan{" "}
            <Link href="/privasi" className="text-foreground hover:underline">
              Kebijakan Privasi
            </Link>{" "}
            LogiSend.
          </span>
        </label>

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={loading}
          className="w-full justify-center"
        >
          {loading ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Membuat akun...
            </>
          ) : (
            "Buat akun gratis"
          )}
        </Button>
      </form>
    </div>
  );
}
