import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=india&from=2024-06-09&sortBy=publishedAt&apiKey=ee83da25d2624cb1aebd60b07fbcd965')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setArticles(data.articles); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      {articles.map((article, index,e) => (
         <div className='section'>
           <img className='img' src={article.urlToImage} alt="img" />
           <h3>{article.author}</h3>
           <h5 key={index}>{article.title}</h5>
           <p>{article.description}</p>
         </div>
        
      ))}
    </div>
  );
}


