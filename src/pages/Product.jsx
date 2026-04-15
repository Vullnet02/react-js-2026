import ProductComponent from "../components/Product";
import Navbar from "../components/Navbar";
import OIP from "../assets/OIP.webp";

const products = [
  { id: 1, name: "Ledion Istrefi",      description: "Intel i7, 16GB RAM, 512GB SSD", img: OIP },
  { id: 2, name: "Wireless Mouse",  description: "Ergonomic, 2.4GHz, 12 months battery", img: OIP },
  { id: 3, name: "Mechanical Keyboard", description: "RGB, Cherry MX switches, TKL", img: OIP },
];

function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="produkti">
        {products.map((p) => (
          <ProductComponent
            key={p.id}
            name={p.name}
            description={p.description}
            img={p.img}
          />
        ))}
      </div>
    </>
  );
}

export default ProductPage;