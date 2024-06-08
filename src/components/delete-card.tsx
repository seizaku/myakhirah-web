import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

export const DeleteCardButton = () => {
  return (
    <Button
      className="absolute -left-3 -top-3 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
      variant={"outline"}
      size={"icon"}
    >
      <TrashIcon className="h-4 w-4" />
    </Button>
  );
};
