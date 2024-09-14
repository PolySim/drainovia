"use client";

import { Button } from "@/components/ui/button";
import { useSectionViewStore } from "@/store/sectionViewStore";
import { cn } from "@/lib/utils";

const HeaderDesktopItem = ({
  title,
  index,
}: {
  title: string;
  index: number;
}) => {
  const sectionViewing = useSectionViewStore((state) => state.sectionViewing);
  const setSectionViewing = useSectionViewStore(
    (state) => state.setSectionViewing,
  );

  return (
    <Button variant="ghost" onClick={() => setSectionViewing(index, true)}>
      <h4
        className={cn("text-white text-lg font-rubik", {
          "text-black": sectionViewing.index === index,
        })}
      >
        {title}
      </h4>
    </Button>
  );
};

export default HeaderDesktopItem;
