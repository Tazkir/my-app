import React from 'react';

function Skill() {
  return (
    <div className="grid grid-rows-2 grid-flow-row md:grid-cols-2 min-sm:grid-flow-col gap-10 pt-10 pb-10">
      <div className="row-span-1 md:col-span-1 grid grid- border rounded-lg h-[30em] sm:h-[10em]">
        <h1>1</h1>
      </div>
      <div className="row-span-1 md:col-span-1 grid grid- border rounded-lg h-[30em] sm:h-[10em]">
        <h1>2</h1>
      </div>
    </div>
  );
}

export default Skill;
