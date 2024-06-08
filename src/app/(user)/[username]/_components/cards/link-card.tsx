"use client";
import { Button } from "@/components/ui/button";
import { Link2Icon } from "@radix-ui/react-icons";
import { Skeleton } from "@/components/ui/skeleton";
import { Item } from "@/types";
import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Input } from "@/components/ui/input";
import { DeleteCardButton } from "@/components/delete-card";

export const LinkCard = ({ item }: { item: Item }) => {
  const id = item.id;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={`group relative h-full cursor-grab touch-none rounded-3xl border bg-background p-6 transition-shadow duration-200 ease-in-out hover:drop-shadow-lg xl:max-w-[390px] ${item.thumbnail && "xl:col-span-2"}`}
    >
      <div className="flex flex-col xl:flex-row">
        <div className="w-full text-wrap">
          <Button
            variant={"outline"}
            size={"icon"}
            className="relative h-11 w-11 rounded-xl"
          >
            {item.icon ? (
              <Image
                fill
                src={`${item.icon}`}
                alt={`${item.title}-icon`}
                className="object-cover"
              />
            ) : (
              <Link2Icon className="h-5 w-5" />
            )}
          </Button>
          <article className="mt-2">
            <h1 className="text-sm font-medium">{item.title}</h1>
            <p className="text-xs text-muted-foreground">{item.url}</p>
          </article>
        </div>

        {item.thumbnail && (
          <div className="relative hidden h-32 w-96 overflow-hidden rounded-xl xl:block">
            <Image
              fill
              src={`${item.thumbnail}`}
              alt={`${item.title}`}
              className="object-cover"
            />
          </div>
        )}
        <DeleteCardButton />
      </div>
    </div>
  );
};
