const fetchDataNewsByCountry = async (country: string) => {
  const API_KEY = "846c8d71323d43639bb9075abcbaa642";
  if (country === "" || null || undefined) {
    return (country = "us");
  }
  const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchDataNewsByCountry;
