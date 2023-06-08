import React from "react";
import AboutMain from "../Images/Herobg/apartmani.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-main">
          <img className="about-main__img" src={AboutMain} alt="car-renting" />
          <div className="about-main__text">
            <h2>Dobro došli u Vaš</h2>
            <h3>GOLD PRODAJA</h3>
            <p>
              Koliko prostora je potrebno za uživanje? Odgovora je mnogo - zato
              možete da birate, od garsonjera do dvosobnih apartmana. U svim
              tipovima apartmana plan je otvoren, sa objedinjenim dnevnim
              boravkom, trpezarijom i kuhinjom. Tako je u svakom prostoru
              dovoljno mesta i za okupljnje prijatelja , ali i za rad u miru i
              tišini dok vam je sve na dohvat ruke.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
