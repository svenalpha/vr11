
import { WorkoutsContext } from "../context/WorkoutContext.jsx";
import { useContext } from "react";

export const useWorkoutsContext = ()=>
{ console.log("in hooks/useWorkoutsContext.jsx/useWorkoutsContext   pre useContext(");
  const context =useContext(WorkoutsContext);
  console.log("in hooks/useWorkoutsContext.jsx/useWorkoutsContext post useContext(");
     if (!context) {throw Error("aaa use context only in designated components");}              

  return context;
}

