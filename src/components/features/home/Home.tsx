import ScrollInto from "@/utils/ScrollInto";
import ScrollDown from "@/components/features/home/ScrollDown";
import Image from "next/image";
import HyperText from "@/components/magicui/hyper-text";

const Home = () => {
  return (
    <ScrollInto index={0}>
      <div className="flex flex-col gap-8 justify-center items-center relative min-h-screen w-screen text-center font-bebas">
        <Image
          src="/home.png"
          width={1080}
          height={1080}
          alt=""
          className="absolute -z-30 size-full object-cover"
        />
        <div className="absolute -z-20 bg-black/30 size-full" />
        <div className="relative w-fit">
          <HyperText
            className="text-5xl md:text-7xl font-bebas text-green-700 tracking-12"
            text="Drainovia"
          />
          <span className="absolute top-0 left-0 size-full bg-green-200/30 -z-10 blur-[40px] border border-solid border-red-500" />
        </div>
        <p className="text-base md:text-lg font-rubik text-gray-200 px-8">
          Comme le dit Jean-claude Van Damme, l&apos;eau, dans 20 ans il
          n&apos;y en aura plus...
        </p>
        <ScrollDown />
      </div>
    </ScrollInto>
  );
};

export default Home;
