import Layout from "../components/Layout";
import ShowcaseList from "../components/work/ShowcaseList";
import Sidecase from "../components/work/Sidecase";
import data from "../utils/data";

function work() {
  return (
    <Layout title="Work">
      <div className="flex flex-col justify-center items-center space-y-5 w-full py-14">
        <h1 className="text-white text-xl font-bold">Side Project</h1>
        <p className="text-center">Check out my side project</p>
        <div className="">
          <Sidecase data={data} />
        </div>
      </div>
      <div className="flex flex-col place-items-center space-y-5 pt-10 w-full pb-2">
        <h1 className="text-white text-xl font-bold">Case Studies</h1>
        <p className="text-center">
          Check out my showcase project - it's a web app that displays my skills
          in web development, UI/UX, backend, and tech. It's visually appealing,
          has an efficient backend, and uses various libraries/frameworks.
        </p>
      </div>

      <div className="h-auto pb-10">
        <ShowcaseList data={data} />
      </div>
    </Layout>
  );
}

export default work;
