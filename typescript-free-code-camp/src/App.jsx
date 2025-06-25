import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Edit Your Web Details Here;
const pageTitle = "TypeScript";
const ownerName = "Nuru";
const contactEmail = "nuru7595@gmail.com";
const navItems = [
    { title: "Home", path: "/", element: <Home /> },
    //
    // Add Other Pages Here;
    //
    { title: "About", path: "/about", element: <About /> },
    {
        title: "Contact",
        path: "/contact",
        element: <Contact email={contactEmail} />,
    },
];

export default function App() {
    return (
        <>
            <Header pageTitle={pageTitle} navItems={navItems} />
            <main className="container">
                <Routes>
                    {navItems.map((item, index) => (
                        <Route
                            key={index}
                            path={item.path}
                            element={item.element}
                        />
                    ))}
                    <Route
                        path="*"
                        element={
                            <section>
                                <h4 className="py-16 text-center">
                                    Page Not Found...
                                </h4>
                            </section>
                        }
                    />
                </Routes>
            </main>
            <Footer owner={ownerName} />
        </>
    );
}
