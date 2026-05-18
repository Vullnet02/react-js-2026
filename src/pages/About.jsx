import About from "../components/About";
import Product from "../components/Product";
import Misioni from "../components/Misioni";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
    return (
        <div>
            <Navbar />
            <About />
            <Misioni />
            <Footer/>
        </div>
    );
}

export default AboutPage;