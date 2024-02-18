
import {useState} from "react";     
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";        
import "../app.css";                         

     
export const UpdateWorkoutForm = ({workout, doUpdate, setDoUpdate })=>     
{console.log("in UpdateWorkoutForm  workout = ",workout);          
 console.log("in UpdateWorkoutForm  workout._id = ",workout._id);     
 
const {dispatch} = useWorkoutsContext();          
const [wout,setWout] = useState(workout);              
const [title,setTitle] = useState(workout.title);             
const [reps,setReps] = useState(workout.reps);             
const [load,setLoad] = useState(workout.load);            
const [idxx,setIdxx] =  useState(workout._id);            
const [error,setError] = useState(null);  
const [emptyFields,setEmptyFields] = useState([]);                 

const handleSubmit = async (e)=>                     
 {e.preventDefault();    
  // line below essential. perhaps problem with useState? component of 
  //component? string encoding? needs an original workout object?
  setWout( wout.title = title,wout.load=load , wout.reps =reps);
                              
   const response = await fetch("/api/workout/" + idxx,{               
    method:"PATCH",                                           
    //body: JSON.stringify(workout),                           
    body: JSON.stringify({title: title, load: load, reps: reps}),                  
    headers: {"Content-Type": "application/json"                        
             }                                         }                                                      
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
                    {console.log("UpdateWorkoutForm  response.ok"); 
                     setEmptyFields([]);setError(null);setTitle(""); setLoad(""); setReps("");   
                     dispatch({type:"UPDATE_WORKOUT",payload: json});             
                     console.log("in UpdateWorkoutForm, patched, possibly. json =",json);
                     setDoUpdate(false);
                    }         
 }        
                
return(<>                      
                                            
<form className="create">      
  <h3>update an entry</h3> 

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

















