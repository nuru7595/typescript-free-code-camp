export default function About() {
    const updated = "25 June 2025";
    const time = 0.3;
    // Constant Values;
    const started = "25 June 2025";
    const start_date = new Date(started);
    const end_date = new Date(updated);
    const totalDays = (end_date - start_date) / (1000 * 60 * 60 * 24);

    const data = [
        {
            key: "Started",
            value: started,
        },
        {
            key: "Last Modified",
            value: updated,
        },
        {
            key: "Ongoing",
            value: totalDays + " Days",
        },
        {
            key: "Allocated Time",
            value: time + " Hours",
        },
        {
            key: "Status",
            value: "Running...",
        },
        {
            key: "Source",
            value: "Free Code Camp",
            link: "https://youtu.be/SpwzRDUQ1GI",
        },
    ];

    return (
        <section>
            <h2 className="section-title">About</h2>
            <table className="table-fixed w-full">
                <tbody>
                    {data.map((tr, index) => {
                        return (
                            <tr
                                key={index}
                                className="not-last:border-b border-white"
                            >
                                <td className="p-2 font-bold tracking-wide text-center">
                                    {tr.key} :-
                                </td>
                                <td className="p-2 font-bold tracking-wide text-center">
                                    {tr.link ? (
                                        <a
                                            href={tr.link}
                                            target="_blank"
                                            className="underline"
                                        >
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
