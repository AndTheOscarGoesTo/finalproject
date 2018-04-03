'use strict';

var _path = require('path');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _routing = require('./middleware/routing.mw');

var _routing2 = _interopRequireDefault(_routing);

var _passport = require('./config/passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLIENT_PATH = (0, _path.join)(__dirname, '../../client'); // require("dotenv").config();
// require("dotenv").config();
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_PASSWORD);


var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.static(CLIENT_PATH));
app.use(_express2.default.json());

(0, _passport2.default)(app);

app.use('/api', _routes2.default);

app.use(_routing2.default);

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});