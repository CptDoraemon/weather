import React, { Component } from 'react';
import './loading.css';
import '../App.css';

export default class Loading extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isTimeout: false
        };
        this.timeout = null;
        this.showTimeoutMessage = this.showTimeoutMessage.bind(this);
        this.refresh = this.refresh.bind(this);
    }
    refresh() {
        if (!this.state.isTimeout) return;
        window.location.reload()
    }
    showTimeoutMessage() {
        this.setState({
            isTimeout: true
        })
    }
    componentDidMount() {
        this.timeout = setTimeout(this.showTimeoutMessage, 5000)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
        this.timeout = null;
    }
    render() {
        const text = 'loading...';
        const spanArray = [];
        for (let i=0; i<text.length; i++) {
            const style = {
                animationDelay: i*0.2+'s'
            };
            const span = <span key={'loading'+i} className='loading-span' style={style}>{text.charAt(i)}</span>;
            spanArray.push(span)
        }

        const timeoutWrapper = this.state.isTimeout ? 'loading-timeout-active' : 'loading-timeout-inactive';
        return (
            <div className='loading-wrapper grey'>
                <div className={timeoutWrapper}>
                    <div className='loading-timeout-message'>This app relies on free tiers of the weather and geocoding API services, the responses can be slow sometimes.</div>
                </div>
                <div className='loading-text-wrapper grey'>
                    { spanArray }
                </div>
                <div className={timeoutWrapper}>
                    <div className='loading-refresher' onClick={this.refresh}>refresh?</div>
                </div>
            </div>
        )
    }
}