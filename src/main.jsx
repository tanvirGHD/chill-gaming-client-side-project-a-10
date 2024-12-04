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
import MyReviews from "./components/Reviews/MyReviews.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
// import ReviewDetails from "./components/Reviews/ReviewDetails.jsx";



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
        element: <AllReviews></AllReviews>,
        loader: () => fetch('http://localhost:5000/review')
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
      },
      {
        path: '/myReviews',
        element: <MyReviews></MyReviews>,
        loader: ()=> fetch('http://localhost:5000/users')
      }
      // {
      //   path: '/allReviews/reviewDetails/:id',
      //   element: <ReviewDetails></ReviewDetails>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`),
      // }
    ],
  },
]);



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
