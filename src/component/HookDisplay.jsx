import React ,{useState}from 'react'
import HookMouse from './HookMouse'

function HookDisplay() {
    const [display , setDisplay] = useState(true)


  return (
    <div>
        <button onClick={(e) => setDisplay(!display)}>Toggle Display</button>
        {display && <HookMouse />}
    </div>
  )
}

export default HookDisplay