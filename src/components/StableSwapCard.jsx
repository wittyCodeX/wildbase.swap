import React, { useState } from 'react'

import TokenSelectModal from './TokenSelectModal'

export default function StableSwapCard() {

    const [open, setOpen] = useState(false)

    const closeModal = () => {
        setOpen(false)
    }

    return (
        <div className='card'>
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <button className="action_btn"><img src="/images/chart.png" alt="" /></button>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="block">
                        <h1 className='text-center text-yellow-main text-2xl'>Wild Swap</h1>
                    </div>
                </div>
                <div className="flex-1 flex justify-end items-center">
                    <button className='action_btn'><img src="/images/refresh.png" alt="" /></button>
                    <button className='action_btn ml-3'><img src="/images/setting.png" alt="" /></button>
                </div>
            </div>
            <p className='text-center text-gray-400'>Trade tokens in on instant</p>
            <div className="block">
                <p className='text-sm text-gray-300'>You Pay</p>
                <div className="custom_input">
                    <div className="token_select" onClick={() => setOpen(true)}>
                        <img src="/images/image 21417 (1).svg" alt="" />
                        <span className='text-gray-200 w-16 text-center'>WETH</span>
                        <img src="/images/polygon3.png" alt="" />
                    </div>
                    <div className="token_prices">
                        <p className='text-sm text-gray-400 text-end'>-$12.79</p>
                        <input type='number' placeholder='37.086563' />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className='swap_btn_box'><button><img className='w-8' src="/images/swap.png" alt="" /></button></div>
                </div>
                <div className="custom_input">
                    <div className="token_select" onClick={() => setOpen(true)}>
                        <img src="/images/image 21417 (1).svg" alt="" />
                        <span className='text-gray-200 w-16 text-center'>ALB</span>
                        <img src="/images/polygon3.png" alt="" />
                    </div>
                    <div className="token_prices">
                        <p className='text-sm text-gray-400 text-end'>-$12.79 <span className='text-red-600'>(-0.2%)</span></p>
                        <input type="number" placeholder='37.086563' />
                    </div>
                </div>
                <button className='custom_btn my-6'>SWAP NOW</button>
            </div>
            <div className="block">
                <p className='text-sm text-gray-300'>Slippage Tolerance</p>
                <div className="custom_input">
                    <div className="token_select" onClick={() => setOpen(true)}>
                        <img src="/images/image 21417 (1).svg" alt="" />
                        <span className='text-gray-200 w-16 text-center'>WETH</span>
                        <img src="/images/polygon3.png" alt="" />
                    </div>
                    <div className="token_prices">
                        <p className='text-sm text-gray-400 text-end'>-$12.79</p>
                        <input type="number" placeholder='37.086563' />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <button className='connect_btn'><img src="/images/metamask.svg" alt="" />&nbsp;CONNECT WALLET</button>
                    <button className='connect_btn'><img src="/images/walletconnector.svg" alt="" />&nbsp;CONNECT WALLET</button>
                </div>
            </div>
            <TokenSelectModal open={open} closeModal={closeModal} />
        </div>
    )
}
