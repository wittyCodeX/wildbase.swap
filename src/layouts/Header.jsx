import React, { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'

import { HeaderLinks } from 'config/index'

export default function Header() {
    const currentUrl = window.location.pathname

    const [isMobile, setMobile] = useState(false)

    return (
        <>
            <div className='bg-main-100'>
                <div className="container mr-auto ml-auto ">
                    <div className="flex justify-between">
                        <div className="hidden sm:block logo">Wild <span className='text-yellow-main'>Base</span></div>
                        <div className='text-yellow-main ml-2 block sm:hidden' onClick={() => setMobile(!isMobile)}>
                            <Hamburger />
                        </div>
                        <div className="hidden lg:flex">
                            <ul className='nav_list'>
                                {HeaderLinks.map((link, key) =>
                                    <li className={`list_item ${currentUrl === link.url ? 'active' : ''}`} key={key}>
                                        <a href={link.url}>{link.name}</a>
                                        <img src="/images/hover.png" alt="" />
                                    </li>)}
                            </ul>
                        </div>
                        <div className="nav_action">
                            <p className='hidden sm:block'>$0.067</p>
                            <button className='hidden sm:block'><img src="/images/navicon1.svg" alt="" /></button>
                            <button className='bt-yellow-main btn_connect m-2 sm:m-0'>Connect wallet</button>
                            <div className='text-yellow-main ml-2 hidden sm:block lg:hidden' onClick={() => setMobile(!isMobile)}>
                                <Hamburger />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isMobile === true ? (
                <div className="container mr-auto ml-auto">
                    <div className="nav_bar mobile_navbar">
                        <ul className='nav_list'>
                            {HeaderLinks.map((link, key) =>
                                <li className={`list_item ${currentUrl === link.url ? 'active' : ''}`} key={key}>
                                    <a href={link.url}>{link.name}</a>
                                </li>)}
                        </ul>
                    </div>
                </div>
            ) : ''}
        </>
    )
}
