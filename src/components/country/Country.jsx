import BorderCountries from "./BorderCountries";

/* eslint-disable react/prop-types */
function Country({ country, setCountry, data }) {
    return (
        <div className="p-6 w-full min-h-screen">
            {/* <!-- Back button --> */}
            <button
                className="shadow px-5 py-1 bg-secondary text-primary mt-4 mb-10 rounded-xs"
                onClick={() => setCountry("")}
            >
                <i className="fa-solid fa-arrow-left"></i> Back
            </button>

            {/* <!-- Item container --> */}
            <div className="flex flex-col sm:flex-row w-full sm:items-center">
                {/* <!-- Image --> */}
                <div className="flex-1 mr-10 object-cover">
                    <img
                        id="flag-image"
                        src={country.flags?.svg}
                        alt={country.name?.common}
                        className="w-full my-4 shadow object-cover"
                    />
                </div>

                <div className="flex-1 sm:p-10">
                    {/* <!-- Info container --> */}
                    <div className="w-full flex-wrap flex flex-col text-primary sm:flex-row items-start sm:items-center justify-between">
                        <div>
                            {/* <!-- Country name --> */}
                            <h2 className="text-2xl sm:text-3xl font-bold my-4">
                                {country.name?.common}
                            </h2>
                            {/* <!-- Native name --> */}
                            <p
                                className={
                                    country.name.nativeName
                                        ? "font-bold my-2"
                                        : "hidden"
                                }
                            >
                                Native Name:
                                <span className="font-normal">
                                    {" "}
                                    {!country.name.nativeName
                                        ? "test"
                                        : Object.values(
                                              country.name.nativeName
                                          )[0].common}
                                </span>
                            </p>

                            {/* <!-- Population --> */}
                            <p className="font-bold my-2">
                                Population:{" "}
                                <span className="font-normal">
                                    {country.population?.toLocaleString("en", {
                                        useGrouping: true,
                                    })}
                                </span>
                            </p>

                            {/* <!-- Region --> */}
                            <p className="font-bold my-2">
                                Region:
                                <span className="font-normal">
                                    {" "}
                                    {country?.continents}
                                </span>
                            </p>

                            {/* <!-- Sub Region --> */}
                            <p
                                className={
                                    country.subregion
                                        ? "font-bold my-2"
                                        : "hidden"
                                }
                            >
                                Sub Region:
                                <span className="font-normal">
                                    {" "}
                                    {country?.subregion}
                                </span>
                            </p>

                            {/* <!-- Capital --> */}
                            <p
                                className={
                                    country.captial
                                        ? "font-bold my-2"
                                        : "hidden"
                                }
                            >
                                Capital:
                                <span className="font-normal">
                                    {" "}
                                    {country?.capital}
                                </span>
                            </p>
                        </div>

                        <div>
                            {/* <!-- Domain --> */}
                            <p className="font-bold my-2 mt-6">
                                Top Level Domain:
                                <span className="font-normal">
                                    {" "}
                                    {country?.tld}
                                </span>
                            </p>

                            {/* <!-- Currency --> */}
                            <p
                                className={
                                    country.currencies
                                        ? "font-bold my-2"
                                        : "hidden"
                                }
                            >
                                Currencies:{" "}
                                <span className="font-normal">
                                    {!country.currencies
                                        ? "test"
                                        : Object.values(country.currencies)[0]
                                              .name}
                                </span>
                            </p>

                            {/* <!-- Languages --> */}
                            <p
                                className={
                                    country.languages
                                        ? "font-bold my-2 w-full"
                                        : "hidden"
                                }
                            >
                                Languages:{" "}
                                <span className="font-normal ">
                                    {!country.languages
                                        ? "test"
                                        : Object.values(country.languages).join(
                                              ", "
                                          )}
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* <!-- Border countries --> */}
                    <div className={country.borders ? "block" : "hidden"}>
                        <h2 className="font-bold my-2 mt-6 text-primary">
                            Border Countries:
                        </h2>
                        <ul className="flex flex-wrap">
                            {country.borders?.map((item) => (
                                <BorderCountries
                                    setCountry={setCountry}
                                    key={item}
                                    item={item}
                                    data={data}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Country;
