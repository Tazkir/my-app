import React from 'react';
import Layout from '../components/Layout';
import ShowcaseList from '../components/work/ShowcaseList';
import data from '../utils/data';

function work() {
  return (
    <Layout title="Work">
      <div className="flex flex-col place-items-center space-y-5 pt-10 w-full pb-2">
        <h1 className="text-white text-xl font-bold">My Studycase</h1>
        <p className="text-center">
          My showcase project is a web application that demonstrates my skills
          in web development, UI/UX, backend, and technical knowledge. It has a
          visually appealing interface, efficient backend, and showcases my
          proficiency in various library and frameworks.
        </p>
      </div>
      <div className="h-auto pb-10">
        <ShowcaseList data={data} />
      </div>
    </Layout>
  );
}

export default work;
