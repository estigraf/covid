import DailyData from "../../components/DailyData";
import Most from "../../components/Most";
const styleSort = { display: "flex", marginLeft: "40px" };
const Home = ({ countries, timLine }) => {
  const sort = [...countries];
  const sortsArray = [
    { label: "deaths", title: "Most Deaths - All Time" },
    { label: "todayDeaths", title: "Most Confiremed - All Time" },
    { label: "cases", title: "Most Deaths - Today" },
    { label: "todayCases", title: "Most Confiremed - Today" },
  ];

  return (
    <div>
      <DailyData timLine={timLine} />
      <div style={styleSort}>
        {sortsArray.map((el) => (
          <Most
            key={el.label}
            title={el.title}
            sorty={sort.sort((a, b) => b[el.label] - a[el.label]).slice(0, 5)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
