import React from 'react';
import { skills } from '../../utils/data';

function Skill() {
  const listItems = skills.map((skill) => <p>{skill}</p>);

  return (
    <div class="rightCSS li rounded-full max-sm:mt-[130px] mt-[150px] max-sm:mb-[3em]">
      <div>{listItems}</div>
    </div>
  );
}

export default Skill;
