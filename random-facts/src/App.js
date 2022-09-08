import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { TestComponent } from "./TestComponent";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import AppState from "./components/AppState";

function App() {
  return (
    <AppState>
      <Header />
      <main>Main area</main>
      <Footer />
    </AppState>
  );
}

export default App;
