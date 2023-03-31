import { useState, useEffect } from "react";
import { divideStringIntoPairs } from "functions";
import { SidebarProps } from "types";
import { ActualCountry, Countries } from "components";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [countries, setCountries] = useState<SidebarProps[]>();

  // Leagues from api
  const countriesListFromApi =
    "aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza";

  useEffect(() => {
    const countriesToDivide = divideStringIntoPairs(countriesListFromApi);
    setCountries(countriesToDivide);
  }, []);

  const location = useLocation();

  return (
    <>
      {location && (
        <>
          <ActualCountry location={location} />
          <p className="mb-2ś">Wybierz inny kraj:</p>
        </>
      )}
      {countries && <Countries countries={countries} />}
    </>
  );
};

export default Sidebar;
