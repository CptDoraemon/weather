import React, { Component } from 'react';
import './hour-chart.css';
import HourChartTemperature from './svg-charts/temperature';
import HourChartPrecipitation from './svg-charts/precipitation';
import HourChartWind from "./svg-charts/wind";

function HourChartSwitcherButton(props) {
    const wrapperCSS = props.mode === props.type
        ? 'hour-chart-switcher-button-active'
        : 'hour-chart-switcher-button';
    return (
        <React.Fragment>
            <div className={wrapperCSS} onClick={() => props.setMode(props.type)}>{props.type}</div>
        </React.Fragment>
    )
}
function HourChartSwitcher(props) {
    return (
        <div className='hour-chart-switcher-wrapper'>
            {
                ['temperature' , 'precipitation', 'wind'].map(type => <HourChartSwitcherButton key={type} mode={props.mode} type={type} setMode={props.setMode}/>)
            }
        </div>
    )
}
export default class HourChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'temperature', // temperature, precipitation, wind
            wrapperWidth: null,
            isReady: false
        };
        this.setMode = this.setMode.bind(this);
        this.wrapperRef = React.createRef();
    }
    setMode(mode) {
        if (this.state.mode !== mode) {
            this.setState({mode: mode})
        }
    }
    componentDidMount() {
        const wrapperStyle = window.getComputedStyle(this.wrapperRef.current, null);
        const wrapperWidth = window.parseInt(wrapperStyle.getPropertyValue("width"));
        this.setState({
            wrapperWidth: wrapperWidth,
            isReady: true
        })
    }
    render() {
        return (
            <div className='hour-chart-wrapper quarter-height-wrapper' ref={this.wrapperRef}>
                <HourChartSwitcher setMode={this.setMode} mode={this.state.mode}/>
                {
                    !this.state.isReady
                        ? null
                        : this.state.mode === 'temperature'
                    ? <HourChartTemperature wrapperWidth={this.state.wrapperWidth} {...this.props}/>
                        : this.state.mode === 'precipitation'
                            ? <HourChartPrecipitation wrapperWidth={this.state.wrapperWidth} {...this.props}/>
                            : <HourChartWind wrapperWidth={this.state.wrapperWidth} {...this.props}/>

                }
            </div>
        )
    }
}