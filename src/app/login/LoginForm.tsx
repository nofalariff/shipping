"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GoogleIcon } from "@/components/icons/GoogleIcon";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Mohon isi email dan password kamu.");
      return;
    }
    setLoading(true);
    // TODO: hubungkan ke API autentikasi
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-semibold text-foreground">Masuk ke akun</h1>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Belum punya akun?{" "}
        <Link
          href="/register"
          className="font-medium text-harbor-500 hover:text-harbor-700 transition-colors"
        >
          Daftar gratis
        </Link>
      </p>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        <GoogleIcon />
        Lanjutkan dengan Google
      </button>

      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">
          atau masuk dengan email
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-xs font-medium text-muted-foreground"
            >
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs font-medium text-harbor-500 hover:text-harbor-700 transition-colors"
            >
              Lupa password?
            </Link>
          </div>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan password"
            leftIcon={<Lock size={15} />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
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
        </div>

        {error && <p className="text-xs text-status-exception">{error}</p>}

        <label className="flex w-fit items-center gap-2 text-sm text-muted-foreground select-none">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 rounded border-border accent-harbor-700"
          />
          Ingat saya
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
              Memproses...
            </>
          ) : (
            "Masuk"
          )}
        </Button>
      </form>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Dengan masuk, kamu menyetujui{" "}
        <Link href="/syarat" className="text-foreground hover:underline">
          Syarat Layanan
        </Link>{" "}
        dan{" "}
        <Link href="/privasi" className="text-foreground hover:underline">
          Kebijakan Privasi
        </Link>{" "}
        kami.
      </p>
    </div>
  );
}
