import { useNavigate, Link } from "react-router-dom";
import Logo from "../common/logo";
import { searchConfig, socialConfig } from "../../data";
import { useState } from "react";

const Header = () => {
      const [query, setQuery] = useState("");
      const [filtered, setFiltered] = useState([]);
      const navigate = useNavigate();

      const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === "") {
      setFiltered([]);
    } else {
      const results = searchConfig.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(results);
    }
  };

  const handleSelect = (path) => {
    setQuery("");
    setFiltered([]);
    navigate(path);
  };
  return (
    <>
      <header className="lg:px-32 mx-auto fixed mb-20 top-0 left-0 right-0 z-50 bg-white py-4 px-3 flex flex-col gap-4 sm:flex-row sm:gap-0 justify-between items-center">
        <Logo className="text-xl" />
        <nav className="relative w-full max-w-xs">
          <input
            placeholder="Search components here ..."
            value={query}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded w-full shadow"
          />
          {filtered.length > 0 && (
            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow">
              {filtered.map((item) => (
                <li
                  key={item.name}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(item.path)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      <Link to={socialConfig.github} className="no-underline">
        <div className="border bg-gray-100 mt-40 sm:mt-20 border-gray-300 text-center py-2 cursor-pointer">
          <span className="px-4 sm:px-0">
            Loving the copy-paste? Show some love and star us on GitHub ⭐
          </span>
        </div>
      </Link>
    </>
  );
};

export default Header;
