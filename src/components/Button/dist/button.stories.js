"use strict";
exports.__esModule = true;
exports.ButtonWithType = exports.ButtonWithSize = exports.DefaultButton = void 0;
var react_1 = require("react");
var button_1 = require("./button");
var addon_actions_1 = require("@storybook/addon-actions");
// 默认导出，包含组件的元数据
exports["default"] = {
    title: 'Button Component',
    component: button_1["default"]
};
// 命名导出，定义具体的故事
exports.DefaultButton = function () { return (react_1["default"].createElement(button_1["default"], { onClick: addon_actions_1.action('clicked') }, "default button")); };
exports.DefaultButton.storyName = '默认 Button';
exports.ButtonWithSize = function () { return (react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(button_1["default"], { size: "lg" }, "large button"),
    react_1["default"].createElement(button_1["default"], { size: "sm" }, "small button"))); };
exports.ButtonWithSize.storyName = '不同尺寸 Button';
exports.ButtonWithType = function () { return (react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(button_1["default"], { btnType: "primary" }, "primary button"),
    react_1["default"].createElement(button_1["default"], { btnType: "danger" }, "danger button"),
    react_1["default"].createElement(button_1["default"], { btnType: "link", href: "https://google.com" }, "link button"))); };
exports.ButtonWithType.storyName = '不同类型 Button';
