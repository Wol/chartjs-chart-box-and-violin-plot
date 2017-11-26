'use strict';

let Chart = require('chart.js');
Chart = typeof (Chart) === 'function' ? Chart : window.Chart;

require('./elements/boxandwhiskers.js')(Chart);
require('./controllers/boxplot.js')(Chart);
require('./scale/boxplotLinear.js')(Chart);
require('./scale/boxplotLogarithmic.js')(Chart);