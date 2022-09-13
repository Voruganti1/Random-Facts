import { AppContext } from "./AppState";
import { useRanfomFact } from "../RandomFactContext";

export const Header = () => {
  const { randomFact } = useRanfomFact();

  return (
    <header>
      <h4>{randomFact}</h4>
    </header>
  );
};

export const HeaderTitle = () => {
  return <h1>This is The Title</h1>;
};
