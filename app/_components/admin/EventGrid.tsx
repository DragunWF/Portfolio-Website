"use client";

import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { Edit, Trash2 } from "lucide-react";
import { updateGalleryOrder } from "@/app/actions/gallery";

export interface GalleryItem {
  id: string;
  title: string;
  date: Date;
  imageUrl: string;
  order: number;
}

interface EventGridProps {
  initialItems: GalleryItem[];
}

export default function EventGrid({ initialItems }: EventGridProps) {
  const [items, setItems] = useState(initialItems);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  if (!isMounted) return null;

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const newItems = arrayMove(items, oldIndex, newIndex);
        setItems(newItems);

        // Prepare items for DB update (map to id and new index)
        const updatedOrder = newItems.map((item, index) => ({
          id: item.id,
          order: index,
        }));

        // Trigger background sync outside of the rendering phase
        updateGalleryOrder(updatedOrder).catch((err) => {
          console.error("Failed to sync order to database:", err);
        });
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <SortableContext
          items={items.map((i) => i.id)}
          strategy={rectSortingStrategy}
        >
          {items.map((item) => (
            <SortableGalleryCard key={item.id} item={item} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}

interface SortableGalleryCardProps {
  item: GalleryItem;
}

function SortableGalleryCard({ item }: SortableGalleryCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 group cursor-grab active:cursor-grabbing aspect-video"
    >
      {/* Background Image */}
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Data Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent flex flex-col justify-end p-4 pointer-events-none">
        <h3 className="font-bold text-slate-200">{item.title}</h3>
        <p className="text-emerald-500 text-sm">
          {new Date(item.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Hover Action State */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-slate-950/80 backdrop-blur-sm transition-all flex items-center justify-center gap-4">
        <button
          className="p-2 rounded-full border border-emerald-500/50 bg-slate-900/50 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors z-10"
          onPointerDown={(e) => e.stopPropagation()} // Prevent dragging when clicking buttons
          onClick={(e) => {
            e.stopPropagation();
            // Edit logic here
          }}
        >
          <Edit className="w-5 h-5" />
        </button>
        <button
          className="p-2 rounded-full border border-red-500/50 bg-slate-900/50 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-colors z-10"
          onPointerDown={(e) => e.stopPropagation()} // Prevent dragging when clicking buttons
          onClick={(e) => {
            e.stopPropagation();
            // Delete logic here
          }}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
