import React from 'react'


export const Footer = (props) => {
  
  return (
    <div>
      <div id='footer'>
        <div className='container text-center'>
          <p className='text-2xl'>
            &copy; 2024 BotProof | All Rights Reserved
          </p>
            <span className='text-2xl text-blue-600 cursor-pointer' onClick={()=>{
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }} rel='nofollow'>
              BotProof
            </span>

        </div>
      </div>
    </div>
  )
}
