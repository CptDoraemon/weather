import React, { Component } from 'react';

export default function withWeatherQuery(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoaded: false,
                isFailed: false
            };
            this.latitude = null;
            this.longitude = null;
            this.weatherData = null;
            this.geoData = null;
            this.errorMessage = '';
            this.sendQuery = this.sendQuery.bind(this);
            this.useMockLocation = this.useMockLocation.bind(this);
            this.getGeoLocation = this.getGeoLocation.bind(this);
        }

        sendQuery() {
            let isWeatherReady = false;
            let isGeocodingReady = false;
            const origin = 'https://www.xiaoxihome.com/';
            // const origin = 'http://localhost:5000/';

            const fetchOptions = {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                credentials: 'same-origin',
                headers: {
                    'content-type': 'application/json'
                },
                redirect: 'follow',
                referrer: 'client',
                body: JSON.stringify({
                    latitude: this.latitude,
                    longitude: this.longitude
                })
            };
            fetch(origin + 'api/weather', fetchOptions)
                .then(res => res.json())
                .then(json => {
                    if (json.status === 'success') {
                        this.weatherData = json.data;
                        isWeatherReady = true;
                        if (isWeatherReady && isGeocodingReady) this.setState({isLoaded: true})
                    } else {
                        this.errorMessage = json.data;
                        this.setState({isFailed: true})
                    }
                })
                .catch(e => console.log(e));

            fetch(origin + 'api/reversegeocoding', fetchOptions)
                .then(res => res.json())
                .then(json => {
                    if (json.status === 'success') {
                        this.geoData = json.data;
                        console.log(json.data);
                        isGeocodingReady = true;
                        if (isWeatherReady && isGeocodingReady) this.setState({isLoaded: true})
                    } else {
                        this.errorMessage = json.data;
                        this.setState({isFailed: true})
                    }
                })
                .catch(e => console.log(e))
        }
        useMockLocation() {
            // in case of geolocation no available or denied
            this.latitude = 43.70011;
            this.longitude = -79.4163;
            this.sendQuery()
        }
        getGeoLocation() {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                    this.sendQuery()
                }, this.useMockLocation);
            } else {
                this.useMockLocation();
            }
        }
        componentDidMount() {
            this.getGeoLocation()
        }
        render() {
            const injectProps = {
                isLoaded: this.state.isLoaded,
                weatherData: this.weatherData,
                geoData: this.geoData,
                isFailed: this.state.isFailed,
                errorMessage: this.errorMessage
            };
            return (
                <WrappedComponent {...this.props} {...injectProps}/>
            )
        }
    }
}