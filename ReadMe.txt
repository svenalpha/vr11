vr11 is a cloned version of vr09 after strange browser behaviour which may also have corrupted  
the corresponding git repository. Delete firefox, reloaded it and started again. 


created with TNN mern stack video and ssr-react scaffold. ie connects to 
mongoDB and has afront end and backend. minimal css. No security 
ie no helmet/passport etc 
measures. 

started with a08/vr08
- then added TNN mern stack tutorial stuff:
- doesn't contain security measures 
 - patch route added

https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE
but videos saved in c:\web\00Videos_web
files saved at:  https://github.com/iamshaunjp/MERN-Stack-Tutorial


do: npm run dev   //  for development version    to localhost:5173 
do: npm run build  // for production version (ie creates dist directory)
difficulty with preview of build version, at command prompt, so do:
NODE_ENV=production node server  // which seemed to work correctly 



(almost) working model of multi-page SSR vite/express/react from: 

https://github.com/vitejs/vite-plugin-react/tree/main/playground/ssr-react

slightly changed with:
1) because of age of this demo project, all dependantcies in 
package.json updated with newest version 
2)  a bit of css added
3)another page "extra" added
4) UseEffectFetchData added 
5) the 404 solution not in effect



to make work:
in package.json
          "@vitejs/plugin-react": "workspace:*",
provoked  an error. It was changed to:
          "@vitejs/plugin-react": "^4.0.4",
 express and compression moved from devDependencies to dependencies
 "serve-static": "^1.15.0"  added as per original model above ie  ..tree/main/playground/ssr-react




https://stackoverflow.com/questions/45390377/react-how-to-pass-returned-data-from-an-exported-function-to-a-component



routes removed from server.js to workoutRoutes.js. POST & GET functions in turn are removed and replaced by functions
call functions in workoutController.js. Only 2 just for proof of concept. 


in App.jsx, Home is moved to first in menu, Error404 is moved to last and path                                      
changed to "*"  for catch-all

update system with popup window toggled with setDoUpdate useState hook  is 
passed from WorkoutDisplayDetails to UpdateWorkoutForm



the "error message" notice uses class name change to toggle highlight of 
missed entry fields. 

.module_StrClass inside css1.module.css file is used in About.jsx with
import {module_StrClass}  from "../css1.module.css";  // ie only 1 class is imported
....<h4 className={module_StrClass}>XYZ</h4>



/* conditional classes. see CreateWorkoutForm   input */
input.error{border: 1px solid var(--error); color:green;}



404 reload error message fixed: seereact404reload.txt



//const mongoose= require('mongoose');

/*  const UserSchema = new mongoose.Schema({   */

const WorkoutModelDb= mongoose.model("WorkoutModel",workoutSchema);                                      
/* module.exports = WorkoutModelDb;   */
export default WorkoutModelDb;

/* const db_model_User = mongoose.model('db_model_User',UserSchema); */
/* module.exports = db_model_User; */



         if (!isTest)
                   {createServer().then(({app}) => 













