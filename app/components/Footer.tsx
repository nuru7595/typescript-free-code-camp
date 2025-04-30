export default function Footer({ your_name, started_year }: { your_name: string; started_year: string }) {
    const current_year = new Date().getFullYear();
    return (
        <footer>
            <p>
                &copy; {started_year === current_year.toString() ? started_year : `${started_year} - ${current_year}`} {your_name}, All Rights Reserved.
            </p>
        </footer>
    );
}
