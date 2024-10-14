import { createElement, useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import logo from "/BlackLogoTransparentBG.svg";


function App() {

  const [message, setMessage] = useState('');

  
  function submitHanler(event){
    event.preventDefault();
    
    const formEL = document.querySelector('form');
    const formData = new FormData(formEL);
    const data = Object.fromEntries(formData);

    console.log(data);

    fetch("https://veyer-conf.ru/signup.php", { 
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "*",
        'Access-Control-Allow-Methods': 'POST',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => {
        setMessage(data['message']);
        console.log(data);
      });
  }


  return (
  
    <div>
      <div id="login-signup-page">
        <form id="signup-form" onSubmit={(e) => submitHanler(e)}>

          <img src={logo} alt="" />

          <br />

          <h1>Регистрация</h1>

          <div className="input-fields">
            <label htmlFor="first_name">Имя: </label>
            <input type="text" id="first_name" name="first_name" placeholder='ИМЯ' required/>

            <br />

            <label htmlFor="last_name">Фамилия: </label>
            <input type="text" id="last_name" name="last_name" placeholder='ФАМИЛИЯ' required/>

            <br />

            <label htmlFor="login">Логин: </label>
            <input type="email" id="login" name="login" placeholder='EMAIL' required/>

            <br />

            <label htmlFor="password">Пароль: </label>
            <input type="text" id="password" name="password" placeholder='ПАРОЛЬ' required/>
          </div>


          <br />

          <button type="submit" id="signup-button">Зарегистрироваться</button>

          <br />

          <a id='login-signup-link' href="../login/">Есть аккаунт? Войти</a>

        </form>
        <h1>{message}</h1>
      </div>

      <Footer></Footer>
    </div>
    
  );
}


export default App;