import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { FaBed } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { useParams } from "react-router-dom";


import { Link } from "react-router-dom";

const ApartmanDetails = () => {
//   const [loading, setLoading] = useState(false);
  
  const [singleApartman, setSingleApartman] = useState([]);


  const client = createClient({
    space: "iv2ffb7mednh",
    accessToken: "FPGPSxWGQBNokd_sJN0nK2LLimYi7frJA8BvlgS6i5Y",
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
                <FaBed className="apartman-single__subtitle-icon" />{" "}
                {singleApartman?.fields?.productDescription}
              </p>
              <p className="apartman-single__description">
                {singleApartman?.fields?.productSummary}
              </p>
              <Link to="tel:+381605241060">
                <button className="button button--flex">
                  Pozovite <AiFillPhone />
                </button>
              </Link>
            </div>
            <div className="apartman-single__right">
              <div className="apartman-single__right-price">
                
                <h2>{singleApartman?.fields?.productPrice} &euro;/m2</h2>
                
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
