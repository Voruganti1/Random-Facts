import React, { useContext } from "react";
import { AppContext } from "./AppState";

const Footer = () => {
  const { author } = useContext(AppContext);
  const greeting = `The author of this app is ${author}`;

  return (
    <footer>{`${greeting}. copyright ${new Date().getFullYear()}`}</footer>
  );
};

export default Footer;
