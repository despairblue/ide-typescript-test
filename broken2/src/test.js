"use strict";
// String Enums not working.
var Test;
(function (Test) {
    Test["FOO"] = "FOO";
    Test["BAR"] = "BAR";
})(Test || (Test = {}));
console.log(Test.FOO);
