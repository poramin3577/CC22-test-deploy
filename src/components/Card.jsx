import React from 'react'

function Card({children}) {
  return (
    <div className='bg-white p-8 m-10 shadow-md flex justify-center items-center'>
      {children}
    </div>
  )
}

export default Card
