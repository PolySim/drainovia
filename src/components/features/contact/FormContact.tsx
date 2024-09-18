"use client";

import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/form/formInput";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sendEmail } from "@/utils/sendEmail.action";
import { useToast } from "@/hooks/use-toast";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is too short" })
    .max(255, { message: "Name is too long" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().min(10, { message: "Message is too short" }),
});

const FormContact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    values: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await sendEmail({ formData: data })
      .then((result) => {
        if (result) {
          toast({
            title: "Email envoyé",
          });
          form.reset();
        } else {
          toast({
            title: "Email non envoyé",
            variant: "destructive",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Email non envoyé",
          variant: "destructive",
        });
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="row-start-2 lg:row-start-1 w-full grid grid-cols-2 gap-4 max-lg:mb-24"
      >
        <FormInput
          control={form.control}
          label="Nom"
          name="name"
          placeholder="Entrer votre nom"
          type="text"
          disabled={form.formState.isSubmitting}
        />
        <FormInput
          control={form.control}
          label="Email"
          name="email"
          placeholder="Entrer votre email"
          type="email"
          disabled={form.formState.isSubmitting}
        />
        <div className="col-span-2">
          <FormInput
            control={form.control}
            label="Message"
            name="message"
            placeholder="Entrer votre message"
            type="text-area"
            disabled={form.formState.isSubmitting}
          />
        </div>
        <Button
          className="col-span-2 py-2 group h-fit"
          variant="secondary"
          size="lg"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          <p className={cn("font-bebas tracking-8 text-3xl")}>
            Envoyer le mail
          </p>
        </Button>
      </form>
    </Form>
  );
};

export default FormContact;
