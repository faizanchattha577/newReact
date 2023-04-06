import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetch() {
    const [post, setPost] = useState({})
    const [id,Setid] =useState(1)
    const[idFromButtonClick,setidFromButtonClick]=useState(1)

   
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
       
    },[idFromButtonClick])

    const handleClick = () =>{
        setidFromButtonClick(id)
    }

  return (
    <div>
        <input type='text' value={id} onChange={(e) => {
         Setid(e.target.value)
        }}/>
        <button onClick={handleClick} >fetch post</button>
        <div>{post.title}</div>
        {/* <ul>
            {
            posts.map(post =>  <li key={post.id}>{post.title}</li>)

            }
        </ul> */}
    </div>
  )
} 

export default DataFetch;