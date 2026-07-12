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

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

function parseDateString(dateStr: string): Date {
  if (dateStr.trim().toLowerCase() === "present") {
    return new Date();
  }
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length !== 2) {
    return new Date();
  }
  const [monthStr, yearStr] = parts;
  const month = MONTHS[monthStr] ?? 0;
  const year = parseInt(yearStr, 10);
  return new Date(year, month, 1);
}

export function calculateDuration(startDateStr: string, endDateStr: string): string {
  const start = parseDateString(startDateStr);
  const end = parseDateString(endDateStr);

  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const endYear = end.getFullYear();
  const endMonth = end.getMonth();

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  
  if (totalMonths <= 0) return "0 mos";
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearParts = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthParts = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  if (yearParts && monthParts) {
    return `${yearParts} ${monthParts}`;
  }
  return yearParts || monthParts;
}

export function calculateCompanyDuration(roles: { startDate: string; endDate: string }[]): string {
  if (!roles || roles.length === 0) return "0 mos";

  let earliestStart = parseDateString(roles[0].startDate);
  let latestEnd = parseDateString(roles[0].endDate);

  for (let i = 1; i < roles.length; i++) {
    const start = parseDateString(roles[i].startDate);
    const end = parseDateString(roles[i].endDate);
    if (start < earliestStart) earliestStart = start;
    if (end > latestEnd) latestEnd = end;
  }

  const startYear = earliestStart.getFullYear();
  const startMonth = earliestStart.getMonth();
  const endYear = latestEnd.getFullYear();
  const endMonth = latestEnd.getMonth();

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  
  if (totalMonths <= 0) return "0 mos";
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearParts = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthParts = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  if (yearParts && monthParts) {
    return `${yearParts} ${monthParts}`;
  }
  return yearParts || monthParts;
}
