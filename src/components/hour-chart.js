import React, { Component } from 'react';
import './hour-chart.css';

function UpperTextInChart(props) {
    const tempTextInactive = {
        fill: 'rgb(150, 150, 150)',
        fontSize: '12px',
        fontWeight: 700,
        cursor: 'pointer',
    };
    const tempTextStyleActive = {
        fill: 'rgb(0, 0, 0)',
        fontSize: '12px',
        fontWeight: 700
    };
    const style = props.obj.time === props.selectedDataObj.time ? tempTextStyleActive : tempTextInactive;
    return (
        <text
            x={props.x}
            y={props.y}
            style={style}
            onClick={() => {
                props.setSelectedDataObj(props.obj);
                props.setIsDaySummary(false)
            }}
        >{ props.text }</text>
    )
}
function NoData(props) {
    const style = {
        fill: 'rgba(0, 0, 0, 0.2)',
        fontSize: '14px',
        fontWeight: 700,
        textTransform: 'uppercase',
    };
    const array = [2, 3, 4, 5, 6];
    return (
        <React.Fragment>
        {
            array.map(i =>
            <text
                key={'nodata'+i}
                x={props.wrapperWidth * (i + 0.5) + props.noDataCenterOffset}
                y={props.svgHeight * 0.5}
                style={style}
                textAnchor='middle'
            >Hourly forecasts are only available for next 48 hours</text>
            )
        }
        </React.Fragment>
    )
}

export default class HourChart extends Component {
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
        this.wrapperWidth = window.parseInt(wrapperStyle.getPropertyValue("width"));
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
            stroke: 'rgb(29, 161, 242)',
            strokeWidth: 2
        };
        const fillStyle = {
            fill: 'rgba(29, 161, 242, 0.5)'
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
                                                <UpperTextInChart
                                                    x={lastX}
                                                    y={last.tempText}
                                                    text={temperature}
                                                    obj={this.props.objArray[index - 1]}
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
        const firstDayOffset = (24 - hourOrigin) === 24 ? 0 : 24 - hourOrigin;
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
            <div className='hour-chart-wrapper quarter-height-wrapper' ref={this.wrapperRef}>
                { this.state.isReady ? svg : null }
            </div>
        )
    }
}