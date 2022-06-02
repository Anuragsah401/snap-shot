import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigate from "./Helper/Navigate";
import { ImageProvider } from "./Context/ImagesContext";
import Home from "./Pages/Home";
import View from "./Pages/View";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate />} />
        <Route
          exact
          path="/:keyword"
          element={
            <ImageProvider>
              <Home />
            </ImageProvider>
          }
        />
        <Route exact path="view" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
