"use client";

import { useSectionViewStore } from "@/store/sectionViewStore";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const OpenMenu = () => {
  const menuIsOpen = useSectionViewStore((state) => state.menuIsOpen);
  const toggleMenuIsOpen = useSectionViewStore(
    (state) => state.toggleMenuIsOpen,
  );

  return (
    <Button
      variant="ghost"
      onClick={toggleMenuIsOpen}
      className={cn(
        "absolute right-4 top-0 z-50 text-white mt-2.5 h-10 rounded-lg",
        {
          "menu-open": menuIsOpen,
          "menu-close": !menuIsOpen,
        },
      )}
    >
      <span />
      <span />
      <span />
    </Button>
  );
};

export default OpenMenu;
