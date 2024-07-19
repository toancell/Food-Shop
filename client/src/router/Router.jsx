import Main from "../layout/Main.jsx";
import { createBrowserRouter } from "react-router-dom";
import { Home, Shop, SignUp } from "../pages/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Shop />,
      },
      
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  }
]);

export default router;
