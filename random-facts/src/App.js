import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import RandomFactContext, { TestComponent } from "./RandomFactContext";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import AppState from "./components/AppState";

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
