import { FC } from "react";
import { CardCountryProps } from "../../../types";

const CardCountry: FC<CardCountryProps> = ({ index, country, title }) => (
  <div key={index} className="cardCountryWrapper">
    <img
      alt="country_flag"
      className="cardCountryFlag"
      src={`https://newsapi.org/images/flags/${country}.svg`}
    />

    <p className="cardCountryName">{title}</p>
  </div>
);

export default CardCountry;
