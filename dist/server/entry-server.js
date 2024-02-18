import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { json, Link, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext, useReducer, useContext } from "react";
import axios from "axios";
function multiply(a, b) {
  return a * b;
}
async function doFetch() {
  var d = 10;
  return d;
}
function multiplyAndAdd(a, b, c) {
  doFetch();
  return add(multiply(a, b), c);
}
function add(a, b) {
  return a + b;
}
function addAndMultiply(a, b, c) {
  return multiply(add(a, b), c);
}
const module_StrClass = "_module_StrClass_38ixv_9";
const module_StrClass1 = "_module_StrClass1_38ixv_13";
const module_StrClass2 = "_module_StrClass2_38ixv_17";
const css1_module = {
  module_StrClass,
  module_StrClass1,
  module_StrClass2
};
function About() {
  const [userz, setUserz] = useState([]);
  const doLoad = async () => {
    console.log("in About.jsx, doLoad No 1");
    await axios.get("/api/workoutsx/testx").then(
      (res) => {
        console.log("in About.jsx, in doLoad, /api/workoutsx/testx res.data = ", res.data);
      }
    ).catch(
      (err) => {
        console.log("catch err = ", err);
      }
    );
    console.log("in About.jsx, doLoad No 2");
    await axios.get("/api/workoutsx/testx").then(
      (res) => {
        console.log("in About.jsx, in doLoad, /api/workoutsx/testx res.data = ", res.data);
      }
    ).catch(
      (err) => {
        console.log("catch err = ", err);
      }
    );
    console.log("in About.jsx, doLoad No 3");
    await axios.get("/test1").then(
      (res) => {
        console.log("in About.jsx, in doLoad, /test1 res.data  json(res.data)= ", json(res.data.body));
      }
    ).catch(
      (err) => {
        console.log("catch err of /api/workoutsx/testx= ", err);
      }
    );
    console.log("in About.jsx, doLoad No 4");
    await axios.get("/api/workoutsx/testx").then(
      (res) => {
        console.log("in About.jsx, in doLoad, /test1 res.data = ", res.data);
      }
    ).catch(
      (err) => {
        console.log("catch err of test1= ", err);
      }
    );
    console.log("in About.jsx, doLoad No 5");
    await axios.get("/api/workouts/test3").then(
      (res) => {
        console.log("in About.jsx,  doLoad no5, /api/workouts/test3 res.data = ", res.data);
      }
    ).catch(
      (err) => {
        console.log("catch err of test1= ", err);
      }
    );
  };
  useEffect(() => {
    doLoad();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "About" }),
    /* @__PURE__ */ jsx("h4", { children: "start of userz display" }),
    userz.map(
      (usar) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { children: usar.name }),
        /* @__PURE__ */ jsx("p", { children: usar.age })
      ] }, usar.id)
    ),
    /* @__PURE__ */ jsx("h4", { children: "end of userz display" }),
    /* @__PURE__ */ jsx("h4", { className: "strClass", children: "using strClass from   app.css  inside About pagee" }),
    /* @__PURE__ */ jsx("h4", { className: module_StrClass, children: "using module_StrClass within curly brackets  inside About pagee" }),
    /* @__PURE__ */ jsx("h4", { className: module_StrClass1, children: "using module_StrClass1 hhhhhhhhhh  inside About pagee" }),
    /* @__PURE__ */ jsx("h4", { className: module_StrClass2, children: "using module_StrClass1 hhhhhhhhhh  inside About pagee" }),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
