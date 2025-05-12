export default function Footer({ name }) {
    const year = new Date().getFullYear();
    return (
        <footer className="py-3">
            <p>
                &copy; {year} {name}, All Rights Reserved.
            </p>
        </footer>
    );
}
