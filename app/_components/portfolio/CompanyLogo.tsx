"use client";

import { useState } from "react";
import { Building2 } from "lucide-react";

interface CompanyLogoProps {
  logoUrl?: string;
  companyName: string;
}

export default function CompanyLogo({
  logoUrl,
  companyName,
}: CompanyLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (!logoUrl || hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-850">
        <Building2 className="w-6 h-6 text-emerald-500/80" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden">
      <img
        src={logoUrl}
        alt={`${companyName} logo`}
        className="w-full h-full object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
