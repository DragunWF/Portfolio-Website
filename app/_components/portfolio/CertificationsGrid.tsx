import Image from "next/image";
import { ExternalLink, ChevronRight } from "lucide-react";
import { CertificationData } from "../../_types";
import { CERTIFICATIONS_LINK } from "../../_constants";

interface CertificationsGridProps {
  certifications: CertificationData[];
}

export default function CertificationsGrid({
  certifications,
}: CertificationsGridProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="relative bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] group flex flex-col"
          >
            {/* Image Container (16/9 aspect ratio) */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
              {cert.imageUrl && (
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}

              {/* Dark overlay that fades on hover */}
              <div className="absolute inset-0 bg-slate-950/25 transition-opacity duration-300 group-hover:opacity-0" />

              {/* Top-right external verification button */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 border border-slate-700/80 flex items-center justify-center text-slate-300 transition-all hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400 z-10"
                  aria-label={`Verify ${cert.title} credential`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Metadata Layout */}
            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-sm font-medium text-emerald-400 mt-1">
                  {cert.institution}
                </p>
              </div>

              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-slate-950/70 border border-slate-800 text-slate-400 text-xs font-mono">
                  {cert.dateObtained}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button to LinkedIn */}
      <div className="flex justify-center mt-8">
        <a
          href={CERTIFICATIONS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl font-medium transition-all hover:border-emerald-500/40 hover:text-emerald-400"
        >
          Explore All 10+ Certifications on LinkedIn
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
