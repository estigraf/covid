import React, { useEffect, useState } from "react";
import DailyData from "../../components/DailyData";
import Most from "../../components/Most";

const Home = ({ countries,timLine }) => {
  const sort = [...countries];
  const [isSort, setisSort] = useState(false);
  const title = {
    title0: "Most Deaths - All Time",
    title1: "Most Confiremed - All Time",
    title2: "Most Deaths - Today",
    title3: "Most Confiremed - Today",
  };
  const sortsArray = ["deaths", "todayDeaths", "cases", "todayCases"];
  const styleSort={ display: "flex", marginLeft: "40px" }
  useEffect(() => {
    setisSort(true);
  }, [countries]);

  return (
    <div>
      <DailyData timLine={timLine} />
      <div style={styleSort}>
        {isSort
          ? sortsArray.map((el, i) => (
              <Most
                setisSort={setisSort}
                title={title["title" + i]}
                sorty={sort.sort((a, b) => b[el] - a[el]).slice(0, 5)}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
