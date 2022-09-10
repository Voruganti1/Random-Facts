import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext({});

const AppState = (props) => {
  return (
    <AppContext.Provider
      value={{
        appName: "Random Facts",
        author: "Sudha",
        appVersion: 1,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
