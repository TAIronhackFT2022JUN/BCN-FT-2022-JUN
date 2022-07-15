import React from "react";
//Components
import Home from "./components/Home.js";
import Beers from "./components/Beers.js";
import SingleBeer from "./components/SingleBeer.js";
import NewBeer from "./components/NewBeer.js";
//React router dom
import { Routes, Route } from "react-router-dom";
//Assets

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/beers" element={<Beers />} />
        <Route exact path="/beer/:id" element={<SingleBeer />} />
        <Route exact path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
