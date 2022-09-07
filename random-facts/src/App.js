import "./App.css";
import axios from "axios";

function App() {
  const displayFact = () => {
    const fact = axios.get("https://uselessfacts.jsph.pl/random.json");
    console.log(fact);
  };
  return <p>{displayFact}</p>;
}

export default App;
