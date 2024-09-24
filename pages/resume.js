import React from "react";
// import Layout from "../components/Layout";
import Resume from "../public/resume/Resume - Muhammad Tazkir Furqan.pdf";

function resume() {
  return (
    // <Layout title="Resume">
    //   <div className="w-full flex justify-center items-center flex-1">
    <iframe
      src={Resume}
      // className="w-full h-[94dvh] overflow-hidden pt-16"
      className="w-screen h-screen"
    />
    //   </div>
    // </Layout>
  );
}

export default resume;
