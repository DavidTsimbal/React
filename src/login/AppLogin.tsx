import { createElement, useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import logo from "/BlackLogoTransparentBG.svg";


function App() {

  const [message, setMessage] = useState('');

  const formEL = document.querySelector('form');

  formEL?.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEL);
    const data = Object.fromEntries(formData);

    fetch("https://veyer-conf.ru/login.php", { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => {
        setMessage(data['message']);
        console.log(data);
      });
  });

  return (
  
    <div>
      <div id="login-signup-page">
        <form id="login-form" action="" method="post">

          <img src={logo} alt="" />

          <br />

          <h1>Вход</h1>

          <div className="input-fields">
            <label htmlFor="login">Логин: </label>
            <input type="text" id="login" name="login" placeholder='EMAIL' required/>

            <br />

            <label htmlFor="password">Пароль: </label>
            <input type="text" id="password" name="password" placeholder='ПАРОЛЬ' required/>
          </div>


          <br />

          <button type="submit" id="login-button">Войти</button>

          <br />

          <a id='login-signup-link' href="../signup/">Нет аккаунта? Зарегистрироваться</a>

        </form>
        <h1>{message}</h1>
      </div>

      <Footer></Footer>
    </div>
    
  );
}


export default App;