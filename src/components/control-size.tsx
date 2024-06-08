import { Button } from "./ui/button";
import { Item } from "@/types";

import {
  BoxIcon,
  ContainerIcon,
  SectionIcon,
  AspectRatioIcon,
} from "@radix-ui/react-icons";

import { useUserProfile } from "@/stores/projects-store";
import { SizeVariants } from "@/app/(user)/[username]/_components/base-card";

export const ControlSize = ({ item }: { item: Item }) => {
  const { modifyItem } = useUserProfile();

  function modifyCardSize(size: SizeVariants) {
    modifyItem({
      ...item,
      id: item.id,
      size,
    });
  }

  return (
    <div className="absolute inset-x-0 -bottom-4 mx-auto hidden h-11 w-44 grid-cols-4 rounded-3xl border bg-background opacity-0 drop-shadow-sm backdrop-blur transition-opacity group-hover:opacity-100 xl:grid">
      <Button
        onClick={() => modifyCardSize("1x1")}
        variant={"ghost"}
        className="h-full w-full rounded-full rounded-r-none p-0"
      >
        <BoxIcon className="h-3 w-3" />
      </Button>
      <Button
        onClick={() => modifyCardSize("2x1")}
        variant={"ghost"}
        className="h-full w-full rounded-full rounded-l-none rounded-r-none p-0"
      >
        <SectionIcon />
      </Button>
      <Button
        onClick={() => modifyCardSize("1x2")}
        variant={"ghost"}
        className="h-full w-full rounded-full rounded-l-none rounded-r-none p-0"
      >
        <ContainerIcon />
      </Button>
      <Button
        onClick={() => modifyCardSize("2x2")}
        variant={"ghost"}
        className="h-full w-full rounded-full rounded-l-none p-0"
      >
        <AspectRatioIcon />
      </Button>
    </div>
  );
};
