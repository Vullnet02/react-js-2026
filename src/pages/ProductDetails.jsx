import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import products from "../product";

function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product) return <p>Produkti nuk u gjet.</p>;

    return (
        <>
        <Navbar />
        <div className="product-details">
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Cmimi: ${product.saleprice}</p>
        </div>
        </>
    );
}

export default ProductDetails;