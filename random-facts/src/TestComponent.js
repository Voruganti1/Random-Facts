import React, { useEffect } from "react";

export const TestComponent = () => {
  useEffect(() => {
    console.log("Message from TestComponent");
  }, []);

  return <div>TestComponent</div>;
};
