import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Login1 from "./Login1";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default App;
