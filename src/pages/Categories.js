import React, { Component } from 'react';
import GridMenu from '../components/GridMenu';

class Categories extends Component {
    render() {
        return (
            <div className='container-flex-center'>
                <div className='container'>
                    <GridMenu />
                </div>
            </div>
        )
    }
}

export default Categories;