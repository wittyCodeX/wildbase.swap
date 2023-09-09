import React, { useState, useEffect } from 'react'

import Modal from 'react-modal';

import { Tokens } from 'config'

export default function TokenSelectModal({ open, closeModal, selectToken }) {

    const [isOpen, setIsOpen] = useState(false)
    const [tokenLists, setTokenLists] = useState(Tokens)

    const filterToken = (e) => {
        const tokenArr = Tokens.filter((token) => token.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1)

        if (e.keyCode === 13 && tokenArr.length === 1) {
            handleToken(tokenArr[0])
        }
        setTokenLists(tokenArr)
    }

    const handleToken = (value) => {
        selectToken(value)
        closeModal()
    }

    useEffect(() => {
        setIsOpen(open)
    }, [open])

    const customStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '500px',
            backgroundColor: '#16171E'
        }
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => closeModal()}
                ariaHideApp={false}
                style={customStyle}
                contentLabel="Example Modal"
            >
                <div className="flex justify-between border-b border-yellow-500 py-4">
                    <h1 className='text-xl text-yellow-main'>Select Token</h1>
                    <button className='text-2xl text-yellow-main' onClick={() => closeModal()}>&times;</button>
                </div>
                <input type="text" autoFocus onKeyUp={(e) => filterToken(e)} placeholder='Enter name or address' className='bg-main-100 w-full h-12 rounded-md my-3 p-3 text-xl focus:outline-none text-white' />
                <div className="text-gray-200 mb-2">Common tokens</div>
                <ul className="token_lists">
                    {tokenLists.length !== 0 ? tokenLists.map((token, key) =>
                        <li className='flex justify-between items-center' key={key} onClick={(e) => handleToken(token)}>
                            <div className="flex items-center">
                                <img className='w-8 h-8' src={token.url} alt="" />
                                <div className="block ml-3 py-1">
                                    <h1 className='text-yellow-main text-base'>{token.name}</h1>
                                    <p className='text-gray-400 text-sm'>{token.title}</p>
                                </div>
                            </div>
                            <div className='text-gray-400'>import</div>
                        </li>
                    ) : (
                        <div className="text-center text-xl text-red-600 py-10">No Tokens</div>
                    )}
                </ul>
            </Modal>
        </div>
    )
}
