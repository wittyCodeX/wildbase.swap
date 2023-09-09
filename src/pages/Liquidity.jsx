import React, { useState } from 'react'

import AddLiquidity from 'components/AddLiquidity'
import SupplyLiquidity from 'components/SupplyLiquidity'

export default function Liquidity() {

    const [supLiquidity, setAddLiquidity] = useState(false)

    const handleSupply = (val) => {
        setAddLiquidity(val)
    }

    return (
        <div className='liquidity'>
            <div className="container">
                {supLiquidity === true ? (
                    <SupplyLiquidity handleSupply={handleSupply} />
                ) : (
                    <AddLiquidity handleSupply={handleSupply} />
                )}
            </div>
        </div>
    )
}
