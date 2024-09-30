import { useState, useEffect } from "react"
import {useLocation} from "react-router-dom"
import axios from "axios"

export default function BlogDetail() {
  const location = useLocation();
  // console.log(location)
  // return null
  const postNumber = location.pathname.split('/')[2]
  const [post, setPost] = useState(undefined); 
  
  useEffect(()=>{
    axios
     .get(`http://localhost:3001/posts/${postNumber}`)
     .then((json) => {
      setPost(json.data)
    })
    .catch((e) => {
      setPost(null)
    })
  },[])

  return (
    <div> 
      <h2>BlogDetail</h2> 
      {post === undefined ? 
        <div>로딩중... 😥</div> : post === null?  
        <div>404</div> : <div>{post.title}</div>}  
    </div>
  )
}
