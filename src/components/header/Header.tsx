import WindowSizeContainer from "@/utils/WindowSizeContainer";
import HeaderMobile from "@/components/header/headerMobile/HeaderMobile";
import HeaderDesktop from "@/components/header/headerDesktop/HeaderDesktop";

const LIMIT_WIDTH = 1024;

const Header = () => {
  return (
    <>
      <WindowSizeContainer maxWidth={LIMIT_WIDTH}>
        <header className="flex justify-between fixed w-screen h-16 bg-green-700 z-20">
          <div className="font-bebas text-white text-2xl tracking-widest pl-4 py-4">
            Drainovia
          </div>
          <HeaderMobile />
        </header>
      </WindowSizeContainer>
      <WindowSizeContainer minWidth={LIMIT_WIDTH}>
        <HeaderDesktop />
      </WindowSizeContainer>
    </>
  );
};

export default Header;
