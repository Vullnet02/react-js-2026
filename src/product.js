import OIP from "./assets/OIP.webp";
import mobile from "./assets/mobile.webp";
import Scooter from "./assets/Scooter.webp";

const products = [
  { id: 1, name: "Lenovo Laptop",     description: "Intel i7, 16GB RAM, 512GB SSD", img: OIP, saleprice: 1299.99 },
  { id: 2, name: "Iphone 17 Pro Max", description: "2.4GHz, 12 months battery", img: mobile, saleprice: 999.99 },
  { id: 3, name: "Electric Scooter", description: "Eco-friendly, 20km range, 25km/h top speed", img: Scooter, saleprice: 299.99 },
  { id: 4, name: "Smart Watch", description: "Heart rate monitor, GPS, 7 days battery", img: "https://m.media-amazon.com/images/I/610LLQC8DhL._AC_SL1500_.jpg", saleprice: 199.99 }
  
];

export default products;
