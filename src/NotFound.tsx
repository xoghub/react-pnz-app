import { useParams } from "react-router";

export default function NotFound() {
    const params = useParams();
    return (
        <div className="not-found">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Path: {params['*']}</p>
        </div>
    )
}