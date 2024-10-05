import React from "react";
import lotusLogo from "../public/LotusInHandLogoBlack.png";
import fan from "../public/FanInTheAir.JPG";

function SectionSponsor(){
    return(
      <section className="section-sponsor">
        <div className="paper-gradient"></div>
        <div className="sponsor-textblock">
          <h3>При поддержке: </h3>
          <img src={lotusLogo} className="lotus-logo" loading="lazy"></img>
        </div>
        <img src={fan} className="card-fan" loading="lazy"></img>
      </section>
    );
}

export default SectionSponsor;