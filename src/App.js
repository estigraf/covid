import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import User from "./pages/User/User";
import NotFound from "./pages/NotFound";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [timLine, settimLine] = useState([]);
  const [isget, setisget] = useState(false);
  const [setName, setsetName] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const countriesApiUl = `https://disease.sh/v3/covid-19/countries`;
      const { data } = await axios.get(countriesApiUl);
      const countriesApiUrl2 = `https://corona-api.com/timeline`;
      const respons = await (await axios.get(countriesApiUrl2)).data;
      setCountries(data);
      setisget(true);
      settimLine(respons.data[0]);
    }
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        {isget ? <Navbar isget={isget} setName={setName} /> : null}
        <Routes>
          (
          <Route
            path="/"
            element={<Home countries={countries} timLine={timLine} />}
          />
          )
          <Route path="/about" element={<About />} />
          <Route path="/country/:nameOfContry" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
