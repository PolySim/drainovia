import { NAVIGATION_MENU } from "@/const";
import HeaderDesktopItem from "@/components/header/headerDesktop/HeaderDesktopItem";

const HeaderDesktop = () => {
  return (
    <header className="fixed left-1/2 top-6 -translate-x-1/2 flex gap-8 z-20 rounded-md bg-green-700/80 p-2 backdrop-saturate-[1.8] backdrop-blur-[20px]">
      {NAVIGATION_MENU.map((ITEM, index) => (
        <HeaderDesktopItem key={index} title={ITEM} index={index} />
      ))}
    </header>
  );
};

export default HeaderDesktop;
