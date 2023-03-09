import React from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./appBar/AppBar";
import Departments from "./departments/Departments";
import Home from "./home/Home";
import NotFound from "./notFound/NotFound";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
