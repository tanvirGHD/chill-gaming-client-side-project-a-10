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
import ReviewDetails from "./components/Reviews/ReviewDetails.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import WatchList from "./components/watchList/WatchList.jsx";
import UpcomingGames from "./components/More/UpcomingGames.jsx";
import PopularGames from "./components/More/PopularGames.jsx";
import LatestReviews from "./components/More/LatestReviews.jsx";
import Error from "./components/error/Error.jsx";




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
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {
        path:'updateReview',
        element: <UpdateReview></UpdateReview>
      },
      {
        path: '/myReviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/review')
      },
      {
        path:'/watchList',
        element:<PrivateRoute><WatchList></WatchList></PrivateRoute>
      },
      {
        path: '/details/:id',
        element:<PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/review/${params.id}`)
      },
      {
        path: '/upcomingGames',
        element:<UpcomingGames></UpcomingGames>
      },
      {
        path: '/latestReviews',
        element:<LatestReviews></LatestReviews>
      },
      {
        path: '/popularGames',
        element:<PopularGames></PopularGames>
      },
      {
        path:'*',
        element:<Error></Error>
      }
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
