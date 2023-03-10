import React from 'react';
import Image from 'next/image';

function Skill() {
  const skills = [
    'NextJs',
    'ReactJs',
    'React Native',
    'Vercel',
    'MongoDB',
    'Firebase',
    'Supabase',
    'Tailwind Css',
    'Material UI',
    'Framer Motion',
    'Stripe',
    'Sanity.io',
    'AWS S3',
    'Styled Component',
    'GraphQL',
    'Prisma',
    'PHP',
    'NextAuth',
    'JWT',
    'NodeJS',
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'Github',
    'Express',
    'Cors',
    'Redux Toolkit',
    'SWR',
    'React Query',
    'Framer',
    'ThreeJS',
    'React-Three-Drei',
    'Figma',
    'Photoshop',
  ];
  const listItems = skills.map((skill) => <p>{skill}</p>);

  return (
    <div class="rightCSS li rounded-full max-sm:mt-[130px] mt-[150px]">
      <div>{listItems}</div>
    </div>
  );
}

export default Skill;
