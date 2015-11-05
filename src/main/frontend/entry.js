"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox!.
            </div>
        );
    }
});

$(ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
));
