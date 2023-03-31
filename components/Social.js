import Link from 'next/link';
import Image from 'next/image';
import github from '../public/github.png';
import email from '../public/email.png';
import linkedin from '../public/linkedin.png';
import whatsapp from '../public/whatsapp.png';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

function Social() {
  return (
    <div className=" flex flex-row gap-5">
      <Link
        target="_blank"
        href="https://github.com/Tazkir"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        <Image src={github} height={20} width={20} />{' '}
        <ArrowUpRightIcon className="h-3 w-3" />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/tazkir-furqan-15aa08269/"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        <Image src={linkedin} height={20} width={20} />{' '}
        <ArrowUpRightIcon className="h-3 w-3" />
      </Link>
      <Link
        target="_blank"
        href="https://wa.link/td0x8t"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        <Image src={whatsapp} height={20} width={20} />{' '}
        <ArrowUpRightIcon className="h-3 w-3" />
      </Link>
      <Link
        target="_blank"
        href="mailto: tazkirfurqan@gmail.com"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        <Image src={email} height={20} width={20} />{' '}
        <ArrowUpRightIcon className="h-3 w-3" />
      </Link>
    </div>
  );
}

export default Social;
