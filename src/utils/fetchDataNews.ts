export const fetchDataNews = async () => {
  const API_KEY = "";
  const country = "us";
  const category = "business";
  try {
    const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
