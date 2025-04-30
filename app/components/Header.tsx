export default function Header({ text }: { text: string }) {
    return (
        <header>
            <h1>{text}</h1>
            <nav className="flex justify-between">
                <a href="./">
                    Home
                </a>
                <a href="./info">
                    Info
                </a>
            </nav>
        </header>
    );
}
