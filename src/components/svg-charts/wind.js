import React, {Component} from "react";
import {UpperTextInChart, NoData} from "./common";

export default class HourChartWind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
        this.xInterval = null;

    }
    componentDidMount() {
        this.wrapperWidth = this.props.wrapperWidth;
        this.svgWidth = this.wrapperWidth * 8;
        this.svgHeight = 100;
        this.xInterval = this.svgWidth / (24 * 8 - 1);
        this.setState({
            isReady: true,
        })
    }
    render() {
        const timeTextStyle = {
            fill: 'rgb(150, 150, 150)',
            fontSize: this.props.chartFontSize + 'px'
        };
        const lines = (
            <React.Fragment>
                {
                    this.props.objArray.map((obj, index) => {
                        if ((index) % 3 === 0) {
                            const thatX = index * this.xInterval;

                            const windSpeedMph = obj.windSpeed;
                            const scale = Math.min(Math.max(windSpeedMph / 30, 0.4), 1);
                            const windSpeed = this.props.isCelsius ? Math.round(this.props.mphToKmh(windSpeedMph)) + ' km/h' : Math.round(windSpeedMph) + ' mph';
                            const rotation = obj.windBearing === undefined ? 0 : obj.windBearing;
                            //
                            const arrowSizeMax = 60;
                            const arrowWidth = Math.floor(arrowSizeMax * scale);
                            const arrowHeight = Math.floor(arrowSizeMax * scale);
                            const arrowX = thatX + 0.5 * this.xInterval * 2 - 0.5 * arrowWidth;
                            const arrowY = 50 - 0.5 * arrowHeight;
                            //
                            const hour = new Date(obj.time * 1000).getHours() + ':00';
                            return (
                                <React.Fragment key={obj.time}>
                                    <g>
                                        <svg width={arrowWidth} height={arrowHeight} x={arrowX} y={arrowY} viewBox='0 0 30 30'>
                                            <path d="M9.95,10.87c-0.01,0.35,0.1,0.65,0.34,0.9s0.53,0.37,0.89,0.36c0.34,0.02,0.63-0.1,0.88-0.37l1.66-1.64v10.3
                                            c-0.01,0.35,0.11,0.64,0.36,0.88s0.55,0.35,0.92,0.34c0.34,0.02,0.64-0.09,0.89-0.32s0.39-0.53,0.4-0.88v-10.3l1.64,1.64
                                            c0.23,0.24,0.53,0.37,0.88,0.37c0.36,0,0.66-0.12,0.9-0.36s0.36-0.53,0.36-0.89c-0.02-0.36-0.15-0.64-0.4-0.85l-3.74-3.84
                                            c-0.24-0.23-0.55-0.37-0.92-0.4c-0.37,0.02-0.68,0.16-0.92,0.41l-3.75,3.81C10.08,10.25,9.95,10.53,9.95,10.87z"
                                                  fill='rgb(150, 150, 150)' transform={`rotate(${rotation} 15 15)`}
                                            />
                                        </svg>
                                    </g>
                                    <UpperTextInChart
                                        x={thatX}
                                        y={10}
                                        text={windSpeed}
                                        obj={obj}
                                        selectedDataObj={this.props.selectedDataObj}
                                        setSelectedDataObj={this.props.setSelectedDataObj}
                                        setIsDaySummary={this.props.setIsDaySummary}
                                        chartFontSize={this.props.chartFontSize}
                                    />
                                    <text x={thatX} y={95} style={timeTextStyle}>{ hour }</text>
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
                <svg height={this.svgHeight} width={this.svgWidth} viewBox={`0 0 ${this.svgWidth} ${this.svgHeight}`} style={{transform: `translateX(${svgOffset}px)`}}>
                    { lines }
                    <NoData wrapperWidth={this.wrapperWidth} svgHeight={this.svgHeight} noDataCenterOffset={noDataCenterOffset} chartFontSize={this.props.chartFontSize}/>
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