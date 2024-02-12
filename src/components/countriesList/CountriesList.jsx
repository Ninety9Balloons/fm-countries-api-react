/* eslint-disable react/prop-types */
import CountryCard from "./CountryCard";
import "ldrs/ring";

function CountriesList({ data, loading, setCountry }) {
    function handleClick(item) {
        setCountry(item);
    }

    return (
        <div className="sm:mt-5 min-h-screen h-full">
            {loading ? (
                <div className="flex justify-center">
                    {/* Loading Spinner */}
                    <l-ring
                        size="40"
                        stroke="5"
                        bg-opacity="0"
                        speed="2"
                        color="black"
                    ></l-ring>
                </div>
            ) : (
                <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-3 sm:justify-between items-center sm:w-full">
                    {data.map((item) => (
                        <CountryCard
                            key={item.cca3}
                            handleClick={() => handleClick(item)}
                            image={item.flags.svg}
                            name={item.name.common}
                            pop={item.population}
                            region={item.region}
                            capital={item.capital}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CountriesList;
