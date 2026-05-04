
import About from "../components/About";
import Home from "../components/Slider";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Product from "../components/Product";
import Text from "../components/Text";
import Card from "../components/Card";
import CardDetajet from "../components/CardDetajet";

function HomePage() {
    return (
        <div>
            
            <Navbar />
            <Home />
            <Card/>
            <CardDetajet />
    

            
        </div>
    );
}
    
export default HomePage;