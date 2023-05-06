import data from '../utils/data';

function Status() {
  const status = data.status;
  return (
    <>
      {status.isOn === true ? (
        <div className="flex flex-row gap-5 ">
          <span>Copyright © 2023</span>
          <div className="flex flex-row gap-1 justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <h1 className="text-xs font-semibold">Available for employment</h1>
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-5">
          <span>Copyright © 2023</span>
          <div className="flex flex-row gap-1 justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <h1 className="text-xs font-semibold">
              Unavailable for employment
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Status;
