import React from "react";
import Axios from "axios";
const Api = () => {
  return Axios.create({ baseURL: "https://uselessfacts.jsph.pl/" });
};
export default Api;
