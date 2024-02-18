
import express from 'express';
import WorkoutModelDb from "../models/workoutDbModel.js";

import {getEnv,getAllWorkoutEntries,
        //updateWorkoutEntry,
        createWorkoutEntry} from "../controllers/workoutController.js";
import mongoose from 'mongoose';
export const router = express.Router(); 

       

/*
router.get("/Env",(req,res)=>{ console.log("req = ",req);
                               res.json({mssg: "ASDFGHHjhjjuj"});
                               console.log("res.json = ",res.json);  
                               console.log("inside router.get /Env"); 
                             return(  res.redirect("/Error404") );
                             }                          
          );                              
*/
router.get("/env",getEnv); 

router.get('/test3',(req,res) => {
    console.log("in workoutRoutes router.get ");
    res.json({mssg:'  mssg of router.get test3  '});
});


router.get("/about",(req,res)=>{res.json({mssg: "inside About in workout.js"});
                               }                                                                           
          );                                                 


// GET all entries
router.get("/",  getAllWorkoutEntries);  //see export const getAllWorkoutEntries in workoutController.js


// Get single entry    // in this case function body not moved to  workoutController.js        
router.get("/:id",async (req,res)=>{                         
    const {id} = req.params;                   
    if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even be considered as an id
        return res.status(404).json({error: "not a valid id"});
    const workout = await WorkoutModelDb.findById(id); 
    if (!workout) {return res.status(404).json({error: "no such entry"});}
    return res.status(200).json(workout);             
    //res.json({mssg: "GET single entry"});               
                                   }                                            
          );                                
// POST new entry   
router.post("/", createWorkoutEntry); //  see export const createWorkoutEntry in workoutController.js  
//router.patch("/:id", updateWorkoutEntry); //  see export const createWorkoutEntry in workoutController.js                         
router.patch("/:id",async (req,res)=>{
    const {id} = req.params;                                       
    if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
        return res.status(404).json({error: "not a valid id"});                 
                                                                            
    const workout = await WorkoutModelDb.findOneAndUpdate({_id : id},{...req.body});         
    if (!workout) {return res.status(400).json({error: "no such entry"});}           
    return res.status(200).json(workout);                                                       
                                     }                                                                                                         
            );  


router.delete("/:id",async (req,res)=>{
    console.log("in workoutRoutes.js  router.delete('/:id'...");
    const {id} = req.params;                   
    if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
        return res.status(404).json({error: "not a valid id"});
                                                                                      
    const workout = await WorkoutModelDb.findOneAndDelete({_id : id});   
    if (!workout) {return res.status(400).json({error: "no such entry"});}
    return res.status(200).json(workout);                                      
                                      }                                                                                          
             );   // end  router.delete("/:id",async (req,res)=>{                         





router.get("/*",(req,res)=>{/* res.json({mssg: "404/404/404/404"}); */       
                           /* res.sendFile('../pages/Error404',{root: __dirname});   */  
                           /* res.render('../pages/Error404',{root: __dirname});  */  
                           /* console.log("inside router.get(/*"); */
                           /* res.redirect("/Error404");  */
                           return("aaaaaaargh");
                          }                              
          );                                                

/*  module.exports=router;  */ 
 export default router; 



