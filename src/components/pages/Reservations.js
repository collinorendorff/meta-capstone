import ResForm from "./ResForm";

export default function Reservations({resTimes, dispatchResTimes}) {
    return (
        <>
            <ResForm resTimes={resTimes} dispatchResTimes={dispatchResTimes}/>
        </>
    );
}