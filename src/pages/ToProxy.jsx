

//import { addAndMultiply } from '../add'
//import { multiplyAndAdd } from '../multiply'
//import UseEffectFetchData from "../UseEffectFetchData";
import { useEffect,useState } from "react";  
import axios from "axios";

export default function ToProxy() {
const [data,setData] = useState();
const urlProxy = "/api/v1";  

function getData(){
  axios.get(urlProxy)
  .then((res) => setData(res.data))
  .catch((error) => {console.log("catch error = ",error);});
                  } 
  useEffect(() => {getData();},[]);                              

  return (
    <>
      <h1>ToProxy   xxx</h1>
      <p>data : {data}</p>
    </>
  )
}


