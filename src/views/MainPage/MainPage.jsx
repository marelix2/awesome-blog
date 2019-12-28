import React, { useState, useEffect } from 'react';

import content from '../../static/content/mainPageContent.json'
import Logo from '../../components/Logo/Logo'
import { getArticle } from './utils'
import Grid from '@material-ui/core/Grid'
import ArticleColumn from './ArticleColumn'
import {
  BrowserRouter as Router,
} from "react-router-dom"

const MainPage = () => {
  const [articles, setArticles] = useState([])
  const [newArticle, setNewArticle] = useState('')

  useEffect(() => {
    content.forEach(({ src }) => {
      getArticle(src, setNewArticle)
    })
  }, [])

  useEffect(() => {
    setArticles([...articles.filter(_ => _), newArticle])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newArticle])

  const oddArticles = articles.filter((article, index) => index % 2 === 0)
  const evenArticles = articles.filter((article, index) => index % 2 === 1)

  return (
    <>
      <Router>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={10}>
              <Logo />
            </Grid>
          </Grid>
          <ArticleColumn articles={evenArticles} />
          <ArticleColumn articles={oddArticles} />
        </Grid>
      </Router>
    </>
  )
};

export default MainPage;