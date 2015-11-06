"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial',
            counter: -1,
            when: ''
        };
    }
    tick() {
        $.ajax('/api/hello').done((data) => this.setState(data));
    }
    render() {
        return (
            <div>Hello {this.state.name} #{this.state.counter} at {this.state.timestamp}</div>
        );
    }
    componentDidMount() {
        this.interval = window.setInterval(this.tick.bind(this), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}
