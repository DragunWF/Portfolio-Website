import { Suspense } from "react";
import { Mail } from "lucide-react";
import { getContactMessages } from "@/app/actions/contact";
import MessageTable from "./MessageTable";
import { ManaCoreLoader } from "@/app/_components/ui/Loaders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbox | Admin Dashboard",
  description: "View and manage contact form submissions.",
};

export default function MessagesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      {/* Page Header — rendered instantly */}
      <div className="flex items-center gap-3 mb-8">
        <Mail className="text-emerald-500" size={22} />
        <h1 className="text-2xl font-semibold text-slate-200">Inbox</h1>
      </div>

      <Suspense fallback={<ManaCoreLoader />}>
        <MessagesContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function MessagesContent({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const page = parseInt((resolvedParams.page as string) ?? "1") || 1;
  const { messages, totalPages, currentPage } = await getContactMessages(
    page,
    10,
  );

  return (
    <>
      {/* Stats row */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
            Total Messages
          </p>
          <p className="text-2xl font-semibold text-slate-200">
            {messages.length + (page - 1) * 10}
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
            This Page
          </p>
          <p className="text-2xl font-semibold text-emerald-500">
            {messages.length}
          </p>
        </div>
      </div>

      <MessageTable
        data={messages}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
}
