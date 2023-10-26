import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
  const { articles } = props;

  return (
    <main>
      {articles && articles.map((article) => (
        <Article
          key={article.title} 
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
