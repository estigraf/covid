import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";

export default function User() {
  const [dailyApdate, setDailyApdate] = useState([]);
  const [isGetData, setIsGetData] = useState(false);
  const params = useParams();
  const { nameOfContry } = params;
  useEffect(() => {
    try {
      async function fetchData() {
        const countriesApiUl = `https://disease.sh/v3/covid-19/countries/${nameOfContry}`;
        const { data } = await axios.get(countriesApiUl);
        const { active, cases, recovered, deaths, critical, todayCases } = data;
        setDailyApdate([
          {
            active,
            cases,
            recovered,
            deaths,
            critical,
            todayCases,
          },
        ]);
        setIsGetData(true);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [nameOfContry]);

  return (
    <div>
      <h1>{nameOfContry}</h1>
      <Accordion disabled>
        <Typography>
          all what we know about covid-19 in {nameOfContry}
        </Typography>
      </Accordion>
      {isGetData
        ? Object.keys(dailyApdate[0]).map((el) => {
            return (
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{el.toUpperCase()}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{dailyApdate[0][el].toLocaleString()}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })
        : null}
    </div>
  );
}
