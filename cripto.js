const axios = require("axios").default;

const options = {
  method: "GET",
  url: "https://coingecko.p.rapidapi.com/coins/markets",
  params: {
    vs_currency: "usd",
    page: "1",
    per_page: "100",
    order: "market_cap_desc",
  },
  headers: {
    "x-rapidapi-host": "coingecko.p.rapidapi.com",
    "x-rapidapi-key": "9a6112bcdfmsh17b8070e1c140a4p1cc052jsn810af4ad441c",
  },
};

const getCriptosApi = async () => {
  try {
    const data = await axios.request(options);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCriptosApi };
