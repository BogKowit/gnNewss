import React, { useState, useEffect } from "react";
import iso from "iso-3166-1";
import { fetchDataNewsByCountry } from "../../utils/fetchDataNewsByCountry";
const Countries = () => {
  const [countries, setCountries] = useState<string[]>();

  function divideStringIntoPairs(str: string) {
    const pairs = [];
    for (let i = 0; i < str.length; i += 2) {
      pairs.push(str.slice(i, i + 2));
    }
    const countriesFunc: any = [];
    pairs.map((value) => {
      countriesFunc.push(iso.whereAlpha2(`${value}`));
    });
    setCountries(countriesFunc);
  }

  const countriesListFromApi =
    "aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza";

  useEffect(() => {
    divideStringIntoPairs(countriesListFromApi);
  }, []);

  const fun = (e:string) => {
    console.log(e)
    fetchDataNewsByCountry(e);
  };

  console.log(countries);
  return (
    <div>
      {countries &&
        countries.map((value: any, index: number) => (
          <div key={index} onClick={() => {fun(value.alpha2)}}>
            <h2>{value.country}</h2>
            <img
              className="w-20 h-20"
              src={`https://newsapi.org/images/flags/${value.alpha2}.svg`}
            ></img>
          </div>
        ))}
    </div>
  );
};

export default Countries;
