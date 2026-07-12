"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";

interface MarkdownCodeBlockProps {
  language?: string;
  value: string;
}

/**
 * A themed code block component for ReactMarkdown.
 * Provides syntax highlighting and a copy-to-clipboard feature.
 */
export const MarkdownCodeBlock: React.FC<MarkdownCodeBlockProps> = ({
  language = "text",
  value,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group my-8 rounded-xl overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-sm shadow-2xl shadow-black/20 transition-all duration-300 hover:border-emerald-500/30">
      {/* Header / Language Badge */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700/50" />
          </div>
          <span className="ml-2 text-[10px] font-mono text-emerald-500/80 uppercase tracking-[0.2em]">
            {language || "code"}
          </span>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded-md text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="text-[13px] leading-relaxed overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            backgroundColor: "transparent",
            fontSize: "inherit",
            lineHeight: "inherit",
          }}
          codeTagProps={{
            style: {
              fontFamily: 'inherit', // Let Tailwind font-mono handle it
            },
          }}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
