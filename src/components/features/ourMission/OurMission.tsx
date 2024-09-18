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
                Depuis plusieurs années, nous avons été confrontés à des
                inondations, que ça soit dans la région Haut de France ou
                ailleurs en France. Cela a conduit à des problèmes de sécurité,
                financiers et environnementales.
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
                A contrario, le monde actuel est victime de crise d&apos;eau et
                cela continue à augmenter. D&apos;ici une vingtaine
                d&apos;années, les tensions peuvent conduire jusqu&apos;à une
                guerre pour cette précieuse ressource.
              </p>
            </Apparition>
            <Apparition index={0} className="flex justify-center items-center">
              <p className="font-rubik">
                C&apos;est pourquoi nous avons décidé de créer un service pour
                aider à régler ces deux problématiques. Notre solution est basée
                sur les routes perméables, le traitement de l&apos;eau de pluie
                et l&apos;utilisation pour les activités humaines nécessitant
                pas d&apos;eau potable tel que les toilettes ou les jardins.
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
