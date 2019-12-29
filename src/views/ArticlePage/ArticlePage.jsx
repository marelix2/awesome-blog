import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { getArticle } from './utils'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  const fontStyles = {
    '&::first-letter': {
      textTransform: 'capitalize',
    },
    fontFamily: `'Open Sans', sans-serif`,
  }

  return ({
    section: {
      ...fontStyles,
      width: '60vw',
      borderLeft: '5px solid #444',
      paddingLeft: '16px',
      [theme.breakpoints.down('sm')]: {
        width: '90vw',
        overflowX: 'hidden',
      },
    },
  })
}
)

const ArticlePage = ({ location }) => {

  const [source, setSource] = useState('')
  useEffect(() => {
    getArticle(location.state.src, setSource)
  }, [location.state.src])

  const classes = useStyles()

  return (
    <section className={classes.section}>
      <Markdown source={source} />
    </section>
  );
}


export default ArticlePage;