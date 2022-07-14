import { useNavigate } from "react-router-dom";
import * as React from "react";

const Most = ({ title, sorty, setIsClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <ol
        style={{
          border: "solid 2.5px blue",
          borderRadius: "25px",
          margin: "10px",
          height: "190px",
          textAlign: "center",
          padding: "15px",
          fontFamily:"sans-serif",
          fontSize:"1em",
          background:"yellow"
          
          
        }}
      >
        <h2>{title}</h2>

        {sorty.map((el) => (
          <div
            onClick={() => {
              navigate(`../country/${el.country}`);
            }}
          >
            {el.country}
          </div>
        ))}
      </ol>
    </>
  );
};

export default Most;
