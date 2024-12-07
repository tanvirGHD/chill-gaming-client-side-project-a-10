import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/footer/Footer";


const Layout = () => {
    return (
        <div className="bg-pink-100">
        <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
        <div><Footer></Footer></div>
        </div>
    );
};
7
export default Layout;