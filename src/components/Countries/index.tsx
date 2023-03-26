import { useState } from "react";
import { Link } from "react-router-dom";
import { titleCutWords } from "../../functions";
import { fetchDataNewsByCountry } from "../../utils/fetchDataNewsByCountry";

const Countries = ({ countries }: any) => {
  const [newDataByCountry, setNewDataByCountry] = useState(null);

  const fun = async (e: string) => {
    const data = await fetchDataNewsByCountry(e);
    const dataArticles = data.articles;
    setNewDataByCountry(dataArticles);
  };

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      {countries &&
        countries.map((value: any, index: number) => {
          return (
            <Link to={`/country/${value.country}`} state={value.alpha2}>
              <div
                key={index}
                onClick={() => {
                  fun(value.alpha2);
                }}
                className=" cursor-pointer
              bg-gray-200 h-full w-24 rounded-xl flex items-center justify-center flex-col"
              >
                {/* // */}
                <p className="h-16 font-semibold text-md flex items-center justify-center text-center">
                  {titleCutWords(value.country, 3)}
                </p>
                <img
                  alt="country_flag"
                  className="w-auto h-auto p-2 rounded-2xl"
                  src={`https://newsapi.org/images/flags/${value.alpha2}.svg`}
                />
                {/* // */}
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Countries;
