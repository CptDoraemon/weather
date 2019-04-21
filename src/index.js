import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WithWeatherQueryApp from './App';

function Index(props) {
    return (
        <div className='index-wrapper'>
            <WithWeatherQueryApp />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

