import React from 'react'
import Image2 from '../../Assets/Hero/Counselor.jpeg'
import Image3 from '../../Assets/Hero/Community.jpeg'
import Image4 from '../../Assets/Hero/Mentors.jpeg'
import style from './Subbody.module.css'

 const Subbody = () => {
  return (
    <div> 

      <div className={style.you}> <h3> -  </h3>    </div>


        <div className={style.subbody}>
          <div>
             <img src={Image2} alt="connect"  className={style.Image2}/>
             <h2>Connect to a Counselor today  <button className={style.here}>Here</button></h2>
          </div>
          

            <div>
                <img src={Image3} alt="community" className={style.Image3}/>
                <h2>Join a community for vast growth   <button className={style.here}>Here</button></h2>

            </div>
           

      </div>
      
            <div className={style.mentor}>
                <img src={Image4} alt="mentors" className={style.Image4}/>
                <h2>The mentors you need are here   <button className={style.here}>Here</button></h2>
            </div>
           
           <div className={style.message}>
               <h1>"Don't hold back. Whether groundbreaking you need to be heard loud and clear
                your voice can make a difference</h1>
           </div>
  </div>
  )
}
 export default Subbody