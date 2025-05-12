import { data } from "../data/info";

export default function Info() {
    return (
        <section className="sec-info">
            <h2 className="section-title">Information</h2>
            <table className="table-fixed w-full">
                <tbody>
                    {data.map((tr, index) => {
                        return (
                            <tr key={index}>
                                <td>{tr.key} :-</td>
                                <td>
                                    {tr.link ? (
                                        <a href={tr.link} target="_blank">
                                            {tr.value}
                                        </a>
                                    ) : (
                                        tr.value
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
}
