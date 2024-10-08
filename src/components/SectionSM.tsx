import React from "react";
import Misha from "/Misha.JPG";
import vk from "/icn/vk.png";
import telegram from "/icn/telegram.png";
import instagram from "/icn/instagram.png";

function SectionSM(){
    return(
      <section className="section-socialmedia">
        <img className="section-socialmedia_pht" src={Misha} loading="lazy"></img>
        <article className="section-socialmedia_textblock">
          <h2>Где следить за обновлениями?</h2>
          <p><span>Локация, программа конференции</span> и прочая важная информация будет прежде всего опубликована в <span>социальных сетях</span> Веера:</p>
          <ul>
            <li><a href="https://vk.com/veyer_conf" target="_blank"><img src={vk}></img><div>VK</div></a></li>
            <li><a href="https://t.me/veyer_conf" target="_blank"><img src={telegram}></img><div>Telegram</div></a></li>
            <li><a href="https://www.instagram.com/veyer_conf" target="_blank"><img src={instagram}></img><div>Instagram</div></a></li>
          </ul>
        </article>
      </section>
    );
}

export default SectionSM;