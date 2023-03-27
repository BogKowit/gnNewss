import { FC } from "react";

interface Props {
  index: number;
  country: string;
  title: string;
}

const cardCountry: FC<Props> = ({ index, country, title }) => (
  <div
    key={index}
    className=" cursor-pointer grid grid-cols-3 mx-1
      bg-gray-200 h-full w-auto  rounded-xl items-center justify-start border border-gray-300 shadow-md
      focus:bg-gray-300 hover:bg-gray-300"
  >
    <img
      alt="country_flag"
      className="w-auto h-auto p-2 rounded-2xl col-span-1"
      src={`https://newsapi.org/images/flags/${country}.svg`}
    />

    <p className="w-auto font-semibold text-xs md:text-lg lg:text-2xl xl:text-3lx flex items-center col-span-2 ">
      {title}
    </p>
  </div>
);

export default cardCountry;
