"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = 7000;
app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'ui')));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});