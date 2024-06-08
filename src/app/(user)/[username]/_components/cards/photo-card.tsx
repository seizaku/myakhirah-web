"use client";
import { Button } from "@/components/ui/button";
import { Link2Icon } from "@radix-ui/react-icons";
import { Skeleton } from "@/components/ui/skeleton";
import { Item } from "@/types";
import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Input } from "@/components/ui/input";
import { TrashIcon } from "@radix-ui/react-icons";

export const PhotoCard = ({ item }: { item: Item }) => {
  const id = item.id;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    // transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={`group relative min-h-44 cursor-grab touch-none rounded-3xl border bg-background transition-shadow duration-200 ease-in-out hover:drop-shadow-lg xl:col-span-2 xl:max-w-[390px]`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          fill
          src={`${item.thumbnail}`}
          alt={`${item.title}`}
          className="object-cover"
        />
      </div>
      <Button
        className="absolute -left-3 -top-3 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
        variant={"outline"}
        size={"icon"}
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};
