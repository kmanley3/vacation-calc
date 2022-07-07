import React from 'react'
import Item from './Item'
import Total from './Total'

const ExpenseList = (props) => {
  
  const { list } = props

  const listMapped = list.map((item, index) => {
      return (
          <Item key={index} item={item} />
      )
  })
  
    return (
    <div id='list'>
      <div id='header'>
      <h3 id='title'>Name</h3>
      <h3 id='title'>Expense</h3>
      <h3 id='title'>Cost</h3>
      </div>

        {listMapped}
    </div>
  )
}

export default ExpenseList