import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from './pages/HomePage';
import SingUp from './pages/SignUp';
import { BrowserRouter, createBrowserRouter, RouterProvider} from "react-router"
import router from './route';


function App() {
  return (
    <RouterProvider router={ router }/>
  );
}

export default App;
