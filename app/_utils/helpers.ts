export function getReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function getExcerpt(content: string, maxChars = 120): string {
  const plain = content.replace(/[#*`_>\-\[\]()!]/g, "").trim();
  return plain.length > maxChars
    ? plain.slice(0, maxChars).trimEnd() + "…"
    : plain;
}
