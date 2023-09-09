import React, { useState } from 'react'
export default function Tabs({ children }) {

    const [active, setActive] = useState(0)

    return (
        <div className="tab">
            <div className="flex justify-center">
                <div className="tab_panel">
                    <div className={`tab_button ${active === 0 ? 'active' : ''}`} onClick={() => setActive(0)}>Wild Swap</div>
                    <div className={`tab_button ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>Stable Swap</div>
                </div>
            </div>
            <div className="flex justify-center">
                {active === 0 ? (
                    children[0]
                ) : (
                    children[1]
                )}
            </div>
        </div>
    )
}
