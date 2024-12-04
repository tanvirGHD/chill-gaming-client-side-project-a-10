import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";


const Layout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;