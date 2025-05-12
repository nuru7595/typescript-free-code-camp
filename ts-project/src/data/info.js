const updated = "12 May 2025";
const time = 1;
// Constant Values;
const started = "12 May 2025";
const start_date = new Date(started);
const end_date = new Date(updated);
const totalDays = (end_date - start_date) / (1000 * 60 * 60 * 24);

export const data = [
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
