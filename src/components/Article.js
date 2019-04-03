import React from 'react';
import moment from 'moment';

const Article = ({ source, title, description, url, urlToImage, publishedAt }) =>

    <article>
        <a href={url} className='article'>
            <img alt={title} className='article-image' src={urlToImage} />
            <div className='article__content'>
                <h4 className='article-headline'>{title}</h4>
                <p className='article-description p-t-1 p-b-1'>{description}</p>
                <div className='article__details'>
                    <p className='article-source'>{source.name}</p>
                    <p className='article-date'>{new moment(publishedAt).fromNow()}</p>
                </div>
            </div>
        </a>
    </article>

export default Article;