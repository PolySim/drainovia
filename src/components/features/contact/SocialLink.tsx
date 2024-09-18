import { PropsWithChildren } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SocialLink = ({
  children,
  link,
}: PropsWithChildren<{ link: string }>) => {
  return (
    <Button
      size="icon"
      variant="ghost"
      asChild
      className="p-2 w-fit rounded-lg text-green-700"
    >
      <Link href={link} className="size-full">
        {children}
      </Link>
    </Button>
  );
};

export default SocialLink;
