import React from 'react'
import logo from "/public/logo.png"

import { Telegram } from "/public/icons/telegram"
import { InstagramIcon } from "/public/icons/instagram-icon"
import { GitIcon } from "/public/icons/git-icon"
import {PhoneIcon} from "/public/icons/phone"
import {GmailIcon} from "/public/icons/gmail"

export const Footer = () => {
  return (
    <div className='bg-blue-300'>
      <div className='container py-1 flex items-center justify-between '>
        <div>
          <a href="/">
            <img className='h-[70px]' src={logo} alt="icon" />
          </a>
        </div>
        <div className='flex gap-10 items-center'>
          <div className='flex items-center gap-2 hover:text-blue-800'>
            <PhoneIcon/>
            <p className='text-blue-900 font-medium text-base hover:cursor-pointer hover:text-blue-800'>+998-33-373-90-09</p>
          </div>
          <div className='flex items-center gap-2 hover:text-blue-700'>
           <GmailIcon/>
            <p className='text-blue-900 font-medium text-base hover:text-blue-700 hover:cursor-pointer'>@redmax.formal@gmail.com</p>
          </div>
          <div className='flex gap-4 ml-[60px]'>
            <a className='hover:text-blue-800' href="https://github.com/redmaxredmax">
              <GitIcon />
            </a>
            <a className='hover:text-blue-800' href="https://t.me/zok1rov_016">
              <Telegram />
            </a>
            <a className='hover:text-blue-800' href="https://www.instagram.com/vokhidovich.a/?igsh=MWRibWtvNW5wc3R5Yw%3D%3D">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
