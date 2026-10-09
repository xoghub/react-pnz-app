import { useParams } from "react-router";

export default function ProductDetail() {
    const params = useParams();
    return (
        <div className="product-detail">
            <h1>Product Detail</h1>
            <p>This is the detail page for product ID: {params.id}</p>
            {params.addressId ? <p>Address ID: {params.addressId}</p> : null}
        </div>
    )
}