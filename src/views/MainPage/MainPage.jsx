import React, { useState, useEffect } from 'react';
import ArticlePage from '../ArticlePage/ArticlePage';
import content from '../../static/content/mainPageContent.json'
import { getArticle } from './utils'

const MainPage = () => {
  const [articles, setArticles] = useState([])
  const [newArticle, setNewArticle] = useState('')

  useEffect(() => {
    content.forEach(({ src }) => {
      getArticle(src, setNewArticle)
    })
  }, [])

  useEffect(() => {
    setArticles([...articles, newArticle])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newArticle])



  return (
    <>
      <p>just - dev.pl</p>
      {articles.map(article => (
        <ArticlePage source={article} />
      ))}
    </>
  )
};

export default MainPage;