"use client";

import { useState } from "react";
import Image from "next/image";
import type { Gallery } from "@prisma/client";
import ScrollReveal from "../ui/ScrollReveal";
import ImageModal from "../ui/ImageModal";

interface GalleryGridProps {
  items: Gallery[];
  layout: "preview" | "full";
}

export default function GalleryGrid({ items, layout }: GalleryGridProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (layout === "preview") {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {items.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div
                className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden relative group cursor-pointer transition-colors hover:border-emerald-500"
                style={{ aspectRatio: "4/3" }}
                onClick={() => openModal(index)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <span className="text-sm font-bold text-emerald-500 drop-shadow-md">
                    {item.title}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ImageModal
          isOpen={isOpen}
          onClose={closeModal}
          items={items}
          currentIndex={currentIndex}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </>
    );
  }

  // layout === "full"
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 group mb-6 transition-colors duration-300 hover:border-emerald-500 cursor-pointer"
            style={{ aspectRatio: "4/3" }}
            onClick={() => openModal(index)}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="text-emerald-500 font-bold mb-1">{item.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {new Date(item.date).toLocaleDateString(undefined, {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
      <ImageModal
        isOpen={isOpen}
        onClose={closeModal}
        items={items}
        currentIndex={currentIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
