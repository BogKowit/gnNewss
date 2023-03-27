import { useState, useEffect } from "react";
import { divideStringIntoPairs } from "../../functions";
import Countries from "../Countries";

interface props {
  country: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
}

const Sidebar = () => {
  const [countries, setCountries] = useState<props[]>();

  // Leagues from api
  const countriesListFromApi =
    "aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza";

  useEffect(() => {
    const countriesToDivide = divideStringIntoPairs(countriesListFromApi);
    setCountries(countriesToDivide);
  }, []);

  return <>{countries ? <Countries countries={countries} /> : null}</>;
};

export default Sidebar;
