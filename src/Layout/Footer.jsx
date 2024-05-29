// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className='bg-[#D1DEFA] mt-auto text-center h-12 pt-2'>
           &copy; Máster en React - <Link to="https://eudysj95.com" className='underline hover:text-blue-800'>eudysj95.com</Link>
    </footer>
  )
}
