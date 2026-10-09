import { useParams } from "react-router";

export default function Image() {
    const params = useParams();
    return (
      <div className="image-container">
        <h1>Image Component</h1>
        <p>Image *: {params['*']}</p>
        {/* <img src={`https://via.placeholder.com/300?text=${params.id}`} alt="Placeholder" /> */}
      </div>
    );
}