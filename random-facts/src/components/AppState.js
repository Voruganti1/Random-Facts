import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext({});
const URL = "https://catfact.ninja/fact";

const AppState = (props) => {
  const [randomFact, setRandomFact] = useState("");

  async function getData() {
    const response = await axios.get(URL);
    setRandomFact(response.data.fact);
  }

  useEffect(() => {
    if (!randomFact) {
      getData();
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        appName: "Random Facts",
        author: "Sudha",
        appVersion: 1,
        randomFact,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
