import React, { useState, useEffect } from 'react'
import axios from 'axios';



const Total = () => {

const [total, setTotal] = useState()    

const getTotal = () => {
    axios.get('http://localhost:4014/getTotalExpenses')
    .then(res => {setTotal(res.data[0].sum)
    console.log(res.data)})
    .catch(err => console.log(err));
}

useEffect(() => {
    getTotal()
}, [])

// console.log(getTotal())

  return (
    <div>
        <h2>Total: ${total} </h2>
    </div>
  )
}

export default Total