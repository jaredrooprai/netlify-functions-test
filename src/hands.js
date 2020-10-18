import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios';


const Hands = () => {


    const click = () => {
        console.log('test')
    }

    useEffect(() => {
        axios.get(`/.netlify/functions/hello`).then((resp) => {
            console.log(resp)
        })
    },[])
    return (
        <>
            <button onClick={click}>Click me</button>
        </>
    )
}

export default Hands