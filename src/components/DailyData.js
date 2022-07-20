import React from "react";
const styleTime = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  marginLeft: "150px",
  marginRight: "150px",
  fontFamily: "cursive",
  padding: "10px",
};
const styleBox = {
  border: "5px solid blue",
  textAlign: "center",
  padding: "20px",
};
const DailyData = (timLine) => {
  return (
    <>
      <div style={styleTime}>
        {Object.keys(timLine.timLine).map((el) => {
          return (
            <div className={el} style={styleBox} key={el}>
              <div style={{ color: "red" }}>{el.toUpperCase()}</div>
              <div style={{ paddingBottom: "1px" }}>{timLine.timLine[el]}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DailyData;
