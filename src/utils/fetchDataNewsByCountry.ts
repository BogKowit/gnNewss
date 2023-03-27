const fetchDataNewsByCountry = async (country: string) => {
  const API_KEY = `${process.env.NEWS_API_KEY}`;
  if (country === "" || null || undefined) {
    return (country = "us");
  }
  const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchDataNewsByCountry;
