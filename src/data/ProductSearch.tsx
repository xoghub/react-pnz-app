import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";


export default function ProductSearch() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [search, setSearch] = useState(searchParams.get("search") || "");

    function handleSearch() {
        if (search.trim() !== "") {
            navigate({
                pathname: "/data/products/search",
                search: `?search=${search}`,
            });
        }
    }

    return (
        <div className="search">
            <h1>Search Result Products</h1>
            <input 
                type="text" 
                placeholder="Search products..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <p>Result for "{searchParams.get("search")}"</p>
        </div>
    )
}