function Env() {
  let msg = "default message here in Env";
  try {
    msg = process.env.MY_CUSTOM_SECRET || msg;
  } catch {
  }
  return /* @__PURE__ */ jsx("h1", { children: msg });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Env
}, Symbol.toStringTag, { value: "Module" }));
function Error404$1() {
  let msg = "default message inside Error404";
  try {
    msg = process.env.MY_CUSTOM_SECRET || msg;
  } catch {
  }
  return /* @__PURE__ */ jsx("h1", { children: msg });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Error404$1
}, Symbol.toStringTag, { value: "Module" }));
const url$1 = "https://api.github.com/users";
const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url$1);
    const users2 = await response.json();
    setUsers(users2);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h3", { children: "github users" }),
    /* @__PURE__ */ jsx("ul", { className: "users", children: users.map((user) => {
      const { id, login, avatar_url, html_url } = user;
      return /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("img", { src: avatar_url, alt: login }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { children: login }),
          /* @__PURE__ */ jsx("a", { href: html_url, className: "strClass", children: "profile" })
        ] })
      ] }, id);
    }) })
  ] });
};
function Extra() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Extra" }),
    /* @__PURE__ */ jsx(UseEffectFetchData, {}),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Extra
}, Symbol.toStringTag, { value: "Module" }));
const WorkoutsContext = createContext();
const workoutsReducer = (state, action) => {
  console.log("WorkoutContext, state = ", state);
  console.log("WorkoutContext, action = ", action);
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload };
    case "CREATE_WORKOUT":
      return { workouts: [action.payload, ...state.workouts] };
    case "DELETE_WORKOUT":
      return { workouts: state.workouts.filter((w) => w._id !== action.payload._id) };
    case "UPDATE_WORKOUT":
      return { workouts: [...state.workouts] };
    default:
      return state;
  }
};
const WorkoutsContextProvider = ({ children }) => {
  console.log("in context/WorkoutsContext.jsx WorkoutsContextProvider pre useReducer(workoutsReducer,{workouts: null })");
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });
  console.log("in context/WorkoutsContext.jsx WorkoutsContextProvider post useReducer(workoutsReducer,{workouts: null })");
  return /* @__PURE__ */ jsx(WorkoutsContext.Provider, { value: { ...state, dispatch }, children });
};
const useWorkoutsContext = () => {
  console.log("in hooks/useWorkoutsContext.jsx/useWorkoutsContext   pre useContext(");
  const context = useContext(WorkoutsContext);
  console.log("in hooks/useWorkoutsContext.jsx/useWorkoutsContext post useContext(");
  if (!context) {
    throw Error("aaa use context only in designated components");
  }
  return context;
};
const UpdateWorkoutForm = ({ workout, doUpdate, setDoUpdate }) => {
  console.log("in UpdateWorkoutForm  workout = ", workout);
  console.log("in UpdateWorkoutForm  workout._id = ", workout._id);
  const { dispatch } = useWorkoutsContext();
  const [wout, setWout] = useState(workout);
  const [title, setTitle] = useState(workout.title);
  const [reps, setReps] = useState(workout.reps);
  const [load, setLoad] = useState(workout.load);
  const [idxx, setIdxx] = useState(workout._id);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setWout(wout.title = title, wout.load = load, wout.reps = reps);
    const response = await fetch(
      "/api/workout/" + idxx,
      {
        method: "PATCH",
        //body: JSON.stringify(workout),                           
        body: JSON.stringify({ title, load, reps }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log("affffter response");
    const json2 = await response.json();
    console.log("const json = ", json2);
    if (!response.ok) {
      setError(json2.error);
      console.log(" CreateWorkoutForm  json = ", json2);
      setEmptyFields(json2.emptyFields);
      console.log("CreateWorkoutForm json.emptyFields = ", json2.emptyFields);
      console.log("CreateWorkoutForm  emptyFields = ", emptyFields);
      console.log("CreateWorkoutForm error in adding entry, CreateWorkoutForm ", error);
    } else {
      console.log("UpdateWorkoutForm  response.ok");
      setEmptyFields([]);
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      dispatch({ type: "UPDATE_WORKOUT", payload: json2 });
      console.log("in UpdateWorkoutForm, patched, possibly. json =", json2);
      setDoUpdate(false);
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("form", { className: "create", children: [
    /* @__PURE__ */ jsx("h3", { children: "update an entry" }),
    /* @__PURE__ */ jsx("label", { children: " Exercise title" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        onChange: (e) => setTitle(e.target.value),
        value: title,
        className: emptyFields.includes("title") ? "error" : " "
      }
    ),
    /* @__PURE__ */ jsx("label", { children: " Load in kg: " }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "number",
        onChange: (e) => setLoad(e.target.value),
        value: load,
        className: emptyFields.includes("load") ? "error" : " "
      }
    ),
    /* @__PURE__ */ jsx("label", { children: " Reps " }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "number",
        onChange: (e) => setReps(e.target.value),
        value: reps,
        className: emptyFields.includes("reps") ? "error" : " "
      }
    ),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "btn", onClick: handleSubmit, children: "submit form" }),
    error && /* @__PURE__ */ jsx("div", { className: "error", children: error })
  ] }) });
};
const WorkoutDisplayDetails = ({ workout }) => {
  const [doUpdate, setDoUpdate] = useState(false);
  const { dispatch } = useWorkoutsContext();
  const handleClickDelete = async () => {
    const response = await fetch("/api/workout/" + workout._id, { method: "DELETE" });
    const json2 = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json2 });
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "workout-details", children: [
    /* @__PURE__ */ jsx("h4", { children: "inside start WorkoutDisplayDetails.js" }),
    /* @__PURE__ */ jsx("h4", { children: workout.title }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "load in kg: " }),
      workout.load
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Reps: " }),
      workout.reps
    ] }),
    /* @__PURE__ */ jsx("p", { children: workout.createdAt }),
    /* @__PURE__ */ jsx("button", { onClick: handleClickDelete, children: "delete" }),
    /* @__PURE__ */ jsx("button", { onClick: () => setDoUpdate(true), children: "setDoUpdate" }),
    doUpdate && /* @__PURE__ */ jsx(UpdateWorkoutForm, { workout, doUpdate, setDoUpdate }, workout._id),
    /* @__PURE__ */ jsx("h4", { children: "inside end WorkoutDisplayDetails.js" })
  ] }) });
};
const CreateWorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    await fetch("/api/workout");
    const response = await fetch(
      "/api/workout",
      {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log("affffter response");
    const json2 = await response.json();
    console.log("const json = ", json2);
    if (!response.ok) {
      setError(json2.error);
      console.log(" CreateWorkoutForm  json = ", json2);
      setEmptyFields(json2.emptyFields);
      console.log("CreateWorkoutForm json.emptyFields = ", json2.emptyFields);
      console.log("CreateWorkoutForm  emptyFields = ", emptyFields);
      console.log("CreateWorkoutForm error in adding entry, CreateWorkoutForm ", error);
    } else {
      setEmptyFields([]);
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      dispatch({ type: "CREATE_WORKOUT", payload: json2 });
      console.log("in WorkoutForm, new entry added. json =", json2);
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("form", { className: "create", children: [
    /* @__PURE__ */ jsx("h3", { children: "add a new entry" }),
    /* @__PURE__ */ jsx("label", { children: " Exercise title" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        onChange: (e) => setTitle(e.target.value),
        value: title,
        className: emptyFields.includes("title") ? "error" : " "
      }
    ),
    /* @__PURE__ */ jsx("label", { children: " Load in kg: " }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "number",
        onChange: (e) => setLoad(e.target.value),
        value: load,
        className: emptyFields.includes("load") ? "error" : " "
      }
    ),
    /* @__PURE__ */ jsx("label", { children: " Reps " }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "number",
        onChange: (e) => setReps(e.target.value),
        value: reps,
        className: emptyFields.includes("reps") ? "error" : " "
      }
    ),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "btn", onClick: handleSubmit, children: "submit form" }),
    error && /* @__PURE__ */ jsx("div", { className: "error", children: error })
  ] }) });
};
const url = "http://localhost:5173/api/workout";
function GetWorkouts() {
  useState("");
  console.log("in GetWorkouts  pre useWorkoutsContext");
  const { workouts, dispatch } = useWorkoutsContext();
  console.log("in GetWorkouts  workoutsx = ", workouts);
  console.log("in GetWorkouts  post useWorkoutsContext");
  useEffect(() => {
    getAllWorkouts();
  }, []);
  const getAllWorkouts = async () => {
    console.log("in GetWorkouts/getAllWorkouts first line");
    console.log("url = ", url);
    const response = await fetch(url);
    const json2 = await response.json();
    console.log("in getAllWorkouts, response = ", response);
    if (response.ok) {
      console.log("in GetWorkouts, before dispatch is invoked. json =", json2);
      dispatch({ type: "SET_WORKOUTS", payload: json2 });
      console.log("in getAllWorkouts, workouts = ", workouts);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "GetWorkouts" }),
    /* @__PURE__ */ jsx("h4", { children: "iiiiiiiinside GetWorkouts" }),
    /* @__PURE__ */ jsxs("div", { className: "workouts", children: [
      /* @__PURE__ */ jsx("h4", { children: "beginning inside GetWorkouts.jsx" }),
      workouts && workouts.map(
        (workout) => (
          // ie only fires if workouts is positive 
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: workout.title }) }, workout._id)
        )
      ),
      /* @__PURE__ */ jsx("h4", { children: "ending inside GetWorkouts.jsx" }),
      /* @__PURE__ */ jsx(CreateWorkoutForm, {})
    ] }),
    "   ",
    /* @__PURE__ */ jsxs("div", { className: "workouts", children: [
      /* @__PURE__ */ jsx("h4", { children: "beginning loop to GetWorkouts/WorkoutDisplyDetails" }),
      workouts && workouts.map(
        (workout) => (
          // ie only fires if workouts is positive 
          /* @__PURE__ */ jsx(WorkoutDisplayDetails, { workout }, workout._id)
        )
      ),
      /* @__PURE__ */ jsx("h4", { children: "end loop to GetWorkouts/WorkoutDisplyDetails" })
    ] }),
    "   "
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GetWorkouts
}, Symbol.toStringTag, { value: "Module" }));
function Home$1() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Home" }),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home$1
}, Symbol.toStringTag, { value: "Module" }));
const pages = /* @__PURE__ */ Object.assign({ "./pages/About.jsx": __vite_glob_0_0, "./pages/Env.jsx": __vite_glob_0_1, "./pages/Error404.jsx": __vite_glob_0_2, "./pages/Extra.jsx": __vite_glob_0_3, "./pages/GetWorkouts.jsx": __vite_glob_0_4, "./pages/Home.jsx": __vite_glob_0_5 });
console.log("in app.jsx, pages, pre Object.keys", pages);
const routes = Object.keys(pages).map(
  (path) => {
    const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
    return {
      name,
      path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
      component: pages[path].default
    };
  }
);
const index = routes.findIndex((route) => route.name == "Home");
const Home = routes[index];
routes.splice(index, 1);
routes.splice(0, 0, Home);
const index2 = routes.findIndex((route) => route.name == "Error404");
const Error404 = routes[index2];
Error404.path = "/*";
routes.splice(index2, 1);
routes.push(Error404);
routes.length;
console.log("in App, after creation of new element route3   routes = ", routes);
function App() {
  console.log("in app.jsx, App() pre return  ");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: routes.map(
      ({ name, path }) => {
        if (name !== "Error404" && name !== "xxxUpdate") {
          return /* @__PURE__ */ jsx("li", { style: { color: "red" }, children: /* @__PURE__ */ jsx(Link, { to: path, style: { color: "green" }, children: name }) }, path);
        }
      }
    ) }) }),
    /* @__PURE__ */ jsx(Routes, { children: routes.map(({ path, component: RouteComp }) => {
      console.log("in App.jsx, Routes, routes.map.  path = ", path);
      console.log("in App.jsx, Routes, routes.map. RouteComp = ", RouteComp);
      if (path == "/test1" || path == "/api/workoutsx/testx")
        return /* @__PURE__ */ jsx(Route, { path }, path);
      else
        return /* @__PURE__ */ jsx(Route, { path, element: /* @__PURE__ */ jsx(RouteComp, {}) }, path);
    }) })
  ] });
}
function render(url2, context) {
  console.log("in entry-server.jsx, url/location = ", url2);
  console.log("in entry-server.jsx, context =", context);
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url2, context, children: /* @__PURE__ */ jsx(WorkoutsContextProvider, { children: /* @__PURE__ */ jsx(App, {}) }) })
  );
}
export {
  render
};
