import React, { useEffect, useState } from "react";
import DailyData from "../../components/DailyData";
import Most from "../../components/Most";

const Home = ({ countries, setIsClick, timLine }) => {
  const sort = [...countries];
  const [isSort, setisSort] = useState(false);
  const title = {
    title0: "Most Deaths - All Time",
    title1: "Most Confiremed - All Time",
    title2: "Most Deaths - Today",
    title3: "Most Confiremed - Today",
  };
  const sortsArray = ["deaths", "todayDeaths", "cases", "todayCases"];
  useEffect(() => {
    setisSort(true);
  }, [countries]);

  return (
    <div>
      <DailyData timLine={timLine} />
      <div className="sort" style={{ display: "flex", marginLeft: "40px" }}>
        {isSort
          ? sortsArray.map((el, i) => (
              <Most
                setisSort={setisSort}
                title={title["title" + i]}
                sorty={sort.sort((a, b) => b[el] - a[el]).slice(0, 5)}
                setIsClick={setIsClick}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
