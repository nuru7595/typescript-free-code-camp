export default function Header({ text, active, setActive }) {
    const nav = ["home", "info"];

    return (
        <header className="flex justify-between items-center gap-3">
            <h1>{text}</h1>
            <nav className="flex justify-around items-center text-xl">
                {nav.map((item, index) => {
                    return (
                        <span
                            key={index}
                            className={active === item ? "active" : null}
                            onClick={() => {setActive(item)}}
                        >
                            {item}
                        </span>
                    );
                })}
            </nav>
        </header>
    );
}
