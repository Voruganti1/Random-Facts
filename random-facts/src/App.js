import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { TestComponent } from "./TestComponent";

const URL = "https://catfact.ninja/fact";

function App() {
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
    <div>
      <TestComponent />
      <div>
        <span>{"{"}</span>
        <p className="fact">"fact" : {randomFact}</p>
        <p className="fact">"length" : {randomFact.length}</p>
        <span>{"}"}</span>
      </div>
      <button onClick={getData}>Refresh</button>
    </div>
  );
}

export default App;
