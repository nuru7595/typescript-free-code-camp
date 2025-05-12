import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./components/Info";
import { useState } from "react";
import Home from "./components/Home";

export default function App() {
    const [active, setActive] = useState("info");
    const renderedComponent = () => {
        switch (active) {
            case "home":
                return <Home />;
            case "info":
                return <Info />;
            default:
                return <Info />;
        }
    };

    return (
        <>
            <Header text="TypeScript" active={active} setActive={setActive} />
            <main className="container">{renderedComponent()}</main>
            <Footer name="Nuru" />
        </>
    );
}
