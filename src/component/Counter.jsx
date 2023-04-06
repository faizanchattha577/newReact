
import React from 'react'
import { useState, useEffect } from 'react'

function Counter() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')


  useEffect(() => {
    console.log('useEffect - updating document title')
    document.title = `You clicked ${count} times`
  },[count] )
  return (
    <div >
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count+1) }>click {count} times</button>
    </div>
  )
}

export default Counter