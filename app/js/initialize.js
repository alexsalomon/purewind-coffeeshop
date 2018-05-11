
"use strict";

import Router from './util/router';
import common from './routes/common';
import home from './routes/home';

const routes = new Router({
    common,
    home,
});

// Load Events
document.addEventListener('DOMContentLoaded', () => routes.loadEvents());
