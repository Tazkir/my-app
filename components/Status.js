import data from "../utils/data";

function Status() {
  const status = data.status;

  const isAvailable = status.isOn === true;

  return (
    <>
      <div className="flex flex-row gap-5 items-center py-1">
        <span className="max-sm:text-[12px]">Tazkir Furqan © 2024</span>
        <div className="flex flex-row gap-1 justify-center items-center">
          <div
            className={`w-2 h-2 rounded-full ${
              isAvailable ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <h1 className="max-sm:text-[12px] text-xs font-semibold">
            {isAvailable ? "Available" : "Unavailable"}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Status;
