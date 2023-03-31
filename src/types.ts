export type DataState = {
  data: DataTypes[];
};

export type DataTypes = {
  author: string;
  title: string;
  description: string;
  url: string;
  source: Source;
  urlToImage: string;
  publishedAt: string;
};

export type Source = {
  id: string;
  name: string;
};

export type CountryProps = {
  country: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
};

export type FetchDataAction = {
  type: string;
  payload: DataTypes[];
};

export type CardCountryProps = {
  index: string | number;
  country: string;
  title: string;
};

export type ListNewsProps = {
  title: string;
  datePublished: string;
  name: string;
};

export type CardNewsProps = {
  urlToImage: string;
  title: string;
  datePublished: string;
  name: string;
};

export type SidebarProps = {
  country: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
};
