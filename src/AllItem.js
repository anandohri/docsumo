import React from 'react'

const allItems = ['', '', '' ,'' ,'']

function AllItems (props){
  return(
    allItems.map((item) => {
      <div className = 'item'>
        <img src = {allItems[props.start]} />
      </div>
    })
  )
}

export default AllItems