import React from 'react'

const Item = (props) => {
  // console.log(props);
  return (
    <div id='item'>
      <h3 id='title'>{props.item.person}</h3>
      <h3 id='title'>{props.item.expense}</h3> 
      <h3 id='title'>${props.item.cost}</h3>
       
    </div>
  )
}

export default Item