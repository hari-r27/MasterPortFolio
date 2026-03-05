import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa";

function Navbar() {

  const { toggleTheme } = useContext(ThemeContext);

  return (

    <div className="flex justify-end mb-10">

      <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full"
      >
        <FaMoon />
      </button>

    </div>
  );
}

export default Navbar;