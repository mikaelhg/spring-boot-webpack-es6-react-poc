"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

class HelloMessage extends React.Component {
    render() {
        return (
            <div>Hello {this.props.name}</div>
        );
    }
}

$(ReactDOM.render(<HelloMessage name="World" />, document.getElementById('content')));
