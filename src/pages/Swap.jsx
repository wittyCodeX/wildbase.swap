import React from 'react'
import Tabs from 'components/Tabs'

import WildSwapCard from 'components/WildSwapCard'
import StableSwapCard from 'components/StableSwapCard'

export default function Swap() {
    return (
        <div className='swap'>
            <div className="container">
                <Tabs>
                    <WildSwapCard />
                    <StableSwapCard />
                </Tabs>
            </div>
        </div>
    )
}
