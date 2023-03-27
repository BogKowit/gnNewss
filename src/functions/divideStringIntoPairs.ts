import iso from "iso-3166-1";

interface props {
  country: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
}

export default function divideStringIntoPairs(str: string) {
  const pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    pairs.push(str.slice(i, i + 2));
  }
  const countriesFunc: any[] = [];
  pairs.map((value) => countriesFunc.push(iso.whereAlpha2(`${value}`)));
  return countriesFunc;
}
