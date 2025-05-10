export default function Header({ text }: { text: string }) {
    return (
        <header>
            <h1 className="tracking-widest underline">{text}</h1>
            <nav className="mt-1 flex justify-between items-center gap-2">
                <a href="./">
                    Home
                </a>
                <span>Free Code Camp</span>
                <a href="./info">
                    Info
                </a>
            </nav>
        </header>
    );
}
