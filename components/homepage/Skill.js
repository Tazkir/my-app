import React from 'react';
import Image from 'next/image';

function Skill() {
  const numbers = [
    'NextJs',
    'ReactJs',
    'Vercel',
    'MongoDB',
    'Firebase',
    'Tailwind Css',
    'Material UI',
    'Framer Motion',
    'Sanity.io',
    'AWS S3',
    'Styled Component',
    'Prisma',
    'PHP',
    'NextAuth',
    'JWT',
    'NodeJS',
    'HTML',
    'CSS',
    'Javascript',
    'Express',
    'Cors',
    'Framer',
    'ThreeJS',
    'Three-Drei',
    'Figma',
    'Photoshop',
  ];
  const listItems = numbers.map((number) => <p>{number}</p>);
  return (
    <div class="rightCSS li rounded-full max-sm:mt-[130px] mt-[150px]">
      <div>{listItems}</div>
    </div>
  );
}

export default Skill;
