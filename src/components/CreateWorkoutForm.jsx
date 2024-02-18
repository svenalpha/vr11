import {useState} from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";
import "../app.css";

export const CreateWorkoutForm = ()=>
{const {dispatch} = useWorkoutsContext();
const [title,setTitle] = useState('');
const [reps,setReps] = useState('');
const [load,setLoad] = useState('');  
const [error,setError] = useState(null);  
const [emptyFields,setEmptyFields] = useState([]);

const handleSubmit = async (e)=>                     
 {e.preventDefault();    
  
  const workout = {title,load,reps};  
  const response1 = await fetch("/api/workout");
           
  //const response = await fetch("http://localhost:5173/api/workout",{
  const response = await fetch("/api/workout",{     
    method:"POST",                                                                
    body: JSON.stringify(workout),                       
        headers: {"Content-Type": "application/json"
                 }                            }              
                              );                    
  console.log("affffter response");                                    
  const json = await response.json();      
  console.log("const json = ",json);     
  if (!response.ok) {setError(json.error);  
                     console.log(" CreateWorkoutForm  json = ",json);
                     setEmptyFields(json.emptyFields);
                     console.log("CreateWorkoutForm json.emptyFields = ",json.emptyFields); 
                     console.log("CreateWorkoutForm  emptyFields = ",emptyFields); 
                     console.log("CreateWorkoutForm error in adding entry, CreateWorkoutForm ",error);              
                    }else
                    {setEmptyFields([]);setError(null);setTitle(""); setLoad(""); setReps("");   
                     dispatch({type:"CREATE_WORKOUT",payload: json});             
                     console.log("in WorkoutForm, new entry added. json =",json);
                    }         
 }        
                
return(<>                      
                                            
<form className="create">      
  <h3>add a new entry</h3> 

  <label> Exercise title</label>   
  <input
  type="text"
  onChange = {(e)=>setTitle(e.target.value)}
  value ={title}
  className={emptyFields.includes("title") ? "error" : " "}
  />  

 <label> Load in kg: </label>   
  <input
  type="number"
  onChange = {(e)=>setLoad(e.target.value)}
  value ={load}
  className={emptyFields.includes("load") ? "error" : " "}
  />  

 <label> Reps </label>   
  <input
  type="number"
  onChange = {(e)=>setReps(e.target.value)}
  value ={reps}
  className={emptyFields.includes("reps") ? "error" : " "}
  />  
  <button type='submit' className='btn' onClick={handleSubmit}>submit form</button>
  {error && <div className="error">{error}</div> }  
</form>           
   </>)                     
                                                      
}                      















