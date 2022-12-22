import React from 'react'
import Color from "./Color"
const colors=[
  {
    id:1,
    hex:"red",
    name:"hibiscus"
  },
  {  
    id:2,
    hex:"pink",
    name:"rose"
  },
  {
    id:3,
    hex:"blue",
    name:"butterflypea"
  },
  {
    id:4,
    hex:"violet",
    name:"lily"
  }
]

function App() {

  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
    {colors.map(color=><Color key={color.id} hex={color.hex} name={color.name}/>)}
    </div>
  )
}

export default App