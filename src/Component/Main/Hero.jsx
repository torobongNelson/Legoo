import React from 'react'
import style from './Hero.module.css'



const Hero = () => {
  return (
    <div className={style.parent}>
       <div className={style.main}>
       <div className={style.Welcome}>
            <h1> WELCOME TO LEGO^- </h1>
            <h3 className={style.tagline}>...may our voices be heard </h3>
        {/* <div> */}
            {/* <div> */}
               {/* <img src={Image} alt="web logo" className={style.Image}/> */}
            {/* </div> */}
        {/* </div> */}

        </div>
        <div className={style.compmessage}>
          <h2>Our team of dedicated professionals is committed<br /> to helping you navigate challenges, <br/>explore new opportunities 
              and achieve your goals. </h2>
              <button className={style.getStarted}>Get Started</button>
        </div>
    </div>

   

    </div>
  )
}

export default Hero
