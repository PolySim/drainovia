"use client";

import { useSectionViewStore } from "@/store/sectionViewStore";
import { cn } from "@/lib/utils";
import OpenMenu from "@/components/header/headerMobile/OpenMenu";
import { NAVIGATION_MENU } from "@/const";
import HeaderMobileItem from "@/components/header/headerMobile/HeaderMobileItem";

const HeaderMobile = () => {
  const menuIsOpen = useSectionViewStore((state) => state.menuIsOpen);

  return (
    <>
      <div
        className={cn(
          "flex flex-col gap-2 justify-center items-center fixed w-screen h-screen bg-white transition z-50",
          {
            "translate-x-0": menuIsOpen,
            "-translate-x-full": !menuIsOpen,
          },
        )}
      >
        {NAVIGATION_MENU.map((ITEM, index) => (
          <HeaderMobileItem index={index} title={ITEM} key={ITEM} />
        ))}
      </div>
      <OpenMenu />
    </>
  );
};

export default HeaderMobile;
