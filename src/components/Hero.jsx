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

  const bgImageStyle ={
    backgroundImage: `linear-gradient( rgb(13, 17, 23, 0.8), rgb(13, 17, 23, 0.8)), url(${HeroData[currentState].image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%'
   }
  
  return (
    <section className="section home">
      
      <div style={bgImageStyle}></div>
      <h2 className="home__title">{HeroData[currentState].title}</h2>
    </section>
  );
};

export default Hero;
