import { useContext } from "react";
import { AppContext } from "./AppState";

export const Header = () => {
  const { randomFact, appName } = useContext(AppContext);

  return (
    <header>
      <h1>{appName}</h1>
      <h4>{randomFact}</h4>
    </header>
  );
};

export const HeaderTitle = () => {
  return <h1>This is The Title</h1>;
};
