import ScrollInto from "@/utils/ScrollInto";
import Apparition from "@/components/ui/apparition";
import Image from "next/image";

const Price = () => {
  return (
    <ScrollInto index={3}>
      <div className="w-screen py-16 px-6 md:p-16">
        <div className="mx-auto w-full max-w-7xl">
          <Apparition index={0}>
            <h3 className="text-3xl font-bebas text-green-700 tracking-widest">
              Notre offre
            </h3>
          </Apparition>
          <Apparition index={0} className="mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <Image
                  src="/devis.jpg"
                  alt="carousel item"
                  width={400}
                  height={400}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-8">
                <h6 className="text-xl font-bebas text-green-700 tracking-widest">
                  Construction des routes
                </h6>
                <p className="font-rubik">
                  Le prix de la construction des routes est évidemment dépendant
                  de la taille de votre projet. Nous vous proposons des offres
                  personnalisées en fonction de votre besoin.
                </p>
                <p className="font-rubik">
                  Nous vous présenterons le devis proposé par nos experts à la
                  ville de Tourcoing.
                </p>
                <h6 className="text-xl font-bebas text-green-700 tracking-widest">
                  Vente de l&apos;eau
                </h6>
                <p className="font-rubik">
                  Nous vendons l&apos;eau à un prix de 1 € 50 par m³ de volume.
                  Cela représente une réduction de 3 € par m³ de volume. Soit
                  120 € par personne et par an.
                </p>
                <p className="font-rubik">
                  Ce prix s&apos;explique par l&apos;amortissement des
                  canalisations.
                </p>
              </div>
            </div>
          </Apparition>
        </div>
      </div>
    </ScrollInto>
  );
};

export default Price;
