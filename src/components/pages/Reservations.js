import ResForm from "./ResForm";

export default function Reservations({resTimes, dispatchResTimes}) {
    return (
        <>
            <h1>Book a Reservation:</h1>
            <ResForm resTimes={resTimes} dispatchResTimes={dispatchResTimes}/>
        </>
    );
}