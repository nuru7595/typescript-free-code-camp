export default function About() {
    const data = [
        {
            key: "Started",
            value: "25 June 2025",
        },
        {
            key: "Last Modified",
            value: "26 June 2025",
        },
        {
            key: "Status",
            value: "Completed!!",
        },
        {
            key: "Completed in",
            value: "1 Day",
        },
        {
            key: "Allocated Time",
            value: "4 Hours 48 Minutes",
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
