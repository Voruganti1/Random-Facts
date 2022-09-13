import React, { useEffect, createContext, useState, useContext } from "react";
import axios from "axios";

export const factContext = createContext(undefined);

const RandomFactContext = (props) => {
  const [randomFact, setRandomFact] = useState("");
  const URL = "https://catfact.ninja/fact";

  async function getData() {
    const response = await axios.get(URL);
    setRandomFact(response.data.fact);
    console.log(randomFact);
  }

  useEffect(() => {
    if (!randomFact) {
      getData();
    }
  }, []);

  return (
    <factContext.Provider
      value={{
        randomFact,
      }}
    >
      {props.children}
    </factContext.Provider>
  );
};

// lexical scoping
export const useRanfomFact = () => {
  const context = useContext(factContext);

  if (!context) {
    throw new Error(
      "either context is undefined OR you are using this hook outside the provider"
    );
  }

  return context;
};

export default RandomFactContext;
