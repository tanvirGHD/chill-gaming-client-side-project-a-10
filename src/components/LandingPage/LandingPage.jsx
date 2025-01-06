import Faq from "../FAQ/Faq";
import Home from "../Header/Home";
import TopRateGame from "./TopRateGame";

const LandingPage = () => {
    return (
        <div>
            <Home></Home>
            <TopRateGame></TopRateGame>
            <Faq></Faq>
        </div>
    );
};

export default LandingPage;