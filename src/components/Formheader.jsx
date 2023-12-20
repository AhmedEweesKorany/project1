import React from 'react'
import { IoMdHome } from "react-icons/io";

function Formheader({header,description}) {
  return (
    <>

    <div className="icons text-center" >
        <IoMdHome size={50} color='#3b82f6'/>
        <h1>{header}</h1>
        <p>{description}</p>
    </div>
    </>
  )
}

export default Formheader