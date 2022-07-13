import React from "react";

const DailyData = (timLine) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginLeft: "150px",
          marginRight: "150px",
          fontFamily: "cursive",
         
        }}
      >
        {Object.keys(timLine.timLine).map((el, i) => {
          return (
            <div
              className={el}
              style={{
                border: "4px solid blue",
                width: `${i + 2}0%`,
                margin: "10px",
                textAlign: "center",
                padding: "20px",
                maxHeight:"45px",
                maxWidth:"430px"
          
              }}
            >
              <div style={{ color: "red" }}>{el.toUpperCase()}</div>
              <div>{timLine.timLine[el]}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DailyData;
