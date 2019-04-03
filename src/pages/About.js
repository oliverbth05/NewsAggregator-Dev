import React from 'react';
import LogoGrid from '../components/LogoGrid';

import reactLogo from '../assets/Logos/react.svg';
import reduxLogo from '../assets/Logos/redux.svg';
import sassLogo from '../assets/Logos/sass-1.svg';
import reactRouterLogo from '../assets/Logos/react-router.svg';
import webpackLogo from '../assets/Logos/webpack-icon.svg';
import babelLogo from '../assets/Logos/babel-10.svg';

const logos = [
    {
        name: 'React',
        image: reactLogo
    },
    {
        name: 'Redux',
        image: reduxLogo
    },
    {
        name: 'React Router',
        image: reactRouterLogo
    },
    {
        name: 'Sass',
        image: sassLogo
    },
    {
        name: 'Babel',
        image: babelLogo
    },
    {
        name: 'Webpack',
        image: webpackLogo
    }
]

const About = () => {
    return (
        <div className='container-flex-center p-t-3'>
            <div className='container'>

                <section className='p-a-2'>
                    <h1 className='font-normal text-center p-b-2'><i className="far fa-newspaper"></i> News Aggregator</h1>
                    <p>
                        Leveraging the <a className='about-link' href='https://newsapi.org/'>News API</a>, this project acts as a portal to the top news headlines from numerous sources around the world.
                        This site is using the Developer Plan which limits total requests to 1000 per day, and a limit of 20 articles per request.
                    </p>
                </section>

                <section className='p-a-2'>
                    <h3 className='font-normal text-center m-b-2'>Technologies Used</h3>
                    <LogoGrid logos={logos} />
                </section>

                <section className='p-a-2'>

                </section>

                <a href='https://github.com/oliverbth05/NewsAggregator-Dev' className='p-a-2'><i className="fab fa-github"></i> See GitHub Repo</a>
            </div>
        </div>
    )
}

export default About;