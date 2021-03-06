import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ComboBox() {
  const navigate = useNavigate();
  const [countrys, setCountry] = useState([]);
  const [isget, setisget] = useState(false);
  const [setName, setsetName] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const countriesApiUl = `https://disease.sh/v3/covid-19/countries`;
      const { data } = await axios.get(countriesApiUl);
      setCountry(data);
      setsetName(
        data.map((el) => {
          return el.country;
        })
      );
      setisget(true);
    }
    fetchData();
  }, [isget]);

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={setName}
        sx={{ width: 250 }}
        renderInput={(params) => (
          <TextField {...params} label="choose contry" />
        )}
        onChange={(e) => {
          console.log(e.nativeEvent);

          if (e.currentTarget.classList.value.includes("learIndicator")) {
            return;
          } else {
            navigate("../country/" + e.target.childNodes[0].data);
          }
        }}
      />
    </>
  );
}
