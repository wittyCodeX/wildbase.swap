import React, { useState } from 'react'

export default function SupplyLiquidity({ handleSupply }) {

    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)

    return (
        <div className="flex justify-center">
            <div className='card'>
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <button className="action_btn" onClick={() => handleSupply(false)}><img src="/images/arrow.png" alt="" /></button>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="block">
                            <h1 className='text-center text-yellow-main text-2xl'>USDBC-ETH LP</h1>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-center">
                        <button className='action_btn'><img src="/images/refresh.png" alt="" /></button>
                        <button className='action_btn ml-3'><img src="/images/setting.png" alt="" /></button>
                    </div>
                </div>
                <p className='text-center text-gray-400 mb-4'>Receive LP tokens and earn trading fees</p>
                <div className="block">
                    <div className="custom_input">
                        <div className="token_select">
                            <div className={`checkbox ${checked1 === true ? 'checked' : ''} mr-2`} onClick={() => setChecked1(!checked1)}></div>
                            <img src="/images/image 21417 (1).svg" alt="" />
                            <span className='text-gray-200 w-16 text-center'>WETH</span>
                            <img src="/images/polygon3.png" alt="" />
                        </div>
                        <div className="token_prices">
                            <p className='text-sm text-gray-400 text-end'>Balance</p>
                            <h1 className='text-xl text-gray-200 text-end'>~$0.00</h1>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className='swap_btn_box text-yellow-main text-5xl'>+</div>
                    </div>
                    <div className="custom_input">
                        <div className="token_select">
                            <div className={`checkbox ${checked2 === true ? 'checked' : ''} mr-2`} onClick={() => setChecked2(!checked2)}></div>
                            <img src="/images/image 21417 (1).svg" alt="" />
                            <span className='text-gray-200 w-16 text-center'>ALB</span>
                            <img src="/images/polygon3.png" alt="" />
                        </div>
                        <div className="token_prices">
                            <p className='text-sm text-gray-400 text-end'>Balance</p>
                            <h1 className='text-xl text-gray-200 text-end'>~$0.00</h1>
                        </div>
                    </div>
                    <button className='custom_btn mt-8'>Supply</button>
                    <div className="flex justify-between items-center py-6">
                        <div className="flex-1">
                            <h1 className='text-base text-yellow-main'>WETH per USDBC</h1>
                            <p className='text-gray-400 text-sm'>0.000587836</p>
                        </div>
                        <div className="flex-1">
                            <h1 className='text-base text-yellow-main text-center'>USDBC per WETH</h1>
                            <p className='text-gray-400 text-sm text-center'>17384</p>
                        </div>
                        <div className="flex-1">
                            <h1 className='text-base text-yellow-main text-end'>Share of Pool</h1>
                            <p className='text-gray-400 text-sm text-end'>0%</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-t border-b border-gray-600 py-4">
                        <p className='text-yellow-main text-base'>LP reward APR</p>
                        <p className='text-yellow-main text-base'>0.5%</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-600 py-6">
                        <p className='text-yellow-main text-base'>Slippage Tolerance</p>
                        <p className='text-yellow-main text-base'>2.39%</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
