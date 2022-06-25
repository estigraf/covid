import { useNavigate } from "react-router-dom";
import React, { useState,useRef,} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Print } from "./Print";

const listStyle = {
  display: "flex",
  justifyContent: "space-around",
  border: "black solid 1px",
  listStyle: "none",
};

const openList={
  
}

let op=[]
const Navbar = () => {
  const navigate = useNavigate();
  const ref=useRef()
  const [click,isclick]=useState(false)
  const[listName,islistName]=useState([])
  const [contryValue,setcontryValue]=useState("")
  const navigateFunction=(e)=>{
    const u=listName.filter(el=>{
      return el==(e.target.value)
      })
      console.log(typeof(u));
     u[0]==null? alert("no match contry"):
    isclick(false) 
    navigate("./contry/"+contryValue,{state:{"contry":contryValue}})
    
  }
  async function axiosFunction(){
    const listNames=[]
        const countryUrl =('https://corona-api.com/countries') 
        const {data} = await axios.get(countryUrl)
        const list=(data.data)
        //console.log(list);
         list.map(el=>{
             listNames.push(`${el.name}:${el.code}`);
         }) 
         islistName(listNames)         
  }

 
  return (
    <div>
      <ul style={listStyle}>
        <li>
          <Link to="/" >
            Home
          </Link>
        </li>
        <li>
       {/* <form > */}
      <input  placeholder="chose" value={contryValue} onFocus={(e)=>{
        axiosFunction();
        console.log(listName);
        op=listName
       
        
      }}
       onKeyDown={(e)=>{
         e.key=="Enter"?navigateFunction(e):console.log("no");
        
      //    navigate("./contry/"+e.target.value)
         
         
        }}
       onChange={(e)=>{
; isclick(true);setcontryValue(e.target.value)
e.target.value==""? op=listName: op=listName.filter(el=>{
  return el.includes(e.target.value)
})
console.log(op);
      }}/>

      {/* <button type="submit" onClick={()=>{

        navigate("./contry/"+contryValue,{state:{"contry":contryValue}})
    
      }}>יבא נתוני תחלואה</button>

</form> */}
        </li>
        <li>
          <Link to="/user/defult/defult">contry</Link>
        </li>
      </ul>
    { click? <select style={openList} name="cotrys" id="lang" multiple>
    { op.map(el=>{
      return <option value={el} onKeyDown={(e)=>{ 
      }} onClick={(e)=>{
        setcontryValue(e.target.value)
        // navigate("./contry/"+e.target.value,{state:{"contry":e.target.value}}); 
       //console.log(e.target.parentElement.parentElement.innerHTML+"huhu"); 
      }}>{el}</option>           
     })  }
      </select>:"" }
      
    </div>
  );
};

export default Navbar;
