import React from 'react'
import logo from '../../static/png/logo.png'
import { Link } from 'react-router-dom'
import { HOME } from './../../static/routes/public'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  link: { display: 'flex', justifyContent: 'center', alignItems: ' center' },
  logo: { width: '80%' },
})
)

const Logo = () => {
  const classes = useStyles()
  return (
    <Link to={HOME} className={classes.link}>
      <img src={logo} alt='just-dev.pl' className={classes.logo} />
    </Link>
  )
}

export default Logo;