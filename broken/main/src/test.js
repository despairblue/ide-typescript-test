"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dep = require("dep");
const path_1 = require("path");
const log = dep(require(path_1.join(__dirname, "..", "package.json")).name);
log("hi");
