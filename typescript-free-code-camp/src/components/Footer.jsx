export default function Footer({ owner }) {
    const year = new Date().getFullYear();
    return (
        <footer className="py-3">
            <p>
                &copy; {year} {owner}, All Rights Reserved.
            </p>
        </footer>
    );
}
