import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import imgLogo from "../../assets/Logo.svg"
import UserContext from '../../context/UserContext'
import Login from './login/Login';
import Logout from './logout/Logout';
import "./header.css"
import "./button.css"

export default function Header() {
  const {isLogin} = useContext(UserContext)
  // console.log(isLogin)
  return (
		<header>
			<div className="max-width">
				<h1>
					<Link href="/">
						<img src={imgLogo} alt="My Blog" />
					</Link>
				</h1>
				<ul>
          {isLogin ? <Login/> : <Logout/>}
				</ul>
			</div>
		</header>
  )
}
