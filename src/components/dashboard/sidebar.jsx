import { NavLink } from "react-router-dom";
import { sidebarConfig } from "../../data";

const Sidebar = () => {
  return (
    <section className="p-4">
      <h2 className="tracking-widest text-xs text-gray-300 mb-2 font-semibold uppercase">
        Component
      </h2>
      <ul className="ml-2 grid gap-2">
        {sidebarConfig.map((item) => (
          <li key={item.id}>
            <NavLink
              className={({ isActive }) =>
                `no-underline ${isActive ? "font-bold text-blue-500" : "font-light"}`
              }
              to={`${item.link}`}
            >
              {item.component}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
