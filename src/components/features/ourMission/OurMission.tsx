import ScrollInto from "@/utils/ScrollInto";
import Image from "next/image";
import Apparition from "@/components/ui/apparition";

const OurMission = () => {
  return (
    <ScrollInto index={1}>
      <div className="w-screen py-16 px-6 md:p-16">
        <div className="mx-auto w-full max-w-7xl">
          <Apparition index={0}>
            <h3 className="text-3xl font-bebas text-green-700 tracking-widest">
              Notre mission
            </h3>
          </Apparition>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
            <Apparition index={0} className="flex justify-center items-center">
              <p className="font-rubik">
                Amet qui qui est magna aliqua dolor. Fugiat adipisicing pariatur
                enim ipsum magna. Nisi eu dolor laboris deserunt occaecat
                laborum occaecat. Adipisicing qui ex irure eu id magna magna
                duis reprehenderit occaecat quis. Cupidatat elit eu enim eu ad.
                Enim irure dolor dolore nostrud velit.
              </p>
            </Apparition>
            <Apparition index={1}>
              <Image
                src="/inondation.png"
                alt="Inondation"
                width={664}
                height={443}
                className="rounded-lg w-full object-cover"
              />
            </Apparition>
            <Apparition index={0}>
              <Image
                src="/penurie_eau.png"
                alt="Penurie d'eau"
                width={664}
                height={443}
                className="rounded-lg w-full object-cover"
              />
            </Apparition>
            <Apparition index={1} className="flex justify-center items-center">
              <p className="font-rubik">
                Amet qui qui est magna aliqua dolor. Fugiat adipisicing pariatur
                enim ipsum magna. Nisi eu dolor laboris deserunt occaecat
                laborum occaecat. Adipisicing qui ex irure eu id magna magna
                duis reprehenderit occaecat quis. Cupidatat elit eu enim eu ad.
                Enim irure dolor dolore nostrud velit.
              </p>
            </Apparition>
            <Apparition index={0} className="flex justify-center items-center">
              <p className="font-rubik">
                Amet qui qui est magna aliqua dolor. Fugiat adipisicing pariatur
                enim ipsum magna. Nisi eu dolor laboris deserunt occaecat
                laborum occaecat. Adipisicing qui ex irure eu id magna magna
                duis reprehenderit occaecat quis. Cupidatat elit eu enim eu ad.
                Enim irure dolor dolore nostrud velit.
              </p>
            </Apparition>
            <Apparition index={1}>
              <Image
                src="/maquette.png"
                alt="Maquette de notre solution"
                width={664}
                height={443}
                className="rounded-lg w-full object-cover"
              />
            </Apparition>
          </div>
        </div>
      </div>
    </ScrollInto>
  );
};

export default OurMission;
