import Pizza from "./components/Pizza";

export default function Home() {
    return (
        <>
            <section>
                <h3 className="section-title">Pizza Store</h3>
                <div className="section-container">
                    <Pizza />
                </div>
            </section>
            <section>
                <h4 className="section-title">Challenge: 4</h4>
                <div className="section-container">Loading Soon . . .</div>
            </section>
        </>
    );
}
