import React from 'react'
import logo from '../../static/png/logo.png'
import { Link } from "react-router-dom";
import { HOME } from './../../static/routes/public'
 
const Logo = () => (
  <Link to={HOME}>
    <img src={logo} alt='just-dev.pl' />
  </Link>
)

export default Logo;