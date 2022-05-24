
import myWonderfulImage from "./imagedeprofil.jpg"
import React from 'react'

function ProfilePhoto() {
  return (
    <div className="photo">
       <img src={myWonderfulImage} alt ='imagedeprofil' />
    </div>
  )
}

export default ProfilePhoto
