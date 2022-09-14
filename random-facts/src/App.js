import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import RandomFactContext, { TestComponent } from "./RandomFactContext";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import AppState from "./components/AppState";

/*

1. use this api endpoint to get the JSON data back --> https://jsonplaceholder.typicode.com/posts
2. Store the data in some kind of React context provider
3. I'd like you to create a "custom hook" for bringing that context data into child components
4. I'd like to see a default message within the child component which deals with scenarios where there is no data
5. Use the ".map" array function (higher order function) to map over the 100 posts and create a STYLED list of posts

*/

function App() {
  return (
    <AppState>
      <RandomFactContext>
        <Header />
        <main>Main area</main>
        <Footer />
      </RandomFactContext>
    </AppState>
  );
}

export default App;
