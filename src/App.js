import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "home", element: <Home /> },
  { path: "portfolio", element: <Portfolio /> },
  { path: "about", element: <About /> },
  { path: "*", element: <h2 className="vh-100  d-flex align-content-center justify-content-center align-items-center">Error 404</h2> }

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
