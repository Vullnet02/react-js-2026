
import About from "../components/About";
import Home from "../components/Slider";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Product from "../components/Product";
import Text from "../components/Text";
import Card from "../components/Card";
import CardDetajet from "../components/CardDetajet";
import OfertaSpeciale from "../components/OfertaSpeciale";
import ProduktetGrid from "../components/ProduktetGrid";

function HomePage() {
    return (
        <div>
            
            <Navbar />
            <Home />
            <ProduktetGrid />
            <OfertaSpeciale />

            
        </div>
    );
}
    
export default HomePage;