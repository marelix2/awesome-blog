import React from 'react'
import Grid from '@material-ui/core/Grid'
import Tile from './../../components/Tile/Tile'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  item: {
    marginBottom: 16
  }
})
)

const ArticleColumn = ({ articles }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction='column-reverse'
      justify="space-around"
      alignItems="center"
    >
      {articles.map(({ iconSrc, id, title, description, date}) => (
        <Grid
          item
          key={id}
          className={classes.item}
        >
          <Tile 
          iconSrc={iconSrc} 
          title={title}
          description={description}
          date={date}
          />
        </Grid>))}
    </Grid>
  );
};

export default ArticleColumn;