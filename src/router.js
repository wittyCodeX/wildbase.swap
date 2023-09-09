import React, { lazy } from 'react'
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('pages/Home'))
const Swap = lazy(() => import('pages/Swap'))
const Liquidity = lazy(() => import('pages/Liquidity'))


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/swap',
        element: <Swap />
    },
    {
        path: '/liquidity',
        element: <Liquidity />
    }
])

export default router;