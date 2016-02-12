"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from './Application.jsx';

window.app = ReactDOM.render(<Application />, document.getElementById('content'));
