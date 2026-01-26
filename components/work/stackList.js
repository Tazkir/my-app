import * as Tooltip from "@radix-ui/react-tooltip";
import { motion as m } from "framer-motion";
import Image from "next/image";

export default function StackList({ show }) {
  return (
    <>
      {show.stacks.map((stack) => (
        <m.div
          key={stack.id + 1}
          whileHover={{ scale: 1.2, y: -5 }}
          className=" flex items-center justify-center w-6 h-6 -mx-[6px] overflow-hidden rounded-full border-2 border-white bg-white hover:cursor-pointer"
        >
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Image
                  src={stack.url}
                  alt={stack.name}
                  height={20}
                  width={20}
                  loading="lazy"
                />
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="data-[state=delayed-open]:data-[side=bottom]:animate-slideDownAndFade text-violet11 select-none rounded-[4px] bg-black px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                  sideOffset={5}
                  side="bottom"
                >
                  {stack.name}
                  <Tooltip.Arrow className="fill-black" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </m.div>
      ))}
    </>
  );
}
