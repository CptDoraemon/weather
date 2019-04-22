import React from "react";

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

export {UpperTextInChart, NoData};