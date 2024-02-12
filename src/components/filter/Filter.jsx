/* eslint-disable react/prop-types */
import { useState } from "react";
import ListItem from "./ListItem";

function Filter({ data, setFilteredData }) {
    const [open, setOpen] = useState(false);
    const [regionText, setRegionText] = useState("Filter by Region");
    const filteredData = [];

    function changeRegionText(e) {
        setFilteredData([data]);
        for (let i = 0; i < data.length; i++) {
            if (data[i].continents == e.target.textContent) {
                filteredData.push(data[i]);
                setRegionText(e.target.textContent);
                setFilteredData(filteredData);
                setOpen(!open);
            }
        }
    }

    return (
        <div className="w-full sm:w-auto my-7 sm:my-0 relative justify-self-end">
            <button
                onClick={() => setOpen(!open)}
                className="p-4 r-5 rounded-lg shadow w-[50%] sm:w-full focus:none outline:none flex items-center justify-between bg-secondary"
            >
                <p className="text-primary">{regionText}</p>
                <i className="fa-solid fa-chevron-down ml-6"></i>
            </button>
            <ul
                className={`bg-secondary shadow w-[50%] sm:w-full mt-2 rounded-lg p-4 absolute ${
                    open ? "block" : "hidden"
                }`}
            >
                <ListItem
                    region="Africa"
                    onClick={(e) => changeRegionText(e)}
                />
                <ListItem
                    region="Antarctica"
                    onClick={(e) => changeRegionText(e)}
                />
                <ListItem region="Asia" onClick={(e) => changeRegionText(e)} />
                <ListItem
                    region="Europe"
                    onClick={(e) => changeRegionText(e)}
                />
                <ListItem
                    region="Oceania"
                    onClick={(e) => changeRegionText(e)}
                />
                <ListItem
                    region="North America"
                    onClick={(e) => changeRegionText(e)}
                />
                <ListItem
                    region="South America"
                    onClick={(e) => changeRegionText(e)}
                />
            </ul>
        </div>
    );
}

export default Filter;
