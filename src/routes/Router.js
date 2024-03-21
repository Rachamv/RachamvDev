import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components....................
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
