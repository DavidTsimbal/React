import { useState } from 'react';
import Header from "./components/Header.tsx";
import SectionCity from "./components/SectionCity.tsx";
import SectionWhy from "./components/SectionWhy.tsx";
import SectionDate from "./components/SectionDate.tsx";
import SectionSM from "./components/SectionSM.tsx";
import SectionSponsor from "./components/SectionSponsor.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
  
    <div>
      <Header></Header>

      <main>
        <SectionCity></SectionCity>

        <SectionWhy></SectionWhy>

        <hr></hr>

        <SectionDate></SectionDate>

        <hr></hr>

        <SectionSM></SectionSM>

        <hr></hr>

        <SectionSponsor></SectionSponsor>
      </main>

      <Footer></Footer>
    </div>
    
  );
}

export default App;
