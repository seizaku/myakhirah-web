"use client";
import { Button } from "./ui/button";
import {
  ImageIcon,
  LetterCaseCapitalizeIcon,
  Link2Icon,
  VideoIcon,
  MobileIcon,
  DesktopIcon,
} from "@radix-ui/react-icons";
import { Toggle } from "./ui/toggle";
import { useScreenView } from "@/stores/responsive-store";
import { useUserProfile } from "@/stores/projects-store";
import { uuid } from "uuidv4";

export type ItemVariants = "Link" | "Photo" | "Map" | "Note" | "Chart";

export const BottomControl = () => {
  const { isMobileView, toggleMobile, toggleDesktop } = useScreenView();
  const { projects, addItem } = useUserProfile();

  function createCard(type: ItemVariants) {
    addItem({
      id: uuid(),
      order: projects.length + 1,
      title: "Lorem Ipsum",
      url: "forbidden.link",
      size: "1x1",
      type,
    });
  }

  return (
    <div className="fixed inset-x-0 bottom-12 mx-auto flex h-14 w-fit items-center gap-4 rounded-3xl border bg-background/80 px-2 backdrop-blur xl:w-full xl:max-w-md">
      <Button className="rounded-3xl text-xs shadow-md" size={"lg"}>
        Share
      </Button>
      <div className="h-6 w-0.5 bg-accent"></div>
      <ul className="flex gap-2">
        <li>
          <Button
            onClick={() => createCard("Link")}
            variant={"outline"}
            className="rounded-xl shadow-md"
            size={"icon"}
          >
            <Link2Icon />
          </Button>
        </li>
        <li>
          <Button
            onClick={() => createCard("Photo")}
            variant={"outline"}
            className="rounded-xl shadow-md"
            size={"icon"}
          >
            <ImageIcon />
          </Button>
        </li>
        <li>
          <Button
            onClick={() => createCard("Note")}
            variant={"outline"}
            className="rounded-xl shadow-md"
            size={"icon"}
          >
            <LetterCaseCapitalizeIcon />
          </Button>
        </li>
        <li>
          <Button
            onClick={() => createCard("Map")}
            variant={"outline"}
            className="rounded-xl shadow-md"
            size={"icon"}
          >
            <VideoIcon />
          </Button>
        </li>
      </ul>
      <div className="hidden h-6 w-0.5 bg-accent xl:block"></div>
      <div className="hidden items-center gap-2 xl:flex">
        <Toggle
          onClick={() => toggleMobile()}
          variant="outline"
          aria-label="Toggle mobile"
          className={`shadow-md transition-all`}
          disabled={isMobileView}
        >
          <MobileIcon className="h-4 w-4" />
        </Toggle>
        <Toggle
          onClick={() => toggleDesktop()}
          variant="outline"
          aria-label="Toggle desktop"
          className={`shadow-md transition-all`}
          disabled={!isMobileView}
        >
          <DesktopIcon className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  );
};
