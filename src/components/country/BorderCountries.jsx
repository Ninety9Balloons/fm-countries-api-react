/* eslint-disable react/prop-types */
function BorderCountries({ item, data, setCountry }) {
    let fullName;
    let selectedCountry;

    // Loop through data to find a match for the item's abbreviation name. If there's a match, return the country's full name
    for (let i = 0; i < data.length; i++) {
        if (item === data[i].cca3) {
            fullName = data[i].name.common;
            selectedCountry = data[i];
        }
    }

    return (
        <li
            className="px-4 py-2 shadow m-2 cursor-pointer bg-secondary text-primary rounded hover:shadow-lg"
            onClick={() => setCountry(selectedCountry)}
        >
            {fullName}
        </li>
    );
}

export default BorderCountries;
