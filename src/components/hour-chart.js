import React, { Component } from 'react';
import './hour-chart.css';

export default class HourChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
        this.tempMax = null;
        this.tempMin = null;
        this.svgHeight = null;
        this.svgWidth = null;
        this.tempArray = null;
        this.xInterval = null;
        this.topTextArea = null;
        this.bottomTextArea = null;
        this.lowestTemperatureHeight = null;

        this.wrapperRef = React.createRef();
    }
    getCoordinateY(temperature) {
        // NOT INVERTED UNTIL RIGHT BEFORE RETURN
        const usableHeightForChart = this.svgHeight - this.topTextArea - this.bottomTextArea - this.lowestTemperatureHeight;
        const y = ((temperature - this.tempMin) / (this.tempMax - this.tempMin)) * usableHeightForChart;
        const chartTop = this.bottomTextArea + this.lowestTemperatureHeight + y;

        const result = {
            tempText: chartTop + 10,
            chartTop: chartTop,
            chartBot: this.bottomTextArea,
            timeText: 5
        };
        // invert
        for (let key in result) {
            if (result.hasOwnProperty(key)) {
                result[key] = this.svgHeight - result[key];
            }
        }
        return result
    }
    componentDidMount() {
        this.tempArray = this.props.objArray.map(obj => obj.temperature);
        const tempArraySorted = this.tempArray.slice().sort((a, b) => a - b);
        this.tempMax = tempArraySorted[tempArraySorted.length - 1];
        this.tempMin = tempArraySorted[0];
        //
        const wrapperStyle = window.getComputedStyle(this.wrapperRef.current, null);
        const wrapperWidth = window.parseInt(wrapperStyle.getPropertyValue("width"));
        console.log(wrapperWidth);
        this.svgWidth = wrapperWidth * 8;
        this.svgHeight = 100;
        this.xInterval = this.svgWidth / (24 * 8 - 1);
        //
        this.topTextArea = 20;
        this.bottomTextArea = 20;
        this.lowestTemperatureHeight = 10;
        //
        this.setState({isReady: true})
    }
    render() {
        // this.props.objArray;
        const lineStyle = {
            stroke: 'rgb(29, 161, 242)',
            strokeWidth: 2
        };
        const fillStyle = {
            fill: 'rgba(29, 161, 242, 0.5)'
        };
        const textStyle = {
            fill: 'rgb(150, 150, 150)',
            fontSize: '12px'
        };
        const lines = (
            <React.Fragment>
                {
                    this.props.objArray.map((obj, index) => {
                        if (index !== 0) {
                            const last = this.getCoordinateY(this.props.objArray[index - 1].temperature);
                            const that = this.getCoordinateY(obj.temperature);
                            const lastX = (index - 1) * this.xInterval;
                            const thatX = index * this.xInterval;

                            const temperatureF = this.props.objArray[index - 1].temperature;
                            const temperature = this.props.isCelsius ? Math.round(this.props.fToC(temperatureF)) : Math.round(temperatureF);
                            //
                            const hour = new Date(obj.time * 1000).getHours() + ':00';
                            //
                            return (
                                <React.Fragment key={obj.time}>
                                    <line  x1={lastX} y1={last.chartTop} x2={thatX} y2={that.chartTop} style={lineStyle} />
                                    <polygon points={`${lastX},${last.chartBot} ${lastX},${last.chartTop} ${thatX},${that.chartTop} ${thatX},${that.chartBot}`} style={fillStyle} />

                                    {
                                        (index - 1) % 3 === 0 ?
                                            <React.Fragment>
                                                <text x={lastX} y={last.tempText} style={textStyle}>{ temperature }</text>
                                                <text x={lastX} y={last.timeText} style={textStyle}>{ hour }</text>
                                            </React.Fragment>
                                            : null
                                    }


                                </React.Fragment>
                            )
                        } else return null
                    })
                }
            </React.Fragment>
        );
        const svg = (
            <React.Fragment>
                <svg height={this.svgHeight} width={this.svgWidth}>
                    { lines }
                </svg>
            </React.Fragment>
        );
        return (
            <div className='hour-chart-wrapper quarter-height-wrapper' ref={this.wrapperRef}>
                { this.state.isReady ? svg : null }
            </div>
        )
    }
}