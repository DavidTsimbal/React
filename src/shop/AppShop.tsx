import { createElement, useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Ticket from "./components/Ticket.tsx";
import Total from "./components/Total.tsx";


function App() {
  
  const [ticketPrice, setTicketPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(52);
  const [ticketList, setTicketList] = useState([1]);

  useEffect(() => {

    console.log('ticketList:', ticketList);
    console.log("selectedQuantity:", selectedQuantity);
    console.log("totalPrice", totalPrice);

  },[ticketList, selectedQuantity, totalPrice]);
  

  const [isLoaded, setIsLoaded] = useState(false);

  async function LoadHandler(){
    if(!isLoaded){
      const LoadRequest = new Request("https://veyer-conf.ru/shop-info.php", { method: 'GET', });
      
      const response = await fetch(LoadRequest);
      const result = await response.json();
      console.log("Success:", result);
    
      setTicketPrice(result["price"]);
      setTotalPrice(result["price"]);
      setTotalQuantity(result["quantity"]);
      
      setIsLoaded(true);
    }
  }



  function delTicket(id: number){

    if(selectedQuantity > 0){
      
      setTicketList(ticketList.filter((item) => item !== id));
  
      console.log("deleted ticket id:", id);
  
      const newQuantity = selectedQuantity - 1;
      setSelectedQuantity(newQuantity);
  
      const newTotalPrice = selectedQuantity * ticketPrice;
      setTotalPrice(newTotalPrice); 
    
    }

  }


  const [idcounter, setIdcounter] = useState(1);

  function addTicket(){

    if(ticketList.length < totalQuantity){

      const newTicketId = idcounter + 1;
      setIdcounter(idcounter + 1);
      
      setTicketList(ticketList.concat([newTicketId]));
  
      const newQuantity = selectedQuantity + 1;
      setSelectedQuantity(newQuantity);
      
      const newTotalPrice = selectedQuantity * ticketPrice;
      setTotalPrice(newTotalPrice);
    }

  }


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
                  {ticketList.map((id) => (
                    <Ticket id={id} ticketPrice={ticketPrice} idcounter={id} key={id} delTicket={delTicket}></Ticket>
                  ))}
              </div>
  
            <button id="plus-button" form="" onClick={() => addTicket()}>+</button>
  
          </div>
  
          <Total totalPrice={selectedQuantity * ticketPrice}></Total>
          
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