import React from 'react';

export default class Icon extends React.Component {
    render() {
        const availableIcons = ['clear-day', 'clear-night', 'rain', 'snow', 'sleet', 'wind', 'fog', 'cloudy', 'partly-cloudy-day', 'partly-cloudy-night'];
        const filename = availableIcons.indexOf(this.props.icon) === -1 ? 'na.svg' : this.props.icon + '.svg';
        return (
            <img src={process.env.PUBLIC_URL + '/svg/' + filename} className={this.props.className} alt={this.props.icon} />
        )
    }
};