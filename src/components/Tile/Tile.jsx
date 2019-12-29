import React from 'react'
import { getProperPath } from './utils'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
const reqSvgs = require.context('./../../static/svg/', true, /\.svg$/)

const useStyles = makeStyles((theme) => {
  const fontStyles = { textTransform: 'capitalize', fontFamily: `'Open Sans', sans-serif` }
  return ({
    wrapper: {
      width: '50vw',
      height: 300,
      border: '30px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        border: '10px solid black',
        width: '90vw',
      },
    },
    icon: {
      width: 120,
      minWidth: 100,
      margin: '0 30px',
      [theme.breakpoints.down('sm')]: {
        margin: '16px',
      },
    },
    section: {
      height: '80%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: `calc(100% - 150px)`,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 'auto',
        textAlign: 'center',
      },
    },
    header: {
      ...fontStyles,
      margin: 0
    },
    date: {
      ...fontStyles,
      margin: 0
    },
    description: {
      ...fontStyles,
      width: `calc(100% - 150px)`,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    }
  })
}
)

const Tile = ({
  iconSrc = 'default',
  title,
  description,
  date
}) => {
  const imagePath = getProperPath(reqSvgs.keys(), iconSrc)
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <img
        src={reqSvgs(imagePath)}
        className={classes.icon}
        alt={title} />
      <section className={classes.section}>
        <h2 className={classes.header}>{title}</h2>
        <p className={classes.date}>{moment(date).format('MMM Do YYYY')}</p>
        <p className={classes.description}> {description}</p>
      </section>
    </div>
  );
};

export default Tile