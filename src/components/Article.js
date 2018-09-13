import React from 'react';

const Article = (props) => {
    return (
        <li className = 'article'>
            <img alt = '' className = 'article-image' src = {props.img} />

            <a href = {props.link} className = 'article-headline'>
            {props.title}
            </a>

            <p className = 'article-description'>
            {props.description}
            </p>

            <p className = 'article-source'>
            {props.source}
            </p>

            <p className = 'article-date'>
            {props.date}
            </p>

           

            

          
          
        </li>
    )
}

export default Article;