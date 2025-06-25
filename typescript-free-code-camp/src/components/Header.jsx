import { NavLink } from "react-router-dom";

export default function Header({ pageTitle, navItems }) {
    return (
        <header className="flex justify-between items-center gap-3">
            <h1>{pageTitle}</h1>
            <nav className="flex justify-around items-center text-xl">
                {navItems.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                `px-4 select-none cursor-pointer hover:bg-sky-600 duration-100 py-3 capitalize ${
                                    isActive
                                        ? "bg-sky-600 border-y border-white"
                                        : ""
                                }`
                            }
                        >
                            {item.title}
                        </NavLink>
                    );
                })}
            </nav>
        </header>
    );
}
