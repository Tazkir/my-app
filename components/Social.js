import Link from "next/link";
import Image from "next/image";
import github from "../public/github.png";
import email from "../public/email.png";
import linkedin from "../public/linkedin.png";
import whatsapp from "../public/whatsapp.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function Social() {
  return (
    <div className="flex flex-row gap-5">
      <Link
        target="_blank"
        aria-label="GitHub Profile"
        title="GitHub Profile"
        href="https://github.com/Tazkir"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        <Image src={github} alt="github" height={18} width={18} />
        <span className="sr-only">GitHub</span>
        <ArrowUpRightIcon className="h-2.5 w-2.5" />
      </Link>
      <Link
        target="_blank"
        aria-label="LinkedIn Profile"
        title="LinkedIn Profile"
        href="https://www.linkedin.com/in/tazkir-furqan-8915332a0"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        <Image src={linkedin} alt="linkedin" height={18} width={18} />{" "}
        <span className="sr-only">LinkedIn</span>
        <ArrowUpRightIcon className="h-2.5 w-2.5" />
      </Link>
      <Link
        target="_blank"
        aria-label="WhatsApp Contact"
        title="WhatsApp Contact"
        href="https://wa.link/td0x8t"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        <Image src={whatsapp} alt="whatsapp" height={18} width={18} />{" "}
        <span className="sr-only">WhatsApp</span>
        <ArrowUpRightIcon className="h-2.5 w-2.5" />
      </Link>
      <Link
        target="_blank"
        aria-label="Email Tazkir Furqan"
        title="Email Tazkir Furqan"
        href="mailto: tazkirfurqan@gmail.com"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        <Image src={email} alt="email" height={18} width={18} />{" "}
        <span className="sr-only">Email</span>
        <ArrowUpRightIcon className="h-2.5 w-2.5" />
      </Link>
    </div>
  );
}

export default Social;
