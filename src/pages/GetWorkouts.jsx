import { useEffect,useState } from "react";    //xxx useState 
import {WorkoutDisplayDetails} from "../components/WorkoutDisplayDetails.jsx"
import {CreateWorkoutForm} from "../components/CreateWorkoutForm.jsx"
import {UpdateWorkoutForm} from "../components/UpdateWorkoutForm.jsx"

import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";



const url = 'http://localhost:5173/api/workout';  //  const url = 'https://api.github.com/users';  
//const urlx = 'http://localhost:5173/api/workoutsx/'; 
const urlx = 'http://localhost:5173/testy'; 
//'mongodb+srv://userx:654321%40a@cluster0.t8319.mongodb.net/Project0?retryWrites=true&w=majority';

export default function GetWorkouts() 
{const [workoutsx,setWorkoutsx] = useState('');
 
 // xxx  const [workouts, setWorkouts] = useState(null);
console.log("in GetWorkouts  pre useWorkoutsContext");
const {workouts,dispatch} = useWorkoutsContext();  
console.log("in GetWorkouts  workoutsx = ",workouts);
console.log("in GetWorkouts  post useWorkoutsContext");
useEffect(() => { getAllWorkouts(); },[]);



const getAllWorkouts = async () => 
 {console.log("in GetWorkouts/getAllWorkouts first line");
  console.log("url = ",url);
  const response = await fetch(url);
  const json = await response.json();
  console.log("in getAllWorkouts, response = ",response);
  if  (response.ok)
   {//x setWorkouts(json);
    console.log("in GetWorkouts, before dispatch is invoked. json =",json);
     dispatch({type: "SET_WORKOUTS", payload: json});
      console.log("in getAllWorkouts, workouts = ",workouts);     
   }       
 };  // end const getAllWorkouts = async () =>           

return(<>     

 <h1>GetWorkouts</h1>
 <h4>iiiiiiiinside GetWorkouts</h4>

 {/* display not using  dedicated component file  */}       
 <div className="workouts">
   <h4>beginning inside GetWorkouts.jsx</h4>  
   {/*zz*/}
   {workouts && workouts.map((workout)=>(     // ie only fires if workouts is positive 
                <div key={workout._id}>                                 
                  <p>{workout.title}</p>                     
                </div>                  )                          
                            )                
   } 
  {/*zz*/}
   <h4>ending inside GetWorkouts.jsx</h4>  
 {/*zz*/}
   <CreateWorkoutForm /> 
{/*zz*/}
 </div>   {/*  end   {workouts && workouts.map   */}   


 {/* alternative display, using dedicated component file  */}    
 <div className="workouts">
 <h4>beginning loop to GetWorkouts/WorkoutDisplyDetails</h4>  
 {/*zz*/}
   {workouts && workouts.map((workout)=>(     // ie only fires if workouts is positive 
                <WorkoutDisplayDetails key={workout._id} workout ={workout} />                                  
                                        )                                           
                            ) 
   }   
 {/*zz*/}    
 <h4>end loop to GetWorkouts/WorkoutDisplyDetails</h4>
 {/* <UpdateWorkoutForm /> */}                                                                                                                 
 </div>   {/*  end   {workouts && workouts.map   */}                  


                       
   </>)
}  //  end  export default function GetWorkouts() 





