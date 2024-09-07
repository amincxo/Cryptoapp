const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-TJcWZyC8esmJ2byAVXXRM1dr";

const getCoinList = () => {
    return `${BASE_URL}/coins/markets?vs_currency=usd&per_page=20&page=1&x-cg-demo-api-key=${API_KEY}`
}

export {getCoinList};