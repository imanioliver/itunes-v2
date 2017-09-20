import React, { Component } from 'react';
import Song from './Song.js';


export default class SearchResults extends Component{

    render(){
        return(
            <div className="container">
                <Song/>
            </div>
        )
    }
}
