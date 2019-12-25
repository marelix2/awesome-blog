export const getArticle = (src, setNewArticle) => {
  import(/* webpackMode: "eager" */`./../../articles/${src}.md`).then(newOne => {
    fetch(newOne.default)
      .then(response => response.text())
      .then(text => setNewArticle(text))
  })
}