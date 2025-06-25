export default function Contact({ email }) {
    return (
        <section>
            <h2 className="section-title">Contact</h2>
            <div className="section-container">
                <p className="text-center py-6 md:text-lg">
                    You can reach me at:{" "}
                    <a className="underline font-bold" href={`mailto:${email}`}>
                        {email}
                    </a>
                </p>
            </div>
        </section>
    );
}
