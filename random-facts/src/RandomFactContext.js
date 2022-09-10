import React, { useEffect, createContext, useState } from "react";
import axios from "axios";
export const factContext = createContext({});

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

export default RandomFactContext;
