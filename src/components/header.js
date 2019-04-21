import React, { Component } from 'react';
import './header.css';
import '../App.css';

export default class Header extends Component {
    render() {

        return (
            <div className='header-wrapper quarter-height-wrapper grey'>
                <h1> { this.props.geoData } </h1>
                <h2> { this.props.getDisplayTime(this.props.selectedDataObj.time, this.props.isDaySummary) } </h2>
                <h2> { this.props.selectedDataObj.summary } </h2>
            </div>
        )
    }
}