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

export type FetchDataAction = {
  type: string;
  payload: DataTypes[];
};