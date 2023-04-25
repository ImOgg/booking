import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./page/Homepage";
import About from "./page/About";
import SinglePage from "./page/SinglePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" index element={<Homepage />} />
          <Route path="about" element={<About />} />

          <Route path="room1" element={<SinglePage />} />
          <Route path="room2" element={<SinglePage />} />
          <Route path="room3" element={<SinglePage />} />
          <Route path="room4" element={<SinglePage />} />
          <Route path="room5" element={<SinglePage />} />
          <Route path="room6" element={<SinglePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
