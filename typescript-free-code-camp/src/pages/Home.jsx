import { code } from "../ts";

export default function Home() {
    code();
    return (
        <section>
            <h2 className="section-title">Home</h2>
            <div className="section-container text-center">
                <h4>Basic, Literal, and Custom Types</h4>
                <h4>Optional Properties</h4>
                <h4>Unions</h4>
                <h4>Type Narrowing</h4>
                <h4>Utility Types</h4>
                <h4>Generics</h4>
            </div>
        </section>
    );
}
