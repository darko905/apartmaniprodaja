import React from "react";
import Diamonds from "../Images/Icons/diamonds.png";
import Hand from "../Images/Icons/hand.png";
import Swim from "../Images/Icons/swim.png";
import Lotus from "../Images/Icons/lotus.png";
import Disability from "../Images/Icons/disability.png";
import Bulb from "../Images/Icons/light-bulb.png";
import Video from "../Images/Icons/video-camera.png";
import Parking from "../Images/Icons/parking.png";
import Mountain from "../Images/Icons/mountain.png";

const Service = () => {
  return (
    <section className="section service" id="service">
      <h2 className="section__title">Šta dobijate?</h2>

      <div className="service__container container grid">
        <div className="service__content">
          <div>
            <img
              src={Diamonds}
              alt="Diamonds-icons"
              className="service__icons"
            />

            <h3 className="service__title">Komforni luksuzni apartmani</h3>
          </div>
          <p className="service__descritpion">
            Svojom strukturom, funkcionalnošću i kvalitetom gradnje donose novi
            vid kreiranja prostora namenjenog za odmor i uživanje.
          </p>
        </div>
        <div className="service__content">
          <div>
            <img src={Hand} alt="Hand-icons" className="service__icons" />

            <h3 className="service__title">Investicija u budućnost</h3>
          </div>
          <p className="service__descritpion">
            Posedovanje apartmana na najpopularnijoj planini u zemlji je
            dugoročno isplativa investicija. Uštedećete jer tokom odmora više
            nećete plaćati smeštaj za sebe, a ulog će vam biti vraćen kroz
            izdavanje apartmana.
          </p>
        </div>
        <div className="service__content">
          <div>
            <img src={Swim} alt="Swim-icons" className="service__icons" />

            <h3 className="service__title">Bazen, teretana i igraonica</h3>
          </div>
          <p className="service__descritpion">
            Ako ste ljubitelj aktivnog odmora, moći će da uživate u rekreaciji
            na otvorenom – da plivate u bazenu ili vežbate na spravama, dok vam
            se deca zabavljaju na penjalicama igraonice. Solarni paneli
            garantuju uvek prijatnu temperaturu vode u bazenu, a korišćenje svih
            ovih sadržaja je besplatno..
          </p>
        </div>
        <div className="service__content">
          <div>
            <img src={Lotus} alt="Lotus-icons" className="service__icons" />

            <h3 className="service__title">Wellness & Spa</h3>
          </div>
          <p className="service__descritpion">
            Doživećete potpuno opuštanje u Welness/spa centru koji se nalazi u
            okviru objekta. Na raspolaganju ćete imati tople kupke, hidromasažnu
            kadu, relax sobu, finsku saunu… Besplatno korišćenje za vlasnike
            apartmana!
          </p>
        </div>
        <div className="service__content">
          <div>
            <img
              src={Disability}
              alt="Disability-icons"
              className="service__icons"
            />

            <h3 className="service__title">Lift i rampa</h3>
          </div>
          <p className="service__descritpion">
            Pristup svim nivoima „Gold Apartmana“ objekta omogućen je i osobama
            s invaliditetom, i to uz pomoć lifta ili rampi pod blagim nagibom.
            Na ovaj način je olakšan i unos vašeg novog nameštaja.
          </p>
        </div>
        <div className="service__content">
          <div>
            <img src={Bulb} alt="Bulb-icons" className="service__icons" />

            <h3 className="service__title">Ušteda energije</h3>
          </div>
          <p className="service__descritpion">
            Objekat ima sertifikat energetske efikasnosti. Termoizolacione
            roletne, koje se spuštaju elektronski, dodatno štite od toplote i
            hladnoće.
          </p>
        </div>
        <div className="service__content">
          <div>
            <img src={Video} alt="Video-icons" className="service__icons" />

            <h3 className="service__title">Video nadzor</h3>
          </div>
          <p className="service__descritpion">
            Na ulazu u objekat je postavljen video nadzor. Uz ugradni kotao,
            kojim upravljate putem mobilne aplikacije, uvek ćete doći u topao
            apartman, podešavati sobnu temperaturu i kontrolisati potrošnju
            struje.
          </p>
        </div>
        <div className="service__content">
          <div>
            <img src={Parking} alt="Parking-icons" className="service__icons" />

            <h3 className="service__title">Parking i punjač</h3>
          </div>
          <p className="service__descritpion">
            Uz apartmane dolazi numerisano parking mesto. Njih uz apartman
            dobijate besplatno.
          </p>
        </div>
        <div className="service__content">
          <div>
            <img
              src={Mountain}
              alt="Mountain-icons"
              className="service__icons"
            />

            <h3 className="service__title">
              Odlična lokacija sa sjajnim pogledom
            </h3>
          </div>
          <p className="service__descritpion">
            „Gold Apartmani“ se nalaze samo 50m od centra Zlatibora. Preko puta
            Gold Gondole koja povezuje centar Zlatibora sa Tornikom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
