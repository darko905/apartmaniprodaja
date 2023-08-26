import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Link, useParams } from "react-router-dom";
import { AiOutlineCaretRight } from 'react-icons/ai';

const SingleNews = () => {
  const [singleNews, setSingleNews] = useState([]);
  const [apartmanPostBlog, setApartmanPostBlog] = useState([]);

  const client = createClient({
    space: "aebaukn9k652",
    accessToken: "6LBFqo8T62ZetF_zV7FIGDI-vb-aUaG-xOLz0OMHQ54",
  });

  const { id } = useParams();

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries);
          setSingleNews(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getEntryById();
  }, [id]);

  useEffect(() => {
    
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
  
}, []);
  return (
    <section className="section news" id="news">
      <div className="news-single__container container">
      
        <div className="news-single__content-left ">
          <img
            src={singleNews?.fields?.blogImage?.fields?.file?.url}
            alt={singleNews?.fields?.blogImage?.fields?.file?.title}
            className="news-single__img"
          />

          <h2 className="news-single__title">
            {singleNews?.fields?.blogTitle}
          </h2>
          <p className="news-single__text">
            {singleNews?.fields?.blogDescription}
          </p>
          <h3 className="news-single__subtitle">
            {singleNews?.fields?.blogSubtitle}
          </h3>
          <p className="news-single__text">
            {singleNews?.fields?.blogDescription1}
          </p>
          <h3 className="news-single__subtitle">
            {singleNews?.fields?.blogSubtitle1}
          </h3>
          <p className="news-single__text">
            {singleNews?.fields?.blogDescription2}
          </p>
        </div>
        <div className="news-single__content-right">
        <h1>Nedavne Objave</h1>
        
        {apartmanPostBlog?.items?.map((post) => (
        <div className=""  key={post.sys.id}>
          <Link to={`/singleNews/${post.sys.id}`}>
          <h3 className="news-single__content-right-text"><AiOutlineCaretRight className="news-single__content-right-icons"/>{post.fields.blogTitle}</h3>
          </Link>
        </div>
        ))}
        </div>
      </div>
    
    </section>
  );
};

export default SingleNews;
