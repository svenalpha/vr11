import { Link, Route, Routes } from 'react-router-dom'
import { json } from "react-router-dom";
import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'
import "../app.css";
import "../App.jsx";
import {module_StrClass,
        module_StrClass1,module_StrClass2}  from "../css1.module.css";
import React, { useState, useEffect} from "react";
import axios from "axios";
//import { Link, Route, Routes } from 'react-router-dom';


export default function About() {
  const [userz,setUserz] = useState([]);

  const doLoad = async () => {

   //  1 
   console.log("in About.jsx, doLoad No 1");  
    await axios.get("/api/workoutsx/testx")
    //axios.get("/apix/userz")
    //axios.get("http://localhost:5173/userz")
    .then(res =>{//setUserz(res.data);
                 //console.log("in About.jsx, in doLoad, userz = ",userz);
                 console.log("in About.jsx, in doLoad, /api/workoutsx/testx res.data = ",res.data); 
                }
         )
    .catch(err =>{console.log("catch err = ",err)   
                 }         
          );  

   // 2
   console.log("in About.jsx, doLoad No 2"); 
     await axios.get("/api/workoutsx/testx")
          //axios.get("/apix/userz")
          //axios.get("http://localhost:5173/userz")
          .then(res =>{//setUserz(res.data);
                       //console.log("in About.jsx, in doLoad, userz = ",userz);
                       console.log("in About.jsx, in doLoad, /api/workoutsx/testx res.data = ",res.data); 
                      }
               )
          .catch(err =>{console.log("catch err = ",err)   
                       }         
                );  
      




// 3   
console.log("in About.jsx, doLoad No 3"); 
    //await axios.get("/userz")
    await axios.get("/test1")
    //axios.get("/apix/userz")
    //axios.get("http://localhost:5173/userz")
    .then(res =>{//setUserz(res.data);
                 //console.log("in About.jsx, in doLoad, userz = ",userz);
                 console.log("in About.jsx, in doLoad, /test1 res.data  json(res.data)= ",json(res.data.body)); 
                }
         )
    .catch(err =>{console.log("catch err of /api/workoutsx/testx= ",err)   
                 }         
          );  
    

          //4
    console.log("in About.jsx, doLoad No 4");      
    await axios.get("/api/workoutsx/testx")
    //axios.get("/apix/userz")
    //axios.get("http://localhost:5173/userz")
    .then(res =>{//setUserz(res.data);
                 //console.log("in About.jsx, in doLoad, userz = ",userz);
                 console.log("in About.jsx, in doLoad, /test1 res.data = ",res.data); 
                }
         )
    .catch(err =>{console.log("catch err of test1= ",err)   
                 }         
          );  

        //5
        console.log("in About.jsx, doLoad No 5");      
        await axios.get("/api/workouts/test3")
        //axios.get("/apix/userz")
        //axios.get("http://localhost:5173/userz")
        .then(res =>{//setUserz(res.data);
                     //console.log("in About.jsx, in doLoad, userz = ",userz);
                     console.log("in About.jsx,  doLoad no5, /api/workouts/test3 res.data = ",res.data); 
                    }
             )
        .catch(err =>{console.log("catch err of test1= ",err)   
                     }         
              );            





  };

  useEffect(() => {doLoad();},[]);




  return (
    <>
      <h1>About</h1>   
      <h4>start of userz display</h4>
      {userz.map(usar =>(
        <div key={usar.id}>
        <h4>{usar.name}</h4>
        <p>{usar.age}</p>
        </div>
                        )
                )
      }
      <h4>end of userz display</h4>

      <h4 className="strClass">using strClass from   app.css  inside About pagee</h4>  
      <h4 className={module_StrClass}>using module_StrClass within curly brackets  inside About pagee</h4>
      <h4 className={module_StrClass1}>using module_StrClass1 hhhhhhhhhh  inside About pagee</h4>
      <h4 className={module_StrClass2}>using module_StrClass1 hhhhhhhhhh  inside About pagee</h4>

      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>
    </>
  )
}
