import React from 'react'
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
function Footer() {
  return (
    <>
     <div className="bg-black flex justify-center">
     <div className="socials">
     <p className='text-xl font-semibold my-3 text-center'>Socials</p>
     <div className="logos flex gap-4 mb-12">
     <div className="insta" onClick={()=>{location.href='https://instagram.com'}}>
      <img src={instagram} alt="" />
     </div>
     <div className="twitter" onClick={()=>{location.href='https://x.com'}}>
     <img src={twitter} alt="" />
     </div>
     <div className="facebook" onClick={()=>{location.href='https://facebook.com'}}>
     <img src={facebook} alt="" />
     </div>
     </div>
     </div>   
     </div> 
    </>
  )
}

export default Footer
