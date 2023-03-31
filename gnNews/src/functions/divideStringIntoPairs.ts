import iso from "iso-3166-1";

export default function divideStringIntoPairs(str: string) {
  const pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    pairs.push(str.slice(i, i + 2));
  }
  const countriesFunc: any[] = [];
  pairs?.map((value) => countriesFunc.push(iso.whereAlpha2(`${value}`)));
  return countriesFunc;
}
