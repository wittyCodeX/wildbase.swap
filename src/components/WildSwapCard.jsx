import React, { useState } from 'react'

import TokenSelectModal from './TokenSelectModal'
import { Tokens } from 'config'

export default function WildSwapCard() {

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(1)
    const [selectedToken, setSelectedToken] = useState([Tokens[0], Tokens[parseInt(Tokens.length / 2)], Tokens[parseInt(Tokens.length / 3)]])

    const selectToken = (value) => {
        setSelectedToken(states => {
            const tokens = states.map((state, i) => i === index - 1 ? value : state)
            return tokens
        })
    }

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
                    <div className="token_select" onClick={() => { setOpen(true); setIndex(1) }}>
                        <img className='w-7 h-7' src={`${selectedToken[0]['url']}`} alt="" />
                        <span className='text-gray-200 w-16 text-center'>{selectedToken[0] !== undefined ? selectedToken[0]['name'] : ''}</span>
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
                    <div className="token_select" onClick={() => { setOpen(true); setIndex(2) }}>
                        <img className='w-7 h-7' src={`${selectedToken[1]['url']}`} alt="" />
                        <span className='text-gray-200 w-16 text-center'>{selectedToken[1] !== undefined ? selectedToken[1]['name'] : ''}</span>
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
                    <div className="token_select" onClick={() => { setOpen(true); setIndex(3) }}>
                        <img className='w-7 h-7' src={`${selectedToken[2]['url']}`} alt="" />
                        <span className='text-gray-200 w-16 text-center'>{selectedToken[2]['name']}</span>
                        <img src="/images/polygon3.png" alt="" />
                    </div>
                    <div className="token_prices">
                        <p className='text-sm text-gray-400 text-end'>-$12.79</p>
                        <input type="number" placeholder='37.086563' />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3 sm:gap-10">
                    <button className='connect_btn'><img src="/images/metamask.svg" alt="" />&nbsp;CONNECT WALLET</button>
                    <button className='connect_btn'><img src="/images/walletconnector.svg" alt="" />&nbsp;CONNECT WALLET</button>
                </div>
            </div>
            <TokenSelectModal open={open} closeModal={closeModal} selectToken={selectToken} />
        </div>
    )
}
