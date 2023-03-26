import { useState, useEffect } from "react";
import Countries from "../components/Countries";
import { divideStringIntoPairs } from "../functions";

const InfoByCountries = () => {
  const [countries, setCountries] = useState<string[]>();

  const countriesListFromApi =
    "aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza";

  useEffect(() => {
    const countriesToDivide = divideStringIntoPairs(countriesListFromApi);
    setCountries(countriesToDivide);
  }, []);

  return (
    <div>
      <Countries countries={countries} />
    </div>
  );
};

export default InfoByCountries;
