import axios from "axios";

/**
 * Axios api
 */
export default axios.create({
  baseURL: "https://my-json-server.typicode.com/MilaRCDias/Check-in-form/db",
  timeout: 1000,
});
