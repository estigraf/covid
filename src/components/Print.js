import React from 'react'

export const Print = (listName) => {
  return (
    <div><select name="cotrys" id="lang" multiple>
    { listName.map(el=>{
     <option value="javascript">{el}</option>           
     })  } </select></div>
  )
}
