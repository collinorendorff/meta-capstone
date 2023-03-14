import { useState } from "react";

function ResForm() {
    const [resTimes, setResTimes] = useState([
        {label: "17:00", value: "17:00"},
        {label: "18:00", value: "18:00"},
        {label: "19:00", value: "19:00"},
        {label: "20:00", value: "20:00"},
        {label: "21:00", value: "21:00"},
        {label: "22:00", value: "22:00"}
    ]);

    const [day, setDay] = useState(new Date());
    const [resTime, setResTime] = useState("Select a time");
    const [noGuests, setNoGuests] = useState(1);
    const [occasion, setOccasion] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setDay(new Date());
        setResTime("Select a time");
        setNoGuests(1);
        setOccasion("");
        console.log("Reservation booked!");
    }

    return (
        <>
            <form style={{ display: "grid", maxWidth: 200, gap: 20 }} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date"
                value={
                    day.getFullYear().toString() +
                    "-" +
                    (day.getMonth() + 1).toString().padStart(2, 0) +
                    "-" +
                    day.getDate().toString().padStart(2, 0)
                  }
                  onChange={(e) => {
                    setDay(new Date(e.target.value));
                  }}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={resTime} onChange={e => setResTime(e.target.value)}>
                    <option value={"Select a time"}>Select a time</option>
                    {/* using map function to iterate through array and return
                    option elements with correct attributes */}
                    {resTimes.map((resTime) => <option key={resTime.label} value={resTime.value}>{resTime.label}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" value={noGuests} onChange={e => setNoGuests(e.target.value)}
                /*placeholder={1}*/ min={1} max={10} id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" defaultValue="Make Your reservation" />
            </form>
        </>
    );
}

export default ResForm;