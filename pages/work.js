import Layout from "../components/Layout";
import Maincase from "../components/work/Maincase";
import ShowcaseList from "../components/work/ShowcaseList";
import Sidecase from "../components/work/Sidecase";
import data from "../utils/data";

function work() {
  return (
    <Layout title="Work">
      <div className="w-full flex flex-col py-10">
        <div className="flex flex-col justify-center items-center pt-10 border-b border-white/20">
          <h1 className="text-white text-xl font-bold">Career Project</h1>
          <p className="text-center">Explore my professional project</p>
          <div className="py-10 flex flex-col gap-10">
            <Maincase data={data} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-10 border-b border-white/20">
          <h1 className="text-white text-xl font-bold">Side Project</h1>
          <p className="text-center">Check out my side project</p>
          <div className="py-10 flex flex-col gap-10">
            <Sidecase data={data} />
          </div>
        </div>

        <div className="flex flex-col place-items-center space-y-5 pt-10 w-full pb-2">
          <h1 className="text-white text-xl font-bold">Case Studies</h1>
          <p className="text-center">
            Check out my showcase project - it's a web app that displays my
            skills in web development, UI/UX, backend, and tech. It's visually
            appealing, has an efficient backend, and uses various
            libraries/frameworks.
          </p>
        </div>

        <div className="h-auto pb-10">
          <ShowcaseList data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default work;
