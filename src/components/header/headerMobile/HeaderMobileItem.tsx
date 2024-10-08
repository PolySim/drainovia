"use client";

import { useSectionViewStore } from "@/store/sectionViewStore";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeaderMobileItem = ({
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
  const toggleMenuIsOpen = useSectionViewStore(
    (state) => state.toggleMenuIsOpen,
  );

  const onCLick = () => {
    setSectionViewing(index, true);
    toggleMenuIsOpen();
  };

  return (
    <Button variant="ghost" onClick={onCLick} className="h-fit">
      <h4
        className={cn("text-4xl font-bebas tracking-widest uppercase", {
          "text-green-700": sectionViewing.index === index,
        })}
      >
        {title}
      </h4>
    </Button>
  );
};

export default HeaderMobileItem;
