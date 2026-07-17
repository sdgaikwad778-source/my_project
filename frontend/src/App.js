import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './routes';

const approutes = createBrowserRouter(routes)

function App() {
  return (
    <RouterProvider router={approutes}/>
  );
}

export default App;