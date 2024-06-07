"use client";

import { ReactNode, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  UniqueIdentifier,
  closestCorners,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSwappingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Items } from "@/types";
import { useSensors, useSensor, PointerSensor } from "@dnd-kit/core";
import { LinkCard } from "./cards/link-card";
import { PhotoCard } from "./cards/photo-card";

export const UserProjects = () => {
  const [items, setItems] = useState<Items[]>([
    {
      id: 1,
      title: "SegmentUI: Framer Component Library",
      url: "segentui.com",
      icon: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cHM6Ly9jZG4ucHJvZC53ZWJzaXRlLWZpbGVzLmNvbS81YmVhYjEyMzlhYzg4NDg3YzNhNjYwOGYvNjUyM2E2MTIxZjU4NzBlMTQ0NjU1YTM5X1dlYmNsaXAucG5n.png",
      thumbnail:
        "https://creatorspace.imgix.net/sites/ogimages/aHR0cHM6Ly9jZG4ucHJvZC53ZWJzaXRlLWZpbGVzLmNvbS81YmVhYjEyMzlhYzg4NDg3YzNhNjYwOGYvNjRiY2YzMTllM2RmMmRlZDVkMmJiMjAzX09wZW5HcmFwaC5qcGc=.jpeg?width=600&height=600",
      type: "Link",
    },
    {
      id: 2,
      title: "Resources",
      url: "framer.community",
      icon: "https://storage.googleapis.com/creatorspace-public/sites%2Ftouchicons%2FaHR0cHM6Ly9hc3NldHMuY2lyY2xlLnNvL3NpbXRsb3A2bmNwaWV3M3gybW9mYjVsaXJxbXI%2FPS00MDE2MDgxNTk4NjI4NzAyMzI0.jpeg",
      thumbnail:
        "https://creatorspace.imgix.net/sites/ogimages/aHR0cHM6Ly9hc3NldHMuY2lyY2xlLnNvL3BoenlzeDJ6NnIzdDI2d2N3MXVlaXVlYmxuYnA=.jpeg?width=600&height=600",
      type: "Link",
    },
    {
      id: 3,
      title: "403 Forbidden",
      url: "forbidden.com",
      type: "Link",
    },
    {
      id: 4,
      title: "403 Forbidden",
      url: "forbidden.com",
      type: "Photo",
      thumbnail: "/hero.jpg",
    },
  ]);

  const getTaskPos = (id?: UniqueIdentifier) =>
    items.findIndex((item) => item.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over }: DragEndEvent = event;

    if (active.id === over?.id) return;

    setItems((items) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over?.id);

      return arrayMove(items, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <div className="mx-auto h-full w-full max-w-sm px-0 xl:max-w-[820px] xl:pt-4">
        <h1 className="px-6 py-2 text-lg font-bold">Framer Assets & Remixes</h1>
        <div className="mt-4 grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-8">
          <SortableContext items={items} strategy={rectSwappingStrategy}>
            {items?.map((data: Items, index) => {
              switch (data.type) {
                case "Link":
                  return <LinkCard key={index} item={data} />;
                case "Photo":
                  return <PhotoCard key={index + "-img"} item={data} />;
                case "Video":
                  break;
                case "Note":
                  break;
              }
            })}

            <DragOverlay>
              <div className="h-44 w-full rounded-3xl bg-muted/50"></div>
            </DragOverlay>
          </SortableContext>
        </div>
      </div>
    </DndContext>
  );
};
