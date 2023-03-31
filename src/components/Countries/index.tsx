import { CardCountry } from "components/ui";
import { titleCutWords } from "functions";
import { Link } from "react-router-dom";
import { CountryProps } from "types";

const Countries = ({ countries }: { countries: CountryProps[] }) => (
  <div className="flex flex-col gap-2 w-full ">
    {countries?.map((value: CountryProps, index: number) => {
      return (
        <Link key={index} to={`/country/${value.country}`} state={value.alpha2}>
          <CardCountry
            index={index + 1}
            country={value.alpha2}
            title={titleCutWords(value.country, 3)}
          />
        </Link>
      );
    })}
  </div>
);

export default Countries;
