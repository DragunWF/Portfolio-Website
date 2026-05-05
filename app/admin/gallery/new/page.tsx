"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, UploadCloud, Loader2 } from "lucide-react";
import { createGalleryItem } from "@/app/actions/gallery";

export default function NewMilestonePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleZoneClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
      const url = URL.createObjectURL(droppedFile);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!file || !title) {
      setError("Please fill out all fields and select an image.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", file);

      const result = await createGalleryItem(formData);

      if (result.success) {
        router.push("/admin/gallery");
        router.refresh();
      } else {
        setError(result.error || "Failed to create milestone.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto w-full flex flex-col gap-6">
      <header>
        <Link
          href="/admin/gallery"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          Back to Gallery
        </Link>
        <h1 className="text-3xl font-bold text-slate-200">Add New Milestone</h1>
        <p className="text-slate-400 mt-1">
          Upload an image and provide details for the new milestone.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 flex flex-col gap-6"
      >
        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Image Upload Zone */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Milestone Image
          </label>
          <div
            onClick={handleZoneClick}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-dashed border-slate-700 hover:border-emerald-500/50 bg-slate-950/50 rounded-xl transition-colors cursor-pointer relative flex flex-col items-center justify-center py-16 px-6 text-center overflow-hidden min-h-[300px] gap-4"
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            {previewUrl ? (
              <>
                <Image
                  src={previewUrl}
                  alt="Preview"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-slate-900/80 border border-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
                    Click to change image
                  </span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4">
                <UploadCloud size={48} className="text-emerald-500" />
                <div className="flex flex-col items-center gap-1">
                  <p className="text-slate-200 font-medium">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-slate-500 text-sm">
                    PNG, JPG, or HEIC (max. 4MB)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Inputs (Title) */}
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Hackathon First Place"
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:border-emerald-500/50 outline-none transition-colors"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 py-3 rounded-lg font-medium hover:bg-emerald-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Uploading...</span>
            </>
          ) : (
            <span>Save Milestone</span>
          )}
        </button>
      </form>
    </div>
  );
}
