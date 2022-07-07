import React, { useState } from 'react'
import PersonOne from './PersonOne';
import PersonTwo from './PersonTwo';
import { useNavigate } from 'react-router-dom';


const NewVacation = () => {
    const navigate = useNavigate();
    const [vacation, setVacation] = useState('')
    const [yourName, setYourName] = useState('')
    const [friendName, setFriendName] = useState('')
    
    const handleChange = e => {
        setVacation(e.target.value)
        // console.log(vacation)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        //this needs to give the names to the person cards
        navigate(`/inputExpense/${yourName}/${friendName}`);
    }
  
  
    return (
        <div id='newVacation'>
            <form id='new' onSubmit={(e)=>handleSubmit(e)}>
                <label>Vacation Name:</label>
                <input type='text' placeholder='eg. Disneyland' onChange={handleChange}></input>
            
                <label>Your Name:</label>
                <input type='text' placeholder='eg. Kirsten' onChange={(e) => setYourName(e.target.value)}></input>

                
                <label>Friends Name:</label>
                <input type='text' placeholder='eg. Nate' onChange={(e) => setFriendName(e.target.value)}></input>

                <button type='submit'>Create</button>
            </form>
        </div>
  )
}

export default NewVacation