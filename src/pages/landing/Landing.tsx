import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";

const Landing = () => {
    return (
        <div className="Landing text-center">
            {/* navbar  */}
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Landing