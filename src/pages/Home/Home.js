import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  return <div>Home </div>;
};

export default Home;
