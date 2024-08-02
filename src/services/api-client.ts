import axios from "axios";
import gameApiKey from "./apikey";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: gameApiKey,
  },
});
