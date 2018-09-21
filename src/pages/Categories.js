import React, { Component } from 'react';
import GridMenu from '../components/GridMenu';

class Categories extends Component {
    render(){
        return (
            
            <div className = 'page-container'>
                <h1 className = 'page-heading'>Browse top headlines by category</h1>
                <GridMenu />
            </div>
            
            )
    }
}

export default Categories;