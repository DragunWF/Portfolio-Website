"use client";

import React, { useState, useTransition } from "react";
import { Mail, Key, Lock, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { login } from "./actions";

export default function LoginPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    startTransition(async () => {
      const result = await login(formData);

      if (result?.error) {
        setError(result.error);
        return;
      }

      // Refresh and redirect on success
      router.refresh();
      router.push("/admin/notes");
    });
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-900/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-slate-800/40 rounded-full blur-[128px] pointer-events-none" />

      {/* Glass Login Card */}
      <form
        onSubmit={handleLogin}
        className="z-10 relative w-full max-w-md p-8 sm:p-10 rounded-2xl bg-slate-900/30 backdrop-blur-2xl border border-slate-700/50 shadow-2xl"
      >
        {/* Header */}
        <Lock size={32} className="text-emerald-500/80 mx-auto" />
        <h1 className="text-center text-lg font-mono text-slate-300 tracking-[0.2em] mt-4 mb-8">
          ADMIN AUTHENTICATION
        </h1>

        {/* Error HUD */}
        {error && (
          <div className="mb-6 flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-950/40 px-4 py-3 text-sm text-red-400 backdrop-blur-sm">
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="space-y-4">
          {/* Email Field */}
          <div className="relative flex items-center">
            <Mail className="absolute left-4 text-slate-500" size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoFocus
              required
              disabled={isPending}
              className="bg-slate-950/40 border border-slate-800 text-slate-200 placeholder:text-slate-600 rounded-lg pl-12 pr-4 py-3 w-full outline-none transition-all focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 disabled:opacity-50"
            />
          </div>

          {/* Password Field */}
          <div className="relative flex items-center">
            <Key className="absolute left-4 text-slate-500" size={20} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              disabled={isPending}
              className="bg-slate-950/40 border border-slate-800 text-slate-200 placeholder:text-slate-600 rounded-lg pl-12 pr-4 py-3 w-full outline-none transition-all focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 disabled:opacity-50"
            />
          </div>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          disabled={isPending}
          className="mt-6 w-full py-3 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 font-medium tracking-wide flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <span className="h-4 w-4 rounded-full border-2 border-emerald-500/30 border-t-emerald-500 animate-spin" />
              Authenticating...
            </>
          ) : (
            "Initialize Session"
          )}
        </button>
      </form>
    </div>
  );
}
