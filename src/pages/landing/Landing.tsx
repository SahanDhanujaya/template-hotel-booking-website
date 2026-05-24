import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import HomeSection from "../../components/sections/homesection/HomeSection";
import AboutSection from "../../components/sections/aboutsection/AboutSection";
import ContactSection from "../../components/sections/contactsection/ContactSection";
import RoomsSection from "../../components/sections/roomsection/RoomSection";
import FoodSection from "../../components/sections/foodsection/Foodsection";

const Landing = () => {
    return (
        <div className="Landing text-center">
            {/* navbar  */}
            <Navbar />
            <div id="home">
                <HomeSection />
            </div>
            <div id="about">
                <AboutSection />
            </div>
            <div id="rooms">
                <RoomsSection />
            </div>
            <div id="food">
                <FoodSection />
            </div>
            <div id="contact">
                <ContactSection />
            </div>
            <Footer />
        </div>
    );
}

export default Landing