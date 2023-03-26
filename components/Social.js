import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

function Social() {
  return (
    <div className=" flex flex-row gap-5">
      <Link
        target="_blank"
        href="https://github.com/Tazkir"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        Github <ArrowUpRightIcon className="h-3 w-3" />
      </Link>
      <Link
        target="_blank"
        href="https://twitter.com/tyazzkir"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        Twitter <ArrowUpRightIcon className="h-3 w-3" />
      </Link>
      <Link
        target="_blank"
        href="https://wa.link/td0x8t"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        Whatsapp <ArrowUpRightIcon className="h-3 w-3" />
      </Link>
      <Link
        target="_blank"
        href="mailto: tazkirfurqan@gmail.com"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        Email <ArrowUpRightIcon className="h-3 w-3" />
      </Link>
    </div>
  );
}

export default Social;
