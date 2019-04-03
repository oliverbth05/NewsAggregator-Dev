import React, { Component } from 'react';
import axios from 'axios';

import SourceListItem from '../components/SourceListItem';
import SourceTile from '../components/SourceTile';


const defaultSources = [
    {
        name: 'ABC News',
        image: 'http://youthh2o.com/wp-content/uploads/2014/02/abc-news-thumbnail.png',
        url: 'abc-news'
    },
    {
        name: 'Axios',
        image: 'https://i.vimeocdn.com/portrait/25764922_300x300',
        url: 'axios'
    },
    {
        name: 'BBC News',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61C6z7hAXEL._SL300_.png',
        url: 'bbc-news'
    },
    {
        name: 'CNN',
        image: 'https://i.vimeocdn.com/portrait/6921642_300x300',
        url: 'cnn'
    },
    {
        name: 'ESPN',
        image: 'http://www.vault.com/media/9733914/espn-logo.jpg',
        url: 'espn'
    },
    {
        name: 'Fox News',
        image: 'http://myamazingtv.com/wp-content/uploads/2017/10/Get-Fox-News-on-an-Android-TV-Box.png',
        url: 'fox-news'
    },
    {
        name: 'independent',
        image: 'http://store-images.s-microsoft.com/image/apps.60444.13510798886637349.59fc6d31-c1fe-44d4-b856-99bc2226bc0a.1c554776-aa9c-44e8-8e85-0f47312e71c5',
        url: 'Independent'
    },
    {
        name: 'Polygon',
        image: 'https://lh3.googleusercontent.com/smwVr7L1PC-grQWbdvPeMAhAmFyOCQck_pMNMYUQIYDHrfkx9ZXnUJ_18OcrHxXmprT8-Kqe=rj-c-w300-h300-l95-c0xffffff',
        url: 'polygon'
    },
    {
        name: 'Tech Radar',
        image: 'https://media.licdn.com/dms/image/C4D0BAQGYAujoOo1yDQ/company-logo_200_200/0?e=2159024400&v=beta&t=5gNY8aFdOxu4RlX8BWFkHknna0TWsmfk-WpFbPLbe9E',
        url: 'techradar'
    },
    {
        name: 'The Verge',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWTRwo0GkcxM1pQ3ohQdaSAW2rMgUGyxeTmjAsSKm50EfgRbsGg',
        url: 'the-verge'
    },
    {
        name: 'Time',
        image: 'data:image/png;base64,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',
        url: 'time'
    },
    {
        name: 'WP',
        image: 'data:image/jpeg;base64,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',
        url: 'the-washington-post'
    }
]

class Sources extends Component {

    state = {
        filtered: [],
        sources: []
    }

    fetchSources() {
        axios.get('https://newsapi.org/v2/sources?apiKey=be30cb8ae9f64953b5b256a3c8b4df07')
            .then(res => {
                this.setState({
                    sources: res.data.sources
                })
            })
    }

    componentDidMount() {
        if (this.state.sources.length === 0) {
            this.fetchSources();
        }
    }

    searchSourceHandler(e) {
        var arr = this.state.sources.filter((item) => item.name.slice(0, e.target.value.length).toLowerCase() === e.target.value.toLowerCase())

        this.setState({
            filtered: arr
        })
    }

    renderFilteredList = list => list.map((item, index) => <SourceListItem {...item} key = {index} />)

    render() {
        return (
            <div className='container p-t-3'>
                <h3 className='font-normal text-center m-b-2'>Popular</h3>

                <div className='source-grid'>
                    {defaultSources.map((source, index) => <SourceTile {...source} key = {index} />)}
                </div>

                <div className='m-t-2 m-t-2'>
                    <input type='text' placeholder='Search for a source' onChange={this.searchSourceHandler.bind(this)} className='input' />
                </div>

                <ul className='source-filter'>
                    <p className='border-bottom' >{this.state.filtered ? this.state.filtered.length + ' result(s)' : null}</p>
                    {this.renderFilteredList(this.state.filtered)}
                </ul>
            </div>
        )
    }
}

export default Sources;