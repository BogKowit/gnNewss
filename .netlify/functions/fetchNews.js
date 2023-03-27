const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const country = event.queryStringParameters.country || "us";
  const API_KEY = "846c8d71323d43639bb9075abcbaa642";
  const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    console.log(response);
    const data = await response.json();

    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Something went wrong!" }),
    };
  }
};