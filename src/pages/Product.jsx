import ProductComponent from "../components/Product";
import Navbar from "../components/Navbar";
import products from "../product";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="produkti">
        {products.map((p) => (
          <ProductComponent
            key={p.id}
            id={p.id}
            name={p.name}
            description={p.description}
            img={p.img}
            saleprice={p.saleprice}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;