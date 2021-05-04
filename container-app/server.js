"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var app = express_1.default();
var port = 8080;
app.get('/', function (_req, res) { return fs_1.default.createReadStream(path_1.default.join(__dirname, 'public', 'index.html')).pipe(res); });
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
