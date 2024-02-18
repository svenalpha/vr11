import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { WorkoutsContextProvider } from "./context/WorkoutContext.jsx";

ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <BrowserRouter>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </BrowserRouter>,
)
console.log('hydrated')
