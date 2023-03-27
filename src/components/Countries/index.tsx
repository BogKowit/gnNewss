import { Link } from "react-router-dom";
import { titleCutWords } from "../../functions";
import { CardCountry } from "../ui";

interface props {
  country: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
}

const Countries = ({ countries }: { countries: props[] }) => (
  <div className="flex flex-col gap-2 w-full ">
    {countries?.map((value: props, index: number) => {
      return (
        <Link to={`/country/${value.country}`} state={value.alpha2}>
          <CardCountry
            index={index}
            country={value.alpha2}
            title={titleCutWords(value.country, 3)}
          />
        </Link>
      );
    })}
  </div>
);

export default Countries;
