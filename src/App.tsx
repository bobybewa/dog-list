import { renderRoutes } from 'react-router-config';
import { Switch } from 'react-router-dom'
import routes from './routes'
const App = () => {
  return (
    <>
      {/* <p>qwe</p> */}
      <Switch>{renderRoutes(routes)}</Switch>
    </>
  )
}

export default App;
