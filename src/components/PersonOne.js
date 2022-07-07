import React, { useState } from 'react'
import ExpenseList from './ExpenseList';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const PersonOne = () => {
  const params = useParams();
  const navigate = useNavigate();
  const yourName = params.personOne;
  const friendsName = params.personTwo;
  const [yourExpense, setYourExpense] = useState('')
  const [friendExpense, setFriendExpense] = useState('')
  const [yourCost, setYourCost] = useState('')
  const [friendCost, setFriendCost] = useState('')
  const [list, setList] = useState([])

  const handleSubmit = (e, name, expense, cost) => {
    e.preventDefault()
    setList([...list, {person: name, expense: expense, cost: cost}])

    axios.post('http://localhost:4014/addExpense', {person: name, expense, cost}).catch(err => console.log(err));

    setYourExpense('')
    setYourCost(0)
    setFriendCost(0)
    setFriendExpense('')
  }



  return (
    <div id='expenseForm'>
      <div id='forms'>
        <div id='formCard'><h3>{yourName}'s Expenses</h3>
      <form onSubmit={e => handleSubmit(e, yourName, yourExpense, yourCost)}>
        <input type='text' placeholder='Expense' onChange={(e) => setYourExpense(e.target.value)} value={yourExpense}></input>
        <div id='moneyInput'>
          $<input type='float' min='0' placeholder='0' onChange={(e) => setYourCost(e.target.value)} value={yourCost}></input>
          <button id='add' type='submit'>Add</button>
        </div>
      </form>
      </div>

      <div id='formCard'>
      <h3>{friendsName}'s Expenses</h3>
      <form onSubmit={e => handleSubmit(e, friendsName, friendExpense, friendCost)}>
        <input type='text' placeholder='Expense' onChange={(e) => setFriendExpense(e.target.value)} value={friendExpense}></input>
        <div id='moneyInput'>$<input type='float' min='0' placeholder='0' onChange={(e) => setFriendCost(e.target.value)} value={friendCost}></input>
        <button id='add' type='submit'>Add</button>
        </div>
      </form>
      </div>
      </div>
      <ExpenseList list={list}/>
      <button onClick={() => navigate(`/finalCalculation/${yourName}/${friendsName}`)}>Onward!</button>
    </div>
  )
}

export default PersonOne