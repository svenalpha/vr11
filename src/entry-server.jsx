import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from './App'
import { WorkoutsContextProvider } from "./context/WorkoutContext.jsx";

export function render(url, context) {
  console.log("in entry-server.jsx, url/location = ",url);
  console.log("in entry-server.jsx, context =",context);

  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <WorkoutsContextProvider>
         <App />
      </WorkoutsContextProvider>
    </StaticRouter>,
  )
}
