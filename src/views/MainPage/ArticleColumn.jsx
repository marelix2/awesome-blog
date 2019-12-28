import React from 'react'
import Grid from '@material-ui/core/Grid'
import ArticlePage from '../ArticlePage/ArticlePage'

const ArticleColumn = ({ articles }) => {
  return (
    <Grid
      container
      direction="column-reverse"
      justify="space-around"
      alignItems="center"
      xs={5}
    >
      {articles.map(article => (
      <Grid item style={{ marginBottom: '16px' }}>
        <ArticlePage source={article} />
      </Grid>))}
    </Grid>
  );
};

export default ArticleColumn;