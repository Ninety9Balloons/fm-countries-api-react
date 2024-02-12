import { useContext } from "react";
import { ThemeContext } from "../../utils/themeContext";

export const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    function isDark() {
        return theme === "dark";
    }

    function toggleTheme(e) {
        setTheme(e.target.checked ? "dark" : "light");
    }

    return (
        <label className="text-primary">
            <input
                type="checkbox"
                checked={isDark()}
                onChange={(e) => toggleTheme(e)}
                className="hidden"
            />
            <i
                className={
                    theme === "light"
                        ? "fa-regular fa-moon mr-2"
                        : "fa-regular fa-sun mr-2"
                }
            ></i>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </label>
    );
};
