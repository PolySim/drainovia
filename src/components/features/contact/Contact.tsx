import ScrollInto from "@/utils/ScrollInto";
import FormContact from "@/components/features/contact/FormContact";
import WindowSizeContainer from "@/utils/WindowSizeContainer";

const Contact = () => {
  return (
    <ScrollInto index={4}>
      <div className="w-screen py-16 px-6 md:p-16">
        <div className="mx-auto w-full max-w-7xl">
          <h3 className="text-3xl font-bebas text-green-700 tracking-widest">
            Nous contacter
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 lg:mt-24">
            <FormContact />
            <WindowSizeContainer minWidth={1024}>
              <div className="row-start-1 w-full space-y-8 h-fit lg:mt-12">
                <p className="font-bebas tracking-wider text-7xl text-black uppercase">
                  Une question ?
                </p>
                <p className="relative font-bebas tracking-wider text-7xl text-linear uppercase w-fit">
                  Contactez-nous !
                </p>
              </div>
            </WindowSizeContainer>
          </div>
        </div>
      </div>
    </ScrollInto>
  );
};

export default Contact;
