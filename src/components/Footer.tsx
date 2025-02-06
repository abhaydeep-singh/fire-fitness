import React from 'react'

function Footer() {
  return (
    <>
     <div className="bg-black flex justify-center">
     <div className="socials">
     <p className='text-xl font-semibold my-3 text-center'>Socials</p>
     <div className="logos flex gap-4 mb-12">
     <div className="insta" onClick={()=>{location.href='https://instagram.com'}}>
      <img src="src/assets/instagram.png" alt="" />
     </div>
     <div className="twitter" onClick={()=>{location.href='https://x.com'}}>
     <img src="src/assets/twitter.png" alt="" />
     </div>
     <div className="facebook" onClick={()=>{location.href='https://facebook.com'}}>
     <img src="src/assets/facebook.png" alt="" />
     </div>
     </div>
     </div>   
     </div> 
    </>
  )
}

export default Footer
