/* eslint-disable react/prop-types */
function ListItem({ region, onClick }) {
    return (
        <li
            onClick={onClick}
            className="mb-1 w-full text-primary hover:font-bold cursor-pointer"
        >
            <p>{region}</p>
        </li>
    );
}

export default ListItem;
