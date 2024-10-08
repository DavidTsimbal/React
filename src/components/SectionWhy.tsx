import React from "react";
import nearRedSquare from "../../public/NearRedSquare.JPG";
import Slava from "../../public/Slava.jpg";
import Cardists from "../../public/Cardists.jpg";
import Vertigos from "../../public/Vertigos.jpg";

function SectionWhy(){
    return(
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
            <img className="gallery_vert-pht" src={nearRedSquare} loading="lazy"></img>
            <img className="gallery_vert-pht" src={Slava} loading="lazy"></img>
            <img className="gallery_vert-pht last-pht" src={Cardists} loading="lazy"></img>
            <br></br>
            <img className="gallery_hr-pht" src={Vertigos} loading="lazy"></img>
          </div>
        </section>
    );
}

export default SectionWhy;