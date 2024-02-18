
import { Link, Route, Routes, json, useLoaderData } from 'react-router-dom'
import "./app.css"; 

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*.jsx', { eager: true });
console.log("in app.jsx, pages, pre Object.keys", pages);

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1]
  return {name,                                          
          path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,            
          component: pages[path].default,                  
         }                                      }
                               
                                     ) 

const index = routes.findIndex((route) => route.name == "Home");
const Home= routes[index];
routes.splice(index, 1); routes.splice(0,0,Home);

const index2 = routes.findIndex((route) => route.name == "Error404");
const Error404= routes[index2]; Error404.path="/*"; 
routes.splice(index2, 1); routes.push(Error404);

//const index3 = routes.push(route3);
//const index3 = routes.findIndex((route) => route.name == "route3");
//const route3= routes[index3]; route3.path="/*"; 
//routes.splice(index3, 1); routes.push(route3);

//console.log("in App, routes = ", routes );
////const new1 = new routes;   
//routes.push({
//  "name": "route3",
//  "path": "/userz",
//  "component": "/userz", //element": "", //path: '/about', element: <About /> 
//});

//console.log("pre /test1");
//routes.push({
//              path: "/test1", 
//              loader() {return json({ message: "Welcome to React Router!" });
//                       },                        
//            Component() {
//               let data = useLoaderData();  
//                                    
//               return <h1>{data.message}</h1>;
//                       } 
//           },
//            );                            

//            console.log("pre /api/workoutsx/testx");
//            routes.push({
//              path: "/api/workoutsx/testx", 
//              loader() {return json({ message: "Welcome to React Router!" });
//                       },                        
//            Component() {
//               let data = useLoaderData();  
//                                    
//               return <h1>{data.message}</h1>;
//                       } 
//           },
//            );       



var int = routes.length;
//routes.push(name = "route3");
console.log("in App, after creation of new element route3   routes = ", routes );

export function App() {
  console.log("in app.jsx, App() pre return  ");
  return(<>
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            /* console.log("in Routes ul name, path =",name, path); */
            if (name !== "Error404"&&name !== "xxxUpdate")     
             {return(
                <li key={path} style={{color: "red"}}>
                  <Link to={path}   style={{color: "green"}}>{name}</Link>
                </li>       
                    )
             }                            }                      
                     )                                                            
          }
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, component: RouteComp }) => 
          {console.log("in App.jsx, Routes, routes.map.  path = ",path);
           console.log("in App.jsx, Routes, routes.map. RouteComp = ",RouteComp );
           //console.log("in App.jsx, Routes, routes.map. element = ",element );
           if (path == "/test1" || path == "/api/workoutsx/testx")
           return <Route key={path} path={path} ></Route>
           else return <Route key={path} path={path} element={<RouteComp />}></Route>
          }        )            
        }                 
      </Routes>
     </>)  
}
