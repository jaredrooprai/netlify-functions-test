import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios';


const Hands = () => {

    const { data } = useQuery('todos', axios.get(`/.netlify/functions/hello`))

    const click = () => {
        console.log('test')
    }
    return (
        <>
            {data}
            <button onClick={click}>Click me</button>
        </>
    )
}

export default Hands