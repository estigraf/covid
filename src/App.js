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
  const [isdaily, setisdaily] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const countriesApiUl = `https://disease.sh/v3/covid-19/countries`;
      const { data } = await axios.get(countriesApiUl);
      setCountries(data);
      setisget(true);
    }
    fetchData();
  }, []);
  useEffect(() => {
    try {
      async function fetchData() {
        const countriesApiUrl = `https://corona-api.com/timeline`;
        const { data } = await axios.get(countriesApiUrl);

        settimLine(data.data[0]);
        setisdaily(true);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);
  const [isget, setisget] = useState(false);
  const [setName, setsetName] = useState([]);

  return (
    <div>
      <BrowserRouter>
        {isget ? <Navbar isget={isget} setName={setName} /> : null}
        <Routes>
          {isdaily ? (
            <Route
              path="/"
              element={
                <Home
                  isdaily={isdaily}
                  countries={countries}
                  timLine={timLine}
                />
              }
            />
          ) : null}
          <Route path="/about" element={<About />} />
          <Route path="/country/:nameOfContry" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
