import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewVacation from './components/NewVacation';
import FinalCalculation from './components/FinalCalculation'
import PersonOne from './components/PersonOne';

const RouterHandler = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NewVacation/>} />
            <Route path="inputExpense/:personOne/:personTwo" element={<PersonOne />} />
            <Route path='index' element={<NewVacation/>}/>
            <Route path="finalCalculation/:personOne/:personTwo" element={<FinalCalculation />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterHandler