import express from 'express';
import WorkoutModelDb from "../models/workoutDbModel.js";
//import routerx from 'express.Router()';
export const routerx = express.Router();   
//const routerx = express.Router();   
import {getEnv,getAllWorkoutEntries,
    //updateWorkoutEntry,
    createWorkoutEntry} from "../controllers/workoutController.js";

routerx.get('/testx',(req,res) => {
    console.log("in workoutRoutesx routerx.get ");
    res.json({mssg:'  mmmmmmssg of routerx.get  '});
});







routerx.get("/", async (req,res) => //getAllWorkoutEntries
 {
console.log("inside get( / ) of routerx, getAllWorkoutEntries ");            
const workouts = await WorkoutModelDb.find({}).sort({createdAt: -1});  // ie find all, sorted in descending order       
                                // ....find({reps:20}).... finds all entries where reps=20
return res.status(200).json(workouts);
 }                                           
//return res.json({mssg: "GET all entries"}); 
//return;




           );  //see export const getAllWorkoutEntries in workoutController.js



//module.exports = routerx;
export default routerx;
