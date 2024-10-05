import { useState } from 'react';
import Header from "../components/Header.tsx"
import SectionCity from "../components/SectionCity.tsx"
import Slava from "../public/Slava.jpg";



function App() {

  return (
  
    <div>
      <Header></Header>

      <main>
        <SectionCity></SectionCity>

        <section className="section-why">
          <div className="paper-gradient"></div>
          <div className="section-why_textblock">
            <h2 className="section-why_header">Зачем организуется Веер?</h2>
            <article className="section-why_textblock_paragraphs">
              <p className="why">Всё очень просто. Мы хотим дать возможность <span>кардистам со всей России</span> собраться вместе и поделиться опытом
                друг с другом.</p>
              <p className="why">Мы верим, что Веер станет не просто мероприятием, но и площадкой для <span>самовыражения и развития</span> как каждого отдельного участника, так и всего жанра кардистри в целом.</p>
            </article>
          </div>
          <div className="gallery">
            <img className="gallery_vert-pht" src="NearRedSquare.JPG" loading="lazy"></img>
            <img className="gallery_vert-pht" src={Slava} loading="lazy"></img>
            <img className="gallery_vert-pht last-pht" src="Cardists.JPG" loading="lazy"></img>
            <br></br>
            <img className="gallery_hr-pht" src="Vertigos.JPG" loading="lazy"></img>
          </div>
        </section>

        <hr></hr>

        <section className="section-date">
          <div className="section-date_textblock">
            <h3 className="section-date_descriptor">когда это будет?</h3>
            <h1 className="section-date_header">22 АВГУСТА</h1>
          </div>
        </section>

        <hr></hr>

        <section className="section-socialmedia">
          <img className="section-socialmedia_pht" src="Misha.JPG" loading="lazy"></img>
          <article className="section-socialmedia_textblock">
            <h2>Где следить за обновлениями?</h2>
            <p><span>Локация, программа конференции</span> и прочая важная информация будет прежде всего опубликована в <span>социальных сетях</span> Веера:</p>
            <ul>
              <li><a href="https://vk.com/veyer_conf" target="_blank"><img src="/icn/vk.png"></img><div>VK</div></a></li>
              <li><a href="https://t.me/veyer_conf" target="_blank"><img src="/icn/telegram.png"></img><div>Telegram</div></a></li>
              <li><a href="https://www.instagram.com/veyer_conf" target="_blank"><img src="/icn/instagram.png"></img><div>Instagram</div></a></li>
            </ul>
          </article>
        </section>

        <hr></hr>

        <section className="section-sponsor">
          <div className="paper-gradient"></div>
          <div className="sponsor-textblock">
            <h3>При поддержке: </h3>
            <img src="LotusInHandLogoBlack.png" className="lotus-logo" loading="lazy"></img>
          </div>
          <img src="FanInTheAir.JPG" className="card-fan" loading="lazy"></img>
        </section>
      </main>

      <footer>
        Contact: admin@veyer-conf.ru
      </footer>
    </div>
    
  );
}

export default App;
