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
import { ControlSize } from "@/components/control-size";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useScreenView } from "@/stores/responsive-store";

export type SizeVariants = "1x1" | "1x2" | "2x1" | "2x2";

const itemCardVariants = cva(
  "group relative min-h-44 h-full cursor-grab touch-none rounded-3xl border bg-background transition-shadow duration-200 ease-in-out hover:drop-shadow-lg xl:max-w-[390px]",
  {
    variants: {
      variant: {
        Link: "p-6",
        Photo: "p-0",
        Map: "p-0 bg-primary",
        Note: "p-6",
        Chart: "p-6",
      },
      size: {
        "1x1": "",
        "1x2": "xl:row-span-2 flex flex-col justify-between gap-4",
        "2x1": "xl:col-span-2 flex flex-row gap-4 ",
        "2x2": "xl:col-span-2 xl:row-span-2 flex flex-col gap-4",
      },
    },
    defaultVariants: {
      size: "1x1",
    },
  },
);

export interface ItemCardProps {
  item: Item;
  className?: string | undefined;
}

export const ItemCard = ({ item, className }: ItemCardProps) => {
  const id = item.id;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={cn(
        itemCardVariants({ size: item.size, variant: item.type, className }),
      )}
    >
      <HandleVariants item={item} />
      <DeleteCardButton item={item} />
      <ControlSize item={item} />
    </div>
  );
};

const HandleVariants = ({ item }: { item: Item }) => {
  switch (item.type) {
    case "Link":
      return <LinkContent item={item} />;
    case "Photo":
      return <PhotoContent item={item} />;
    // case "Video":
    //   return <VideoContent item={item} />;
    // case "Note":
    //   break;
  }
};

const LinkContent = ({ item }: { item: Item }) => {
  const { isMobileView } = useScreenView();

  return (
    <>
      <div className="w-full text-wrap">
        <Button
          variant={"outline"}
          size={"icon"}
          className="h-11 w-11 rounded-xl p-2"
        >
          <div className="relative flex h-full w-full items-center justify-center">
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
          </div>
        </Button>
        <article className="mt-2">
          <h1 className="text-sm font-medium">{item.title}</h1>
          <p className="text-xs text-muted-foreground">{item.url}</p>
        </article>
      </div>
      {!isMobileView && item.thumbnail && item.size != "1x1" && (
        <div className="relative hidden h-full max-h-96 w-full max-w-full overflow-hidden rounded-xl xl:block">
          <Image
            fill
            src={`${item.thumbnail}`}
            alt={`${item.title}`}
            className="object-cover"
          />
        </div>
      )}
    </>
  );
};

const PhotoContent = ({ item }: { item: Item }) => (
  <>
    {item.thumbnail && (
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          fill
          src={`${item.thumbnail}`}
          alt={`${item.title}`}
          className="object-cover"
        />
      </div>
    )}
  </>
);

const VideoContent = ({ item }: { item: Item }) => (
  <video className="h-full w-full rounded-lg" controls>
    <source src={item.url} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);
