"use client";

import React, { useState } from "react";
import { Mail, Key, Lock } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase logic will go here
    console.log("Login attempted with:", email);
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
              className="bg-slate-950/40 border border-slate-800 text-slate-200 placeholder:text-slate-600 rounded-lg pl-12 pr-4 py-3 w-full outline-none transition-all focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50"
              required
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
              className="bg-slate-950/40 border border-slate-800 text-slate-200 placeholder:text-slate-600 rounded-lg pl-12 pr-4 py-3 w-full outline-none transition-all focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50"
              required
            />
          </div>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="mt-6 w-full py-3 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 font-medium tracking-wide"
        >
          Initialize Session
        </button>
      </form>
    </div>
  );
}
