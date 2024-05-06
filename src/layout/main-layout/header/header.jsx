import React from 'react'
import logo from "/public/logo.png"
import {Telegram} from "/public/icons/telegram"
import {InstagramIcon} from "/public/icons/instagram-icon"
import {GitIcon} from "/public/icons/git-icon"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='container flex justify-between mt-2 items-center'>
      <div>
        <Link to="" href="/">
          <img className='h-[60px]' src={logo} alt="logo" />
        </Link>
      </div>
      <ul className='flex gap-[54px]  '>
        <li>
          <Link to="/" className='text-gray-500 font-semibold text-lg hover:text-gray-700' href="/">Home</Link>
        </li>
        <li>
          <Link to="/about" className='text-gray-500 font-semibold text-lg hover:text-gray-700' href="/">About</Link>
        </li>
        <li>
          <Link to="/" className='text-gray-500 font-semibold text-lg hover:text-gray-700 focus:text-gray-900' href="/">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className='text-gray-500 font-semibold text-lg hover:text-gray-700' href="/">Contact</Link>
        </li>
      </ul>
      <div className='flex gap-4'>
        <a className='hover:text-blue-800' href="https://github.com/redmaxredmax">
          <GitIcon/>
        </a>
        <a className='hover:text-blue-800' href="https://t.me/zok1rov_016">
          <Telegram/>
        </a>
        <a className='hover:text-blue-800' href="https://www.instagram.com/vokhidovich.a/?igsh=MWRibWtvNW5wc3R5Yw%3D%3D">
          <InstagramIcon />
        </a>
      </div>
    </div>
  )
}
