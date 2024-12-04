import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./components/Header/Home.jsx";
import AllReviews from "./components/Reviews/Allreviews.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import AddReview from "./components/Reviews/AddReview.jsx";
import UpdateReview from "./components/Reviews/UpdateReview.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allReviews',
        element: <AllReviews></AllReviews>
      },
      { path: "login",
        element: <Login></Login>
      },
      { path: "register",
        element: <Register></Register>
      },
      {
        path: 'addReview',
        element: <AddReview></AddReview>
      },
      {
        path:'updateReview',
        element: <UpdateReview></UpdateReview>
      }
    ],
  },
]);



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
