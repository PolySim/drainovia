"use client";

import { PropsWithChildren, useRef } from "react";
import { useVisible } from "@/utils/hook/useVisible";
import { cn } from "@/lib/utils";

const Apparition = ({
  children,
  index,
  className,
}: PropsWithChildren<{ index: number; className?: string }>) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useVisible(ref, "-200px", true);

  return (
    <div
      className={cn(
        "opacity-0",
        {
          "animate-apparition": isVisible,
          "lg:delay-150": index % 2 === 1,
        },
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Apparition;
