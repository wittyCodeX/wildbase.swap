import React, { useState } from 'react'

import TokenSelectModal from './TokenSelectModal'
import { Tokens } from 'config'

export default function AddLiquidity({ handleSupply }) {

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
        <div className="flex justify-center">
            <div className='card'>
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        {/* <button className="action_btn"><img src="/images/chart.png" alt="" /></button> */}
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="block">
                            <h1 className='text-center text-yellow-main text-2xl'>Add Liquidity</h1>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-center">
                        <button className='action_btn'><img src="/images/refresh.png" alt="" /></button>
                        <button className='action_btn ml-3'><img src="/images/setting.png" alt="" /></button>
                    </div>
                </div>
                <p className='text-center text-gray-400'>Receive LP tokens and earn trading fees</p>
                <div className="block">
                    <p className='text-sm text-gray-300'>Select Token</p>
                    <div className="custom_input">
                        <div className="token_select" onClick={() => { setOpen(true); setIndex(1) }}>
                            <img className='w-7 h-7' src={`${selectedToken[0]['url']}`} alt="" />
                            <span className='text-gray-200 w-16 text-center'>{selectedToken[0] !== undefined ? selectedToken[0]['name'] : ''}</span>
                            <img src="/images/polygon3.png" alt="" />
                        </div>
                        <div className="token_prices">
                            <p className='text-sm text-gray-400 text-end'>Balance</p>
                            <h1 className='text-xl text-gray-200 text-end'>~$0.00</h1>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className='swap_btn_box2'>CHOOSE A VALID PAIR</div>
                    </div>
                    <div className="custom_input">
                        <div className="token_select" onClick={() => { setOpen(true); setIndex(1) }}>
                            <img className='w-7 h-7' src={`${selectedToken[1]['url']}`} alt="" />
                            <span className='text-gray-200 w-16 text-center'>{selectedToken[1] !== undefined ? selectedToken[0]['name'] : ''}</span>
                            <img src="/images/polygon3.png" alt="" />
                        </div>
                        <div className="token_prices">
                            <p className='text-sm text-gray-400 text-end'>Balance<span className='text-red-600'>(-0.2%)</span></p>
                            <h1 className='text-xl text-gray-200 text-end'>~0.00</h1>
                        </div>
                    </div>
                    <button className='custom_btn mt-10 mb-5' onClick={() => handleSupply(true)}>Add Liquidity</button>
                    <p className='text-xl text-yellow-main text-center'>LP reward APR 2.39%</p>
                </div>
            </div>
            <TokenSelectModal open={open} closeModal={closeModal} selectToken={selectToken} />
        </div>
    )
}
