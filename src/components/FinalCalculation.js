import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Total from './Total'


const FinalCalculation = () => {
  
  const [yourTotal, setYourTotal] = useState()
  const [friendsTotal, setFriendsTotal] = useState()

  const navigate = useNavigate()
  const params = useParams()
  const yourName = params.personOne
  const friendsName = params.personTwo

  const calcHandler = () => {
    if (yourTotal > friendsTotal){
      return `${friendsName} owes ${yourName} $${((yourTotal/2) - (friendsTotal/2)).toFixed(2)}`
    }else if(yourTotal < friendsTotal){
      return `${yourName} owes ${friendsName} $${((friendsTotal/2) - (yourTotal/2)).toFixed(2)}`
    }else{
      return "By some miracle, neither owe each other anything."
    }
  }
  useEffect(() => {
  axios.post('http://localhost:4014/getSplitExpenses', {yourName, friendsName})
  .then(res => {setYourTotal(res.data.totalOne[0].sum); setFriendsTotal(res.data.totalTwo[0].sum); console.log(res.data)})
    .catch(err => console.log(err))
  }, [])

  return (
    <div id='fc'>
      <Total />
      <h2>{calcHandler()}</h2>
      <button onClick={() => navigate(`/index`)}>Start Over</button>
    </div>
  )
}

export default FinalCalculation