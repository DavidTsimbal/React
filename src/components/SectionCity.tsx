import React from "react";
import cityIMG from "/RIAnewsPhotoDark.png";

function SectionCity(){
    return(
        <section style={{background: `url(${cityIMG}) top/cover no-repeat`}}>
          <div className="section-city_gradient">
            <a href="https://ria.ru/20210327/vozdukh-1603090454.html" target="_blank">Фото: Евгений Биятов</a>
            <p className="definition-1 defs"><span>Веер</span> - это форма, объединяющая многое воедино.</p>
            <p className="definition-2 defs"><span>Веер</span> - это элемент, открывающий все лица колоды карт.</p>
            <p className="definition-3 defs"><span>Веер</span> - это главная кардистри конференция этого лета в Москве.</p>
          </div>
        </section>
    );
}

export default SectionCity;