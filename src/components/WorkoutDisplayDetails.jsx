import { Link, Route, Routes } from 'react-router-dom'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";
import { UpdateWorkoutForm } from "./UpdateWorkoutForm.jsx";
import { useState } from 'react';

export const WorkoutDisplayDetails =({workout})=>
{const [doUpdate,setDoUpdate] = useState(false); 
const {dispatch} = useWorkoutsContext();

const handleClickDelete = async ()=>
  {const response = await fetch("/api/workout/" + workout._id,{method:"DELETE"});
   const json = await response.json();
   if (response.ok)     
    {dispatch({type: "DELETE_WORKOUT",payload: json});
    }       
  }
return(<>  

<div className="workout-details">
   <h4>inside start WorkoutDisplayDetails.js</h4>
   <h4>{workout.title}</h4>
   <p><strong>load in kg: </strong>{workout.load}</p>
   <p><strong>Reps: </strong>{workout.reps}</p>
   <p>{workout.createdAt}</p>
   <button onClick={handleClickDelete}>delete</button>
   <button onClick={()=>(setDoUpdate(true))}>setDoUpdate</button>
   
   {/* line below:  ie if setDoUpdate clicked, doUpdate =1, so <UpdateWorkoutForm /> fires   */}
   {doUpdate && <UpdateWorkoutForm key={workout._id} workout ={workout}  doUpdate={doUpdate} setDoUpdate={setDoUpdate} />}  
   
  
   <h4>inside end WorkoutDisplayDetails.js</h4>
 </div>
    </>)
}




