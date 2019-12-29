import React from 'react'
import content from '../../static/content/mainPageContent.json'
import Logo from '../../components/Logo/Logo'
import Grid from '@material-ui/core/Grid'
import ArticleColumn from './ArticleColumn'
import ArticlePage from './../ArticlePage/ArticlePage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


const MainPage = () => (
  <>
    <Router>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid
          container
          item
          xs={12}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Logo />
        </Grid>

        <Switch>
          <Route exact path="/">
            <ArticleColumn articles={content} />
          </Route>
          <Route path='/:article' component={ArticlePage} />
        </Switch>
      </Grid>
    </Router>
  </>
)

export default MainPage;