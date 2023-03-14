import React, { useState } from "react";

const Search = ({ updateFilter ,placeholder }) => {
    const [input, setInput] = useState("");

    const handleSearch = (e) => {
        setInput(e.target.value);
        updateFilter(e.target.value);
    };
    return (
        <div className="input-group mt-10">
            <input
                type="search"
                className="form-control rounded"
                placeholder={placeholder}
                aria-label={placeholder}
                aria-describedby="search-addon"
                onChange={handleSearch}
                value={input}
            />
        </div>
    );
};

export default Search;