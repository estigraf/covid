import { useParams, useMatch, useNavigate } from "react-router-dom";
import axios from "axios";

const User = (data) => {
  
  const params = useParams();
  const { nameOfContry } = params;
  const i=(nameOfContry.split(":")[1]);

  async function axiosContryFunction() {
    console.log("oi");
    try{
    const countryUrl = `https://corona-api.com/countries/${
      i
    }`;
    console.log(countryUrl);
    const { data } = await axios.get(countryUrl);
    {
      console.log(data);
    }
    return data}
    catch{
      // alert("no match contry")
    }
  }
  axiosContryFunction();
  {console.log(data)}
  // const list=(data.data)
  // console.log(list);
  // const {latest_data}=list
  // console.log(latest_data);
  //  const {deaths,confirmed}=latest_data
  //  console.log(deaths,confirmed);
  {console.log(data)}
  return (
    
    <div>
      
      <ul>
      {data=JSON.stringify(data)}
        <li>activ:{ console.log("kicd")}</li>
        <li>cases:</li>
        <li>recovered:</li>
        <li>today:</li>
        <li>deaths:</li>
        <li>critical:</li>
      </ul>
    </div>
  );
};

export default User;
