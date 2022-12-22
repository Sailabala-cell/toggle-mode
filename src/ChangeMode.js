import React,{useState} from 'react'
import "./App.css"
function ChangeMode() {
    const [darkmode, setDarkmode]=useState(false)
  return (
    <div className={`${darkmode && 'dark-mode1'}`} style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
        
        <div className='changedtheme' style={{color:"white", position:"absolute",top:"200px",left:"445px"}}>
        Theme is changed
        </div>
        
        <button className="dark-mode" onClick={()=>setDarkmode(true)}>
        Dark Mode</button>
        <button className="light-mode" onClick={()=>setDarkmode(false)}>Light Mode</button>
    </div>
  ) 
}

export default ChangeMode