import React, { useEffect, useState } from "react";
import { HeroData } from "./HeroData";

 

const Hero = () => {
  const [currentState, setCurrentState] = useState(0);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(currentState === 2){
        setCurrentState(0)
      }else{
        setCurrentState(currentState+1)
      }
      
    }, 6000)
    return ()=> clearTimeout(timer);
  },[currentState])

  return (
    <section className="section home">
      <div className="home__hero">
      <img className="home__img" src={HeroData[currentState].image} alt=""/>
      <h2 className="home__title">{HeroData[currentState].title}</h2>
      </div>
      
    </section>
  );
};

export default Hero;
