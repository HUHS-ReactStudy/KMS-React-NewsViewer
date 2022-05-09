import logo from "./logo.svg";
import "./App.css";
import { useState, useCallback } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./components/Newspage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
