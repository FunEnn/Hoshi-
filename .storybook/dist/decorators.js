"use strict";
exports.__esModule = true;
exports.decorators = void 0;
// storyWrapper.js
var react_1 = require("react");
var addon_info_1 = require("@storybook/addon-info");
require("../src/components/Icon/icon");
var wrapperStyle = {
    padding: '20px 40px'
};
var storyWrapper = function (storyFn) {
    return (react_1["default"].createElement("div", { style: wrapperStyle },
        react_1["default"].createElement("h3", null, "\u7EC4\u4EF6\u6F14\u793A"),
        storyFn()));
};
exports.decorators = [storyWrapper, addon_info_1.withInfo];
