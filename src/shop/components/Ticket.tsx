import React from "react";

function Ticket(props){
    return(
        <div className="ticket-container" id={`${props.idcounter}`}>

            <div className="ticket-info grid-span">
                <h2>Билет стандартный</h2>
                <p>12:00 - 18:00 Workshop Loft №2</p>
            </div>


            <div className="ticket-price">{props.ticketPrice}</div>

            <div>
                <button className="close-button" onClick={() => props.delTicket(props.idcounter)} type="button"><img src="/icn/Krestiksvgpng.ru_.png" width="20px"></img></button>
            </div>

            <div className="grid-span">
                <input type="text" placeholder="ИМЯ" name={"first_name"+`${props.idcounter}`} id={"first_name"+`${props.idcounter}`} required />
                <input type="text" placeholder="ФАМИЛИЯ" name={"last_name"+`${props.idcounter}`} id={"last_name"+`${props.idcounter}`} required />
            </div>

        </div>

    );
}

export default Ticket;