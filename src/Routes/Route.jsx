import React from 'react'
import Index from '../Features/Index'
import Layout from '../Features/Layout/Index'

export const Route =[
    {
        path: "",
        element: <Index/>,
        children: [
            {
                path:"",
                element: <Layout/>
            }
        ]
    }

]
 

