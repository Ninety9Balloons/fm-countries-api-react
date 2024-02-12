/* eslint-disable react/prop-types */

import { Toggle } from "./Toggle";

function Header({ data, setFilteredData, setCountry }) {
    function resetPage() {
        setFilteredData(data);
        setCountry("");
    }

    return (
        <div className="flex justify-between w-full bg-secondary py-10 sm:py-6 px-6 sm:px-10 shadow-md">
            <h1
                onClick={() => resetPage()}
                className="font-bold text-primary text-xl md:text-3xl cursor-pointer"
            >
                Where in the world?
            </h1>

            <Toggle />

            {/* <button>
                <i className="fa-regular fa-moon mr-1"></i>
                Dark Mode
            </button> */}
        </div>
    );
}

export default Header;
