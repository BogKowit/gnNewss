export const fetchDataNewsByCountry = async (country: string) => {
  const API_KEY = "";
  const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};
