import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import DayChart from './components/day-chart';
import HourChart from './components/hour-chart';
import SelectedSummary from "./components/selected-summary";
import Loading from './components/loading';
import withWeatherQuery from './utilities/weather-query';

class AppLoaded extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDataObj: this.props.weatherData.currently,
            isDaySummary: false,
            isCelsius: true,
            hourChartOffset: /*day*/0
        };
        this.unitSwitcher = this.unitSwitcher.bind(this);
        this.setSelectedDataObj = this.setSelectedDataObj.bind(this);
        this.setIsDaySummary = this.setIsDaySummary.bind(this);
        this.setHourChartOffset = this.setHourChartOffset.bind(this);
    }
    getDisplayTime(timeStamp, isDayOnly) {
        const dateObj = new Date(timeStamp * 1000);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOnly = days[dateObj.getDay()];
        const hours = dateObj.getHours() < 10 ? '0' + dateObj.getHours() : dateObj.getHours();
        const minutes = dateObj.getMinutes() < 10 ? '0' + dateObj.getMinutes() : dateObj.getMinutes();
        const full = dayOnly + ' ' + hours + ':' + minutes;
        return isDayOnly ? dayOnly : full
    }
    fToC(f) {
        return ((f - 32) * 5/9);
    }
    mphToKmh(mph) {
        return (mph / 1.609);
    }
    unitSwitcher(isCelsiusNow) {
        this.setState({isCelsius: !isCelsiusNow})
    }
    setSelectedDataObj(obj) {
        this.setState({
            selectedDataObj: obj
        })
    }
    setIsDaySummary(trueOrFalse) {
        this.setState({isDaySummary: trueOrFalse})
    }
    setHourChartOffset(day) {
        this.setState({hourChartOffset: day})
    }
    render() {
        const states = {
            isDaySummary: this.state.isDaySummary,
            isCelsius: this.state.isCelsius
        };
        const data = {
            geoData: this.props.geoData,
            weatherData: this.props.weatherData,
            selectedDataObj: this.state.selectedDataObj,
        };
        const tools = {
            getDisplayTime: this.getDisplayTime,
            fToC: this.fToC,
            mphToKmh: this.mphToKmh,
            unitSwitcher: this.unitSwitcher,
            setSelectedDataObj: this.setSelectedDataObj
        };
        const injectProps = {...states, ...data, ...tools};
        return (
            <React.Fragment>
                <Header {...injectProps}/>
                <SelectedSummary {...injectProps}/>
                <HourChart
                    objArray={this.props.weatherData.hourly.data}
                    selectedDataObj={this.state.selectedDataObj}
                    isCelsius={this.state.isCelsius}
                    fToC={this.fToC}
                    mphToKmh={this.mphToKmh}
                    setSelectedDataObj={this.setSelectedDataObj}
                    setIsDaySummary={this.setIsDaySummary}
                    hourChartOffset={this.state.hourChartOffset}
                />

                <DayChart
                    objArray={this.props.weatherData.daily.data}
                    fToC={this.fToC}
                    setSelectedDataObj={this.setSelectedDataObj}
                    setIsDaySummary={this.setIsDaySummary}
                    isCelsius={this.state.isCelsius}
                    setHourChartOffset={this.setHourChartOffset}
                />
            </React.Fragment>
        )
    }
}
function Attributions(props) {
    return (
        <div className='attributions-wrapper grey'>
            <a href='https://darksky.net/poweredby/' target='_blank' rel='noopener noreferrer'>Powered by Dark Sky</a>
            <a href='https://locationiq.com/' target='_blank' rel='noopener noreferrer'>Search by LocationIQ.com</a>
            <a href='https://erikflowers.github.io/weather-icons/' target='_blank' rel='noopener noreferrer'>The Weather Icons</a>
        </div>
    )
}
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='app-wrapper'>
                    <div className='app-safe-area'>
                    { this.props.isFailed ? this.props.errorMessage
                        : this.props.isLoaded ? <AppLoaded {...this.props} /> : <Loading />
                    }
                    </div>
                </div>
                <Attributions />
            </React.Fragment>
        )
    }
}

const WithWeatherQueryApp = withWeatherQuery(App);
export default WithWeatherQueryApp;
