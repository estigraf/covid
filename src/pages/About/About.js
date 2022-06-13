import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  return <div>About{state ? state.id : "no state"}</div>;
};

export default About;
