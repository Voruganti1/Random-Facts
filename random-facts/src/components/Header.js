import { useContext } from "react";
import { AppContext } from "./AppState";
import TestComponent, { factContext } from "../RandomFactContext";

export const Header = () => {
  const { appName } = useContext(AppContext);
  const { randomFact } = useContext(factContext);
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
