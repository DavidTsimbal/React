import { createElement, useState } from 'react';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client'
import React from 'react';
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Ticket from "./Ticket.tsx";
import Total from "./Total.tsx";


function App() {
  
  const [ticketPrice, setTicketPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(52);
  
  async function LoadHandler(){
  
    const LoadRequest = new Request("https://veyer-conf.ru/shop-info.php", { method: 'GET', });
    
    const response = await fetch(LoadRequest);
    const result = await response.json();
    console.log("Success:", result);
  
    setTicketPrice(result["price"]);
    setTotalPrice(result["price"]);
    setTotalQuantity(result["quantity"]);
  
  }


  const closeButtons = document.querySelectorAll(".close-button");

  function delTicket(e){

    const element = e.target;
    element.parentNode.parentNode.parentNode.parentNode.remove();

    const newQuantity = selectedQuantity - 1;
    setSelectedQuantity(newQuantity);

    const newTotalPrice = selectedQuantity * ticketPrice;
    setTotalPrice(newTotalPrice);

    const totalPriceRoot = createRoot(document.querySelector(".total-container h1") as HTMLElement);
    totalPriceRoot.render(newTotalPrice);
    

  }

  closeButtons.forEach(function (elem) {
    elem.addEventListener("click", delTicket);
  });



  const plusButton = document.getElementById("plus-button");
  let ticketsList = document.getElementById("tickets-list");
  let idcounter = 1;

  function addTicket(){

    idcounter++;
    // const newTicket = createElement("Ticket", {ticketPrice: ticketPrice, idcounter: idcounter});
    if(!document.getElementById(`${idcounter}`)){
      const d = document.createElement("div");
      d.id = `${idcounter}`;
      ticketsList?.appendChild(d);
    }
    
    
    // const newQuantity = selectedQuantity + 1;
    setSelectedQuantity(selectedQuantity + 1);
    
    // const newTotalPrice = selectedQuantity * ticketPrice;
    setTotalPrice(selectedQuantity * ticketPrice);
    
    const newTicketRoot = createRoot(document.getElementById(`${idcounter}`) as HTMLElement);
    newTicketRoot.render(<Ticket ticketPrice={ticketPrice} idcounter={idcounter}/>);
    
    // const totalPriceRoot = createRoot(document.querySelector(".total-container h1") as HTMLElement);
    // totalPriceRoot.render(newTotalPrice);
  }

  plusButton?.addEventListener("click", addTicket);


  return (
  
    <div onLoad={LoadHandler}>
      <Header></Header>

      <main className="tickets">
      <div className="paddings">

        <div>
          <h1>Здравствуйте!</h1>
          <p>Здесь вы можете приобрести билеты на Веер. Каждый билет - случайная игральная карта. Назовите её на входе и погружайтесь в мир кардистри! </p>
        </div>

        <hr id="breakline"></hr>

        <p id="tickets-counter">Билетов осталось: {totalQuantity}/52</p>

        <form className="tickets-template" id="tickets-form" action="https://veyer-conf.ru/payment.php" method="post">
        
          <div>
              
              <div id="tickets-list">
                
                <div id="1">
                  <Ticket ticketPrice={ticketPrice} idcounter={idcounter}></Ticket>
                </div>
              </div>
  
            <button id="plus-button" form="">+</button>
  
          </div>
  
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
          
        </form>


      </div>
    </main>

      <Footer></Footer>
    </div>
    
  );
}

// function App() {


//   return (
  
//     <div onLoad={LoadHandler}>
//       <Header></Header>

//       <main className="tickets">
//       <div className="paddings">

//         <div>
//           <h1>Здравствуйте!</h1>
//           <p>Здесь вы можете приобрести билеты на Веер. Каждый билет - случайная игральная карта. Назовите её на входе и погружайтесь в мир кардистри! </p>
//         </div>

//         <hr id="breakline"></hr>

//         <p id="tickets-idcounter">Билетов осталось: ?/52</p>

//         <form className="tickets-template" id="tickets-form" action="https://veyer-conf.ru/payment.php" method="post">
        
//           <div>

//             <Ticket ticketPrice={ticketPrice}></Ticket>
  
//             <button id="plus-button" form="">+</button>
  
//           </div>
  
//           <Total totalPrice={totalPrice}></Total>
          
//         </form>


//       </div>
//     </main>

//       <Footer></Footer>
//     </div>
    
//   );
// }

export default App;