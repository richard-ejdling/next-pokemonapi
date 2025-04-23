export default function LoaderPokemonInfo() {
  const containerStyle = `bg-gray-600 rounded-lg h-60`;
  const contentStyle = `bg-gray-400 animate-pulse rounded-md`;
  return (
    <>
      <div className="flex justify-between max-sm:text-xs">
        <div className="flex items-center w-1/3 gap-2">
          {"<"}
          <div className={`${contentStyle} bg-gray-600 h-10 sm:h-6 w-full`}></div>
        </div>

        <div className="flex items-center w-1/3 justify-end gap-2">
          <div className={`${contentStyle} bg-gray-600 h-10 sm:h-6 w-full`}></div>
          {">"}
        </div>
      </div>
      <div
        aria-label="loading placeholder"
        className="flex flex-col gap-4 bg-gray-800 rounded-lg p-4"
      >
        <div className={`${contentStyle} bg-gray-600 w-1/3 h-6`}></div>
        <div className="grid gap-4 grid-cols-6 max-[400px]:grid-rows-5 max-[770px]:grid-rows-4 grid-rows-3 lg:grid-cols-4 lg:grid-rows-2">
          <div
            className={`${containerStyle} col-start-1 row-start-1 max-lg:col-span-3 flex flex-col items-center`}
          >
            <div className={`${contentStyle} w-2/3 h-6 m-2`}></div>
            <div
              className={`${contentStyle} bg-transparent flex flex-col justify-center max-w-[208px] mx-2 grow`}
            >
              <img
                className=" object-contain rounded-lg overflow-hidden"
                src={"/img/img-placeholder.png"}
                alt=""
              />
            </div>
          </div>
          <div
            className={`${containerStyle} col-start-1 row-start-1 lg:row-start-2 max-lg:col-span-3 flex flex-col items-center justify-around`}
          >
            <div className={`${contentStyle} w-2/3 h-6 m-2`}></div>
            <div
              className={`${contentStyle} bg-transparent flex flex-col justify-center max-w-[208px] mx-2 grow`}
            >
              <img
                className=" object-contain rounded-lg overflow-hidden"
                src={"/img/img-placeholder.png"}
                alt=""
              />
            </div>
          </div>
          <div
            className={`${containerStyle} max-[400px]:col-span-6 max-[770px]:col-span-3 max-lg:col-start-1 max-lg:row-start-2 max-lg:col-span-2 flex flex-col justify-between`}
          >
            <div className={`${contentStyle} w-2/3 h-6 m-2 mx-auto`}></div>
            <div className="grow flex flex-col justify-center">
              <div className={`${contentStyle} w-2/3 h-6 m-2 mx-auto`}></div>
              <div className={`${contentStyle} w-2/3 h-6 m-2 mx-auto`}></div>
            </div>
          </div>
          <div
            className={`${containerStyle} max-[400px]:col-span-6 max-[400px]:row-start-3 max-[770px]:col-start-4 max-[770px]:col-span-3 max-lg:col-start-3 max-lg:row-start-2 max-lg:col-span-2 flex flex-col items-center px-2`}
          >
            <div className={`${contentStyle} w-2/3 h-6 m-2`}></div>
            <div className="grow flex flex-col justify-center w-full">
              <div className={`${contentStyle} w-2/3 h-6 m-2 mx-auto`}></div>
              <div className={`${contentStyle} w-2/3 h-6 m-2 mx-auto`}></div>
            </div>
          </div>
          <div
            className={`${containerStyle} max-[400px]:row-start-4 max-[770px]:row-start-3 max-[770px] max-[770px]:col-span-6 max-lg:col-start-5 max-lg:row-start-2 max-lg:col-span-2 flex flex-col items-center justify-around`}
          >
            <div className={`${contentStyle} w-2/3 h-6 m-2`}></div>
            <div
              className={`${contentStyle} bg-transparent flex flex-col justify-center max-w-[208px] mx-2 grow`}
            >
              <img
                className=" object-contain rounded-lg overflow-hidden"
                src={"/img/img-placeholder.png"}
                alt=""
              />
            </div>
          </div>
          <div
            className={`${containerStyle} max-[400px]:row-start-5 max-[770px]:row-start-4 col-span-6 lg:col-start-2 lg:col-span-3 lg:row-start-2 flex flex-col justify-evenly `}
          >
            <div className={`${contentStyle} h-6 mx-2`}></div>
            <div className={`${contentStyle} h-6 mx-2`}></div>
            <div className={`${contentStyle} h-6 mx-2`}></div>
            <div className={`${contentStyle} h-6 mx-2`}></div>
            <div className={`${contentStyle} h-6 mx-2`}></div>
            <div className={`${contentStyle} h-6 mx-2`}></div>
            <div className={`${contentStyle} h-6 mx-2`}></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-sm:text-xs">
        <div className="flex items-center w-1/3 gap-2">
          {"<"}
          <div className={`${contentStyle} bg-gray-600 h-10 sm:h-6 w-full`}></div>
        </div>

        <div className="flex items-center w-1/3 justify-end gap-2">
          <div className={`${contentStyle} bg-gray-600 h-10 sm:h-6 w-full`}></div>
          {">"}
        </div>
      </div>
    </>
  );
}
