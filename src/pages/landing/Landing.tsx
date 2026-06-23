import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import HomeSection from "../../components/sections/homesection/HomeSection";
import AboutSection from "../../components/sections/aboutsection/AboutSection";
import ContactSection from "../../components/sections/contactsection/ContactSection";
import RoomsSection from "../../components/sections/roomsection/RoomSection";
import FoodSection from "../../components/sections/foodsection/Foodsection";
import TopScrollButton from "../../components/topScrollutton/TopScrollButton";
import ReviewSection from "../../components/sections/reviewSection/ReviewSection";

const Landing = () => {
    return (
        <div className="Landing text-center">
            {/* navbar  */}
            <Navbar />
            <div id="home">
                <HomeSection />
            </div>
            <div data-aos="fade-up" id="about">
                <AboutSection />
            </div>
            <div data-aos="fade-up" id="rooms">
                <RoomsSection />
            </div>
            <div data-aos="fade-up" id="food">
                <FoodSection />
            </div>
            <div data-aos="fade-up" id="reviews">
                <ReviewSection />
            </div>
            <div data-aos="fade-up" id="contact">
                <ContactSection />
            </div>
            <Footer />
            <TopScrollButton />
        </div>
    );
}

export default Landing