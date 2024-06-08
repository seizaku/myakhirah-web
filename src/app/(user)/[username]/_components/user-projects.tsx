"use client";

import {
  DndContext,
  DragEndEvent,
  UniqueIdentifier,
  closestCorners,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import { Item } from "@/types";
import { useSensors, useSensor, PointerSensor } from "@dnd-kit/core";
import { useUserProfile } from "@/stores/projects-store";
import { ItemCard } from "./base-card";
import { useScreenView } from "@/stores/responsive-store";

export const UserProjects = () => {
  const { projects, setProjects } = useUserProfile();

  const getTaskPos = (id?: UniqueIdentifier) =>
    projects.findIndex((item) => item.id === id);

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over }: DragEndEvent = event;

    if (active.id === over?.id) return;

    const originalPos = getTaskPos(active.id);
    const newPos = getTaskPos(over?.id);

    const updateChanges = arrayMove(projects, originalPos, newPos);

    setProjects(updateChanges);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );
  const { isMobileView } = useScreenView();

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <div className="mx-auto min-h-screen w-full max-w-sm px-0 xl:max-w-[820px] xl:pt-4">
        <h1 className="px-6 py-2 text-lg font-bold">Framer Assets & Remixes</h1>
        <div className="mt-4 grid auto-rows-fr grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-8">
          <SortableContext items={projects} strategy={rectSwappingStrategy}>
            {projects?.map((data: Item, index) => {
              return (
                <ItemCard
                  key={index}
                  item={data}
                  className={`${isMobileView && "col-span-2"}`}
                />
              );
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
