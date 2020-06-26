import axios from "axios";

const instance = axios.create({
  baseURL: "http://sroczynski.pl/iosexamrest",
  responseType: "json",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});
export default instance;
