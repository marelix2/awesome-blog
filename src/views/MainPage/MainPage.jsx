import React from 'react'
import content from '../../static/content/mainPageContent.json'
import Logo from '../../components/Logo/Logo'
import Grid from '@material-ui/core/Grid'
import ArticleColumn from './ArticleColumn'
import ArticlePage from './../ArticlePage/ArticlePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import {HOME, ARTICLE} from './../../static/routes/public'


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
          <Route exact path={HOME}>
            <ArticleColumn articles={content} />
          </Route>
          <Route path={ARTICLE} component={ArticlePage} />
          <Redirect from="/" to={HOME} />
        </Switch>
      </Grid>
    </Router>
  </>
)

export default MainPage;