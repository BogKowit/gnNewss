export const fetchDataNews = async () => {
  const API_KEY = ""
  try {
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
