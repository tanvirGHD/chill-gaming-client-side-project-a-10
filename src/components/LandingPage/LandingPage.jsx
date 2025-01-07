import Faq from "../FAQ/Faq";
import Home from "../Header/Home";
import TopRateGame from "./TopRateGame";

const LandingPage = () => {
    return (
        <div>
            <Home></Home>
            <div className="w-11/12 mx-auto">
            <TopRateGame></TopRateGame>
            <Faq></Faq>
            </div>
        </div>
    );
};

export default LandingPage;