import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { FaBed } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
// import { AiFillPhone } from "react-icons/ai";
import { useParams } from "react-router-dom";

// import { Link } from "react-router-dom";
import { GiPlainSquare } from "react-icons/gi";
import { BsBuildingUp } from "react-icons/bs";

const ApartmanDetails = () => {
  //   const [loading, setLoading] = useState(false);

  const [singleApartman, setSingleApartman] = useState([]);

  const client = createClient({
    space: "r7x9e8mlne8k",
    accessToken: "gNzJQdNetApMn5NYLXNG_AXvmzpu8cZQp8FIgKHNHAM",
  });

  const { id } = useParams();

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries);
          setSingleApartman(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getEntryById();
  }, [id]);

  console.log(singleApartman);

  return (
    <>
      <section className="section apartman" id="apartman">
        <div className="apartman-single__container container">
          <div className="apartman-single__content ">
            <div className="apartman-single__left">
              <img
                src={singleApartman?.fields?.productImage?.fields?.file?.url}
                alt={singleApartman?.fields?.productImage?.fields?.file?.title}
                className="apartman-single__img"
              />

              <h2 className="apartman-single__title">
                {singleApartman?.fields?.productTitle}
              </h2>
              <p className="apartman-single__subtitle">
                {singleApartman?.fields?.productDescription}
              </p>
              <div className="apartman__icons">
                    
                    <p className="apartman__icons-title"><FaBed className="apartman__icons-icon" />Soba:{singleApartman?.fields?.productRoom}</p>
                    <p className="apartman__icons-title"><GiPlainSquare className="apartman__icons-icon"/>{singleApartman?.fields?.productSquare} m2</p>
                    <p className="apartman__icons-title"><BsBuildingUp className="apartman__icons-icon"/>Sprat: {singleApartman?.fields?.productFloor}</p>
                  </div>
              <p className="apartman-single__description">
                {singleApartman?.fields?.productSummary}
              </p>
            </div>
            <div className="apartman-single__right">
              <div className="apartman-single__right-price">
                <h3>{singleApartman?.fields?.productPrice} &euro;/m2</h3>
              </div>
              <div className="apartman-single__right-info">
                <h3>
                  <HiLocationMarker />
                  {singleApartman?.fields?.productLocation}
                </h3>
                {/* <Link to="tel:+381601234567">
                <button className="button button--flex">
                  Pozovite <AiFillPhone />
                </button>
              </Link> */}
              </div>
              <div className="contact">
                <div className="contact__content">
                  <h3>Posalji upit:</h3>
                  <form className="contact__form">
                    <div className="contact__form-div">
                      <input
                        type="text"
                        name="name"
                        className="contact__form-input"
                        placeholder="Vaše ime"
                      />
                    </div>
                    <div className="contact__form-div">
                      <input
                        type="email"
                        name="email"
                        className="contact__form-input"
                        placeholder="Vaš email"
                      />
                    </div>
                    <div className="contact__form-div">
                      <input
                        type="number"
                        name="number"
                        className="contact__form-input"
                        placeholder="Broj telefona"
                      />
                    </div>
                    <div className="contact__form-div contact__form-area">
                      <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        className="contact__form-input"
                        placeholder="Vaša poruka..."
                      ></textarea>
                    </div>
                    <button className="button button-flex">
                      Posaljite<i className="uil uil-message"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="apartman-single__content_image">
            <img
              src={singleApartman?.fields?.productPhoto[0]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            <img
              src={singleApartman?.fields?.productPhoto[1]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            <img
              src={singleApartman?.fields?.productPhoto[2]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            {/* <img
              src={singleApartman?.fields?.productImage[3]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            <img
              src={singleApartman?.fields?.productImage[4]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            <img
              src={singleApartman?.fields?.productImage[5]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            <img
              src={singleApartman?.fields?.productImage[6]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ApartmanDetails;
