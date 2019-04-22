import React, {Component} from "react";
import {UpperTextInChart, NoData} from "./common";

export default class HourChartTemperature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
        this.tempMax = null;
        this.tempMin = null;
        this.wrapperWidth = null;
        this.svgHeight = null;
        this.svgWidth = null;
        this.tempArray = null;
        this.xInterval = null;
        this.topTextArea = null;
        this.bottomTextArea = null;
        this.lowestTemperatureHeight = null;

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
        this.wrapperWidth = this.props.wrapperWidth;
        this.svgWidth = this.wrapperWidth * 8;
        this.svgHeight = 100;
        this.xInterval = this.svgWidth / (24 * 8 - 1);
        //
        this.topTextArea = 20;
        this.bottomTextArea = 20;
        this.lowestTemperatureHeight = 10;
        //
        this.setState({
            isReady: true,
        })
    }
    render() {
        // this.props.objArray;
        const lineStyle = {
            //stroke: 'rgba(29, 161, 242, 0.8)',
            stroke: 'rgba(249, 166, 2, 0.8)',
            strokeWidth: 2
        };
        const fillStyle = {
            //fill: 'rgba(29, 161, 242, 0.4)'
            fill: 'rgba(249, 166, 2, 0.4)'
        };
        const timeTextStyle = {
            fill: 'rgb(150, 150, 150)',
            fontSize: '12px'
        };
        const lines = (
            <React.Fragment>
                {
                    this.props.objArray.map((obj, index) => {
                        if (index !== 0) {
                            const lastObj = this.props.objArray[index - 1];
                            const last = this.getCoordinateY(lastObj.temperature);
                            const that = this.getCoordinateY(obj.temperature);
                            const lastX = (index - 1) * this.xInterval;
                            const thatX = index * this.xInterval;

                            const temperatureF = lastObj.temperature;
                            const temperature = this.props.isCelsius ? Math.round(this.props.fToC(temperatureF)) : Math.round(temperatureF);
                            //
                            const hour = new Date(lastObj.time * 1000).getHours() + ':00';
                            //
                            return (
                                <React.Fragment key={obj.time}>
                                    <line  x1={lastX} y1={last.chartTop} x2={thatX} y2={that.chartTop} style={lineStyle} />
                                    <polygon points={`${lastX},${last.chartBot} ${lastX},${last.chartTop} ${thatX},${that.chartTop} ${thatX},${that.chartBot}`} style={fillStyle} />

                                    {
                                        (index - 1) % 3 === 0 ?
                                            <React.Fragment>
                                                <UpperTextInChart
                                                    x={lastX}
                                                    y={last.tempText}
                                                    text={temperature}
                                                    obj={lastObj}
                                                    selectedDataObj={this.props.selectedDataObj}
                                                    setSelectedDataObj={this.props.setSelectedDataObj}
                                                    setIsDaySummary={this.props.setIsDaySummary}
                                                />
                                                <text x={lastX} y={last.timeText} style={timeTextStyle}>{ hour }</text>
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
        // svg offset
        let svgOffset;
        const hourOrigin = new Date(this.props.objArray[0].time * 1000).getHours();
        const firstDayOffset = 24 - hourOrigin;
        if (this.props.hourChartOffset === 0) {
            svgOffset = 0;
        } else if (this.props.hourChartOffset === 1) {
            svgOffset = - firstDayOffset * this.xInterval
        } else {
            svgOffset = - (firstDayOffset + (this.props.hourChartOffset - 1) * 24) * this.xInterval
        }
        //
        const noDataCenterOffset = firstDayOffset * this.xInterval;
        //
        const svg = (
            <React.Fragment>
                <svg height={this.svgHeight} width={this.svgWidth} style={{transform: `translateX(${svgOffset}px)`}}>
                    { lines }
                    <NoData wrapperWidth={this.wrapperWidth} svgHeight={this.svgHeight} noDataCenterOffset={noDataCenterOffset}/>
                </svg>
            </React.Fragment>
        );
        return (
            <React.Fragment>
                { this.state.isReady ? svg : null }
            </React.Fragment>
        )
    }
}