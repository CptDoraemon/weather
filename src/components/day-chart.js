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
            <Icon className='daily-icon' icon={props.icon}/>
            <div className='daily-temp'>
                <span className='daily-temp-high'>{ props.temperatureHigh }&#176;</span>
                <span className='daily-temp-low'>{ props.temperatureLow }&#176;</span>
            </div>
        </div>
    )
}

export default class DayChart extends Component {

    dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    getTemperature(temp) {
      if (temp === undefined) {
        return '?'
      }
      const result = this.props.isCelsius ? this.props.fToC(temp) : temp;
      return Math.round(result);
    }

    render() {

        return (
            <div className='daychart-wrapper'>
                { this.props.objArray.map((obj, index) => {
                    return (
                        <Daily
                            key={obj.time}
                            icon={obj.icon}
                            time={this.dayName[(new Date(obj.time * 1000)).getDay()]}
                            temperatureHigh={this.getTemperature(obj.temperatureHigh)}
                            temperatureLow={this.getTemperature(obj.temperatureLow)}
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
