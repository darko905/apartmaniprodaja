import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { FaBed } from "react-icons/fa";
import { BsArrowRightShort, BsBuildingUp } from "react-icons/bs";
import { GiPlainSquare } from "react-icons/gi";
import { Link } from "react-router-dom";

const ApartmanList = () => {
  const [apartmanPost, setApartmanPost] = useState([]);
  const [isPening, setisPending] = useState(true);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const client = createClient({
    space: "iv2ffb7mednh",
    accessToken: "FPGPSxWGQBNokd_sJN0nK2LLimYi7frJA8BvlgS6i5Y",
  });

  useEffect(() => {
    setTimeout(() => {
      const getAllEntries = async () => {
        try {
          await client.getEntries().then((entries) => {
            console.log(entries);
            setApartmanPost(entries);
            setisPending(false);
          });
        } catch (error) {
          console.log(error);
        }
      };

      getAllEntries();
    }, 1000);
  }, []);

  return (
    <>
      <section className="section" id="apartman">
        <h2 className="section__title">Apartmani u strogom centru Zlatibora</h2>
        <span className="section__subtitle">
          Veliki izbor apartmana na Zlatiboru. Prijatan ambijent i moderan
          dizajn.
        </span>
        {isPening && <span className="loader"></span>}
        <div className="apartman__container container grid">
          {apartmanPost?.items?.slice(0, visible).map((post) => (
            
              <div className="apartman__card" key={post.sys.id}>
                <Link to={`/apartmanDetails/${post.sys.id}`}>
                <img
                  src={post.fields.productImage.fields.file.url}
                  alt={post.fields.title}
                  className="apartman__img"
                />
                </Link>
                <div className="apartman__card-basic">
                  <h2 className="apartman__title">
                    {post.fields.productTitle}
                  </h2>
                  <p className="apartman__subtitle">
                    
                    {post.fields.productDescription}
                    
                  </p>
                  <div className="apartman__icons">
                    
                    <p className="apartman__icons-title"><FaBed className="apartman__icons-icon" />Soba: 1</p>
                    <p className="apartman__icons-title"><GiPlainSquare className="apartman__icons-icon"/>45 m2</p>
                    <p className="apartman__icons-title"><BsBuildingUp className="apartman__icons-icon"/>Sprat: 4</p>
                  </div>
                  <div className="apartman__button">
                    <button className="button button--flex">
                      Saznajte više <BsArrowRightShort />
                    </button>
                  </div>
                </div>
              </div>
            
          ))}
          <div className="button-wiev-more">
            <button className="button button-flex" onClick={showMoreItems}>
              Još apartmana...
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApartmanList;
