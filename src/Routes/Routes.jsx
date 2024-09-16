import React from 'react'
import Index from '../Features/Index'
import Layout from '../Features/Layout/Index'

export const Routes =[
    {
        path: "home",
        element: <Index/>,
        children: [
            {
                path:"Lego-home",
                element: <Layout/>
            }
        ]
    }

]
 

