import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Author from './author/Author'
import Category from './category/Category'
import UserContext from '../../context/UserContext'
import About from './about/About'


export default function Main() {
  const {isLogin} = useContext(UserContext)
  const [posts, setPosts] = useState(); 
  
  useEffect(()=>{
    axios
     .get("http://localhost:3001/posts")
     .then((json) => {
      setPosts(json.data)
    })
  },[])
  // console.log(posts)
  return (
    <Main>
      {posts !== undefined ? (
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <ul className="posts">
              {posts.map(post =>
              <li key={post.id}>
                <Link to={`/post/${post.id}`} className="post">
                  <article>
                    <img src={post.thumbnail} alt="" />
                    <div className="contents-wrap">
                        <Category 
                          category={post.category}
                        />
                        <h3>{post.title}</h3>
                        <Author 
                          userName={post.userName} 
                          profileImg={post.profileImg}
                          created={post.created} 
                        />
                        <p className="post-description">{post.contents[0].text}</p>
                    </div>
                  </article>
                </Link>
              </li>
              )}
          </ul>
          {isLogin ? <About/> : <></>} 
        </div>
      ) : null}
    </Main>

  )
}
