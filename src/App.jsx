import React from "react";
import Home from "./routes/home/home.component";
import {Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
const Shop = () => {
  return <h1>Welcome to shop </h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
