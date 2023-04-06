import React,{useContext} from 'react'
import { UserContext } from '../App'

function ContextCompC() {
    const user = useContext(UserContext)
  return (
    <div>{user}</div>
  )
}

export default ContextCompC