import React, { createContext } from "react";

export const AppContext = createContext({});

const AppState = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        appName: "Random Facts",
        author: "Sudha",
        appVersion: 1,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;

//   const [randomFact, setRandomFact] = useState("");

//   async function getData() {
//     const response = await axios.get(URL);
//     setRandomFact(response.data.fact);
//   }

//   useEffect(() => {
//     if (!randomFact) {
//       getData();
//     }
//   }, []);
