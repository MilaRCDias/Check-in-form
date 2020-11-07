import axios from "axios";

/**
 * Axios api
 */
export default axios.create({
  baseURL: " http://localhost:3000/",
  timeout: 1000,
});
