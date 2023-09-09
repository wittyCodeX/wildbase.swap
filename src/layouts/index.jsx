import React from 'react'

import Header from './Header'

export default function index({ children }) {
    return (
        <div className=''>
            <Header />
            {children}
        </div>
    )
}
