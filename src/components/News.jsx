import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";

const News = () => {
  const [apartmanPostBlog, setApartmanPostBlog] = useState([]);
  

 

  const client = createClient({
    space: "aebaukn9k652",
    accessToken: "6LBFqo8T62ZetF_zV7FIGDI-vb-aUaG-xOLz0OMHQ54",
  });

  useEffect(() => {
    setTimeout(() => {
      const getAllEntries = async () => {
        try {
          await client.getEntries().then((entries) => {
            console.log(entries);
            setApartmanPostBlog(entries);
            
          });
        } catch (error) {
          console.log(error);
        }
      };

      getAllEntries();
    }, 1000);
  }, []);
  return (
    <section className="section news" id="news">
      <h2 className="section__title">Interesantne aktuelnosti</h2>

      <div className="news__container container grid">
          {apartmanPostBlog?.items?.map((post) => (
            
              <div className="news__card" key={post.sys.id}>
                <Link to={`/`}>
                <img
                  src={post.fields.blogImage.fields.file.url}
                  alt='{post.fields.title}'
                  className="news__img"
                />
                </Link>
                <div className="anews__card-basic">
                  <h2 className="news__title">
                    {post.fields.blogTitle}
                  </h2>
                 
                </div>
              </div>
            
          ))}
          
        </div>
    </section>
  );
};

export default News;
