import React, {Component} from 'react';
import './App.css';

const pcg = require('./../package.json');

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> React App Playground</h1>
                <span>v{pcg.version}</span>
            </div>
        );
    }
}

export default App;
