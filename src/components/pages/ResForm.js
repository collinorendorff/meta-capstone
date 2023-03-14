import { useState } from "react";

function ResForm() {
    const [day, setDay] = useState(new Date());
    const [resTime, setResTime] = useState("");
    const [noGuests, setNoGuests] = useState(1);
    const [occasion, setOccasion] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setDay(new Date());
        setResTime("17:00");
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
                <select id="res-time"
                value={resTime} onChange={e => setResTime(e.target.value)}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
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