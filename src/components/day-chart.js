import React, { Component } from 'react';
import './day-chart.css';
import '../App.css';
import Icon from './icon';

function Daily(props) {
    return (
        <div
            className='daily-wrapper'
            onClick={()=>{
                props.setSelectedDataObj(props.obj);
                props.setIsDaySummary(true);
                props.setHourChartOffset(props.dayIndex)
            }}
        >
            { props.time }
            <Icon width='50px' height='50px' icon={props.icon}/>
            <div className='daily-temp'>
                <span className='daily-temp-high'>{ props.temperatureHigh }&#176;</span>
                <span className='daily-temp-low'>{ props.temperatureLow }&#176;</span>
            </div>
        </div>
    )
}

export default class DayChart extends Component {
    render() {
        const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return (
            <div className='daychart-wrapper quarter-height-wrapper'>
                { this.props.objArray.map((obj, index) => {
                    const temperatureHigh = this.props.isCelsius ? Math.round(this.props.fToC(obj.temperatureHigh)) : Math.round(obj.temperatureHigh);
                    const temperatureLow = this.props.isCelsius ? Math.round(this.props.fToC(obj.temperatureLow)) : Math.round(obj.temperatureLow);
                    return (
                        <Daily
                            key={obj.time}
                            icon={obj.icon}
                            time={dayName[(new Date(obj.time * 1000)).getDay()]}
                            temperatureHigh={temperatureHigh}
                            temperatureLow={temperatureLow}
                            obj={obj}
                            setSelectedDataObj={this.props.setSelectedDataObj}
                            setIsDaySummary={this.props.setIsDaySummary}
                            setHourChartOffset={this.props.setHourChartOffset}
                            dayIndex={index}
                        />
                        )
                }) }
            </div>
        )
    }
}