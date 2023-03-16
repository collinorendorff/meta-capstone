import ResForm from "./ResForm";

export default function Reservations({resTimes, dispatchResTimes, submitForm}) {
    return (
        <>
            <ResForm resTimes={resTimes} dispatchResTimes={dispatchResTimes} submitForm={submitForm}/>
        </>
    );
}