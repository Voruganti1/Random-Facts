import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
function App() {
  const [randomFact, setRandomFact] = useState("");
  //const displayFact = () => {
  useEffect(() => {
    /*
    const fact = axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((res) => {
        setRandomFact(res.data.text);
      })
      .catch((x) => null);
      */
    const fact = async () => {
      var r = await axios.get("https://catfact.ninja/fact");
      setRandomFact(r.data.fact);
      console.log(r);
    };
    fact();
  }, []);
  //setRandomFact(fact);
  //};
  return (
    <div>
      <span>{"{"}</span>
      <p className="fact">"fact" : {randomFact}</p>
      <span>{"}"}</span>
    </div>
  );
}

export default App;
