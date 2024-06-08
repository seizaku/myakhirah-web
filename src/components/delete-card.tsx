"use client";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { useUserProfile } from "@/stores/projects-store";
import { Item } from "@/types";

export const DeleteCardButton = ({ item }: { item: Item }) => {
  const { deleteItem } = useUserProfile();
  return (
    <Button
      onClick={() => deleteItem(item)}
      className="absolute -left-3 -top-3 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
      variant={"outline"}
      size={"icon"}
    >
      <TrashIcon className="h-4 w-4" />
    </Button>
  );
};
