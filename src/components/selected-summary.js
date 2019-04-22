import React, { Component } from 'react';
import './selected-summary.css';
import '../App.css'
import Icon from './icon';

function UnitSwitcher(props) {
    return (
        <div className='unit-switcher-wrapper'>
            {/*c*/}
            <span
                className={!props.isCelsius ? 'unit-switcher-button-inactive' : 'unit-switcher-button-active'}
                onClick={() => props.unitSwitcher(false)}>&#176;C</span>
            <span> | </span>
            {/*f*/}
            <span
                onClick={() => props.unitSwitcher(true)}
                className={props.isCelsius ? 'unit-switcher-button-inactive' : 'unit-switcher-button-active'}>&#176;F</span>
        </div>
    )
}
function SelectedSummaryLeft(props) {
    return (
        <div className='selected-summary-left-wrapper'>
            <Icon icon={props.icon} className='selected-summary-icon'/>
            <div className='selected-summary-temperature'> {props.temperature} </div>
            <UnitSwitcher unitSwitcher={props.unitSwitcher} isCelsius={props.isCelsius}/>
        </div>
    )
}
function SelectedSummaryRight(props) {
    return (
        <div className='selected-summary-right-wrapper grey'>
            <div className='selected-summary-right-item'>Precipitation: {props.precipitation}%</div>
            <div className='selected-summary-right-item'>Humidity: {props.humidity}%</div>
            <div className='selected-summary-right-item'>Wind: {props.windSpeed}</div>
        </div>
    )
}
export default class SelectedSummary extends Component {
    render() {
        const temperatureF = this.props.selectedDataObj.temperature === undefined ? this.props.selectedDataObj.temperatureHigh : this.props.selectedDataObj.temperature;
        let temperature = this.props.isCelsius ? this.props.fToC(temperatureF) : temperatureF;
        temperature = Math.round(temperature);
        //
        const precipitation = Math.round(this.props.selectedDataObj.precipProbability * 100);
        //
        const humidity = Math.round(this.props.selectedDataObj.humidity * 100);
        //
        const mph = this.props.selectedDataObj.windSpeed;
        const windSpeed = this.props.isCelsius ? Math.round(this.props.mphToKmh(mph)) + ' km/h': Math.round(mph) + ' mph';

        return (
            <div className='selected-summary-wrapper'>
                <SelectedSummaryLeft icon={this.props.selectedDataObj.icon} temperature={temperature} unitSwitcher={this.props.unitSwitcher} isCelsius={this.props.isCelsius}/>
                <SelectedSummaryRight precipitation={precipitation} humidity={humidity} windSpeed={windSpeed}/>
            </div>
        )
    }
}