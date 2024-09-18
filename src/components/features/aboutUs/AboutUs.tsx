import ScrollInto from "@/utils/ScrollInto";
import Apparition from "@/components/ui/apparition";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import WindowSizeContainer from "@/utils/WindowSizeContainer";

const AboutUs = () => {
  return (
    <div className="mt-24">
      <ScrollInto index={2}>
        <div className="w-screen py-16 px-6 md:p-16">
          <div className="mx-auto w-full max-w-7xl">
            <Apparition index={0}>
              <h3 className="text-3xl font-bebas text-green-700 tracking-widest">
                Qui sommes-nous ?
              </h3>
            </Apparition>
            <Apparition index={0} className="mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <p className="font-rubik my-auto">
                  Fondé en 2024, 8 étudiants de
                  <span className="text-green-700"> Polytech Lille</span> ont
                  décidé de développer une solution de récupération de
                  l&apos;eau de pluie en utilisant des technologies innovantes.
                </p>
                <Carousel className="w-full">
                  <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <CarouselItem key={index} className="h-fit my-auto">
                        <Image
                          src={`/carousel/${index}.png`}
                          alt="carousel item"
                          width={400}
                          height={400}
                          className="rounded-lg w-full object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <WindowSizeContainer minWidth={768}>
                    <CarouselPrevious />
                    <CarouselNext />
                  </WindowSizeContainer>
                </Carousel>
              </div>
            </Apparition>
          </div>
        </div>
      </ScrollInto>
    </div>
  );
};

export default AboutUs;
