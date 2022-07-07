import React, { useState } from 'react'


const PersonTwo = (props) => {
  let name = props.name;
  const [expense, setExpense] = useState('')
  const [cost, setCost] = useState('')
  const [list, setList] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    setList([...list, {person: name, expense: expense, cost: cost}])
    setExpense('')
    setCost(null)
  }



  return (
    <div class='card'>
      <h3>{name}'s Expenses</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Expense' onChange={(e) => setExpense(e.target.value)} value={expense}></input>
        <p>$</p><input type='number' min='0' placeholder='0' onChange={(e) => setCost(e.target.value)} value={cost}></input>
        <input class='submit' type='submit'></input>
      </form>
    </div>
  )
}

export default PersonTwo