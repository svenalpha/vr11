
import {createContext, useReducer} from "react";

export const WorkoutsContext = createContext();


export const workoutsReducer = (state,action)=>
{ console.log("WorkoutContext, state = ",state);
  console.log("WorkoutContext, action = ",action);
  switch (action.type)
  {case "SET_WORKOUTS":
     return{workouts:action.payload}
   case "CREATE_WORKOUT":
     return {workouts:[action.payload, ...state.workouts]}      
   case "DELETE_WORKOUT":
     return {workouts: state.workouts.filter((w)=>w._id !== action.payload._id)}                        
   case "UPDATE_WORKOUT": return {workouts: [...state.workouts]}  
     default: return state;       
  } 
}
{/*////const workout = await WorkoutModelDb.findOneAndUpdate({_id : id},{...req.body}); */}       
export const WorkoutsContextProvider = ({ children })=>
{console.log("in context/WorkoutsContext.jsx WorkoutsContextProvider pre useReducer(workoutsReducer,{workouts: null })");
const [state, dispatch] = useReducer(workoutsReducer,{workouts: null });
console.log("in context/WorkoutsContext.jsx WorkoutsContextProvider post useReducer(workoutsReducer,{workouts: null })");
return(
  <WorkoutsContext.Provider value = {{...state,dispatch}}>  
     { children }
  </WorkoutsContext.Provider>  
      )    
}
