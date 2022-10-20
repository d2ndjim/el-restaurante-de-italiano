import './App.css';
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routesConfig from './config/routes';

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <div className="container">
      {routes}
      <ToastContainer />
    </div>
  );
}

export default App;
