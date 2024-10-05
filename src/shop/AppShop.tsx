import { useState } from 'react';
import Header from "../../components/Header.tsx";
import SectionWhy from "../../components/SectionWhy.tsx";
import Footer from "../../components/Footer.tsx";

function App() {

  return (
  
    <div>
      <Header></Header>

      <main className="tickets">
      <div className="paddings">

        <div>
          <h1>Здравствуйте!</h1>
          <p>Здесь вы можете приобрести билеты на Веер. Каждый билет - случайная игральная карта. Назовите её на входе и погружайтесь в мир кардистри! </p>
        </div>

        <hr id="breakline"></hr>

        <p id="tickets-counter">Билетов осталось: ?/52</p>

        <form className="tickets-template" id="tickets-form" action="https://veyer-conf.ru/payment.php" method="post">
        
          <div>
            <div className="ticket-container">
  
              <div className="ticket-info grid-span">
                <h2>Билет стандартный</h2>
                <p>12:00 - 18:00 Workshop Loft №2</p>
              </div>
              
              
              <div className="ticket-price">3 000р.</div>
  
              <div>
                <button className="close-button" type="button" onClick="delTicket(this)"><img src="/icn/Krestiksvgpng.ru_.png" width="20px"></img></button>
              </div>
  
              <div className="grid-span">
                <input type="text" placeholder="ИМЯ" name="first_name1" id="first_name1" required/>
                <input type="text" placeholder="ФАМИЛИЯ" name="last_name1" id="last_name1" required/>
              </div>
  
            </div>
  
            <button id="plus-button" form="">+</button>
  
          </div>
  
          <div className="total-container">
            <h2>Данные покупателя:</h2>
            <input type="text" placeholder="ИМЯ" name="customer_name" id="customer_name" required/>
            <input type="text" placeholder="ФАМИЛИЯ" name="customer_surname" id="customer_surname" required/>
            <input type="email" placeholder="EMAIL" name="customer_email" id="customer_email" required/>
            <h3>всего к оплате:</h3>
            <hr></hr>
            <h1>3 000р.</h1>
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

export default App;