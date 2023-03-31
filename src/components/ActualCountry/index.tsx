import { CardCountry } from "components/ui";
import iso from "iso-3166-1";
import { titleCutWords } from "functions";

type ActualCountryProps = {
  key: string;
  pathname: string;
  search: string;
  hash: string;
  state: string;
};
const ActualCountry = ({ location }: { location: ActualCountryProps }) => {
  const { state, key } = location;
  const country = iso.whereAlpha2(state)?.country;
  return (
    <>
      {location && (
        <>
          <div className="mb-2">
            <h1>Oglądasz Informację dla:</h1>
            {country && (
              <CardCountry
                country={state}
                title={titleCutWords(country, 3)}
                index={key}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ActualCountry;
