import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyBAmg-zExNAUgQ2iTkpTDH3hLRNBQVWNss",
  cx: "9793a0cceab8c4b9e",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      ...params,
      ...payload,
    },
  });
  return data;
};
