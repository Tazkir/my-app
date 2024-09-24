import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion as m } from "framer-motion";

function Sidecase({ data }) {
  return (
    <>
      {data.sides.map((side) => (
        <m.div
          key={side.id}
          initial={{ y: "5%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: side.id * 0.1,
          }}
          className="flex flex-col gap-3 items-center justify-center"
        >
          <Link target="_blank" href={side.link}>
            <Image src={side.image} alt={side.name} width={500} height={500} />
          </Link>
          <div className="flex flex-col gap-2 place-items-center">
            <Link target="_blank" href={side.link}>
              <h1>{side.name}</h1>
            </Link>
            <h2 className="px-3 py-1 rounded-full bg-green-400/70 text-sm">
              {side.cat}
            </h2>
          </div>
          <p className="text-center">{side.desc}</p>
        </m.div>
      ))}
    </>
  );
}

export default Sidecase;
