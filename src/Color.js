import React from 'react'

function Color({hex,name}) {
  return (
    <div class="flowercontainer" style={{height:"200px",width:"200px",backgroundColor:hex,margin:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div class="flower1">{name}</div>
    </div>
  )
}

export default Color