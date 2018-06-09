
"use strict";

import Router from './util/router';
import common from './routes/common';
import home from './routes/home';
import contact from './routes/contact';

const routes = new Router({
    common,
    home,
    contact,
});

// Load Events
document.addEventListener('DOMContentLoaded', () => routes.loadEvents());
