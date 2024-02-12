import { useEffect, useState } from "react";
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import SearchBar from "./components/search/SearchBar";
import CountriesList from "./components/countriesList/countriesList";
import "./index.css";
import Country from "./components/country/Country";
import { ThemeProvider } from "./utils/themeContext";

function App() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setFilteredData(json);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, [setFilteredData]);

    return (
        <ThemeProvider>
            <Header
                data={data}
                setFilteredData={setFilteredData}
                setCountry={setCountry}
            />

            {/* Main Container */}
            <div className="w-screen sm:w-full sm:min-w-screen h-full bg-primary sm:flex sm:justify-between sm:items-center sm:my-0 p-4 sm:px-16 sm:py-6">
                {country !== "" ? (
                    <div className="h-full w-full sm:h-screen">
                        <Country
                            country={country}
                            setCountry={setCountry}
                            data={data}
                        />
                    </div>
                ) : (
                    <div className="w-full">
                        <div className="sm:flex sm:justify-between sm:w-full ">
                            <SearchBar
                                data={data}
                                setFilteredData={setFilteredData}
                            />
                            <Filter
                                data={data}
                                setFilteredData={setFilteredData}
                            />
                        </div>
                        <CountriesList
                            data={filteredData}
                            loading={loading}
                            setCountry={setCountry}
                        />
                    </div>
                )}
            </div>
        </ThemeProvider>
    );
}

export default App;
