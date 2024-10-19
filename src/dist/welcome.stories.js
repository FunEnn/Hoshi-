"use strict";
exports.__esModule = true;
exports.Welcome = void 0;
var react_1 = require("react");
// 欢迎组件
var WelcomePage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("h1", null, "\u6B22\u8FCE\u6765\u5230 Hoshi \u7EC4\u4EF6\u5E93"),
        react_1["default"].createElement("h3", null, "\u5B89\u88C5\u8BD5\u8BD5"),
        react_1["default"].createElement("code", null, "npm install ennhoshi --save")));
};
// 欢迎组件的故事
var WelcomeStory = function () { return react_1["default"].createElement(WelcomePage, null); };
exports["default"] = {
    title: 'Welcome page',
    component: WelcomePage,
    parameters: {
        info: { disable: true }
    }
};
// 导出故事
exports.Welcome = WelcomeStory;
