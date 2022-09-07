import "./App.css";
import axios from "axios";
import React, { useState } from "react";
function App() {
  const [randomFact, setRandomFact] = useState("");
  //const displayFact = () => {
  const fact = axios
    .get("https://uselessfacts.jsph.pl/random.json")
    .then((res) => {
      setRandomFact(res.data.text);
    })
    .catch((x) => null);
  console.log(fact);
  //setRandomFact(fact);
  //};
  return <p>{randomFact}</p>;
}

export default App;
