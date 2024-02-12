import { useState } from "react";

/* eslint-disable react/prop-types */
function SearchBar({ data, setFilteredData }) {
    const [error, setError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        let searchValue = e.currentTarget.elements.searchInput.value;

        for (let i = 0; i < data.length; i++) {
            if (
                data[i].name.common.toLowerCase().trim() ===
                searchValue.toLowerCase().trim()
            ) {
                setFilteredData([data[i]]);
                setError(false);
                e.currentTarget.elements.searchInput.value = "";
                return;
            } else {
                e.currentTarget.elements.searchInput.value = "";
                setError(true);
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center items-center sm:w-[30%]"
        >
            <div
                className={
                    error
                        ? "flex items-center mt-6 sm:mt-0 bg-secondary w-full rounded-lg shadow shadow-red-500"
                        : "flex items-center mt-6 sm:mt-0 bg-secondary w-full rounded-lg shadow"
                }
            >
                <button type="submit" className="h-full px-4 text-gray-300 ">
                    <i
                        className={
                            error
                                ? "fa-solid fa-magnifying-glass text-red-500"
                                : "fa-solid fa-magnifying-glass"
                        }
                    ></i>
                </button>
                <input
                    type="text"
                    className="p-4 w-full text-primary bg-secondary outline-none rounded-lg"
                    placeholder={
                        error
                            ? "Please double check your spelling"
                            : "Search for a country..."
                    }
                    name="search-input"
                    id="searchInput"
                />
            </div>
        </form>
    );
}

export default SearchBar;
