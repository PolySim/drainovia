import Home from "@/components/features/home/Home";
import OurMission from "@/components/features/ourMission/OurMission";
import AboutUs from "@/components/features/aboutUs/AboutUs";
import Price from "@/components/features/price/Price";
import Contact from "@/components/features/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <main>
      <Home />
      <OurMission />
      <AboutUs />
      <Price />
      <Contact />
      <Footer />
    </main>
  );
}
