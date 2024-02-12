/* eslint-disable react/prop-types */
function CountryCard(props) {
    return (
        <li
            onClick={props.handleClick}
            className="flex flex-col w-[80%] rounded bg-secondary shadow mb-10 sm:w-[25%] sm:max-w-[300px] sm:min-w-[300px] sm:h-[400px] hover:shadow-lg cursor-pointer"
        >
            <img
                src={props.image}
                className="rounded-t w-full sm:h-[50%] object-cover"
            />
            <div className="p-6 pb-10">
                <h2 className="text-2xl text-primary font-bold mb-3">
                    {props.name}
                </h2>
                <p className="mb-2">
                    <span className="font-bold text-primary">Population: </span>
                    <span className="text-primary">
                        {props.pop.toLocaleString("en", {
                            useGrouping: true,
                        })}
                    </span>
                </p>
                <p className="mb-2">
                    <span className="font-bold text-primary">Region:</span>
                    <span className="text-primary"> {props.region}</span>
                </p>
                <p className="mb-2">
                    <span className="font-bold text-primary">Capital:</span>
                    <span className="text-primary"> {props.capital}</span>
                </p>
            </div>
        </li>
    );
}

export default CountryCard;
