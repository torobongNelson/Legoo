import React from 'react'
import style from './Nav.module.css'
import Image from '../../Assets/Hero/HeroImage.jpeg'

export default function Nav() {
  return (

  
      



    <div className={style.parent}>
      

         <div className={style.main}>

          <div className={style.menus}>
             <div>
              <p>Feature</p>
             </div>
             <div>
              <p>AboutUs</p>
             </div>
             <div>
               <p>Connect</p>
             </div>
             <div>
                <p>Testimonial</p>
             </div>
             <div>
                <p>Album</p>
             </div>
             <div>
                <p>FAQ</p>
             </div>
          </div>

           

              {/* <div>  
             <div>               
             <img src={Image} alt="web logo" className={style.heroImage}/>
             </div>
             </div>   */}






         </div>   


         
          






    </div>
  )
}
