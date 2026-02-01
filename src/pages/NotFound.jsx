import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 my-20'>
      <h1 className='text-4xl font-extrabold'>Error 404</h1>
        <p>
          Page Not Found.Go back to <Link to="/" className='text-amber-950 cursor-pointer'>Home</Link>
        </p>
    </div>
  )
}

export default NotFound
