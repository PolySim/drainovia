import WindowSizeContainer from "@/utils/WindowSizeContainer";
import HeaderMobile from "./headerMobile/HeaderMobile";
import HeaderDesktop from "@/components/header/headerDesktop/HeaderDesktop";

const LIMIT_WIDTH = 1024;

const NavigationContainer = () => {
  return (
    <>
      <WindowSizeContainer maxWidth={LIMIT_WIDTH}>
        <HeaderMobile />
      </WindowSizeContainer>
      <WindowSizeContainer minWidth={LIMIT_WIDTH}>
        <HeaderDesktop />
      </WindowSizeContainer>
    </>
  );
};

export default NavigationContainer;
