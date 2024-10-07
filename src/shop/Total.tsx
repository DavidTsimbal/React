import React from "react";

function Total(totalPrice){
    return(
        <div className="total-container">
            <h2>Данные покупателя:</h2>
            <input type="text" placeholder="ИМЯ" name="customer_name" id="customer_name" required />
            <input type="text" placeholder="ФАМИЛИЯ" name="customer_surname" id="customer_surname" required />
            <input type="email" placeholder="EMAIL" name="customer_email" id="customer_email" required />
            <h3>всего к оплате:</h3>
            <hr></hr>
            <h1>{totalPrice}</h1>
            <hr className="bottom-margin"></hr>
            <a href="precheckout.html"><button className="pay-button" type="submit" form="tickets-form">ОПЛАТИТЬ</button></a>

            <p className="come-to-email">*билеты придут на вашу почту</p>
        </div>
    );
}

export default Total;