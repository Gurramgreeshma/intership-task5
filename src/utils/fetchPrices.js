import axios from "axios";

export async function fetchPrices(ids = []) {
  const query = ids.join('%2C'); // URL-encoded comma separator
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${query}&vs_currencies=usd`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching prices:", error);
    return {};
  }
}
