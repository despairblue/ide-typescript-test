"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const debug = require("debug");
const pack = require(path_1.join(__dirname, "..", "package.json"));
const log = debug(pack.name);
// String Enums not working.
var Test;
(function (Test) {
    Test["FOO"] = "FOO";
    Test["BAR"] = "BAR";
})(Test || (Test = {}));
log(Test.FOO);
