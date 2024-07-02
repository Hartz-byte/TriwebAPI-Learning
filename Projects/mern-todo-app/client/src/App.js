import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Homepage";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/", element: <AddUser /> },
    { path: "/", element: <EditUser /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
