"use strict";
exports.__esModule = true;
exports.SbMenu = exports.VMenu = exports.HMenu = void 0;
var react_1 = require("react");
var menu_1 = require("./menu");
var menuItem_1 = require("./menuItem");
var subMenu_1 = require("./subMenu");
exports["default"] = {
    title: "Menu Component",
    component: menu_1.Menu
};
exports.HMenu = function () {
    return (react_1["default"].createElement(menu_1.Menu, { mode: "horizontal" },
        react_1["default"].createElement(menuItem_1.MenuItem, { key: "1" }, "nav 1"),
        react_1["default"].createElement(menuItem_1.MenuItem, { key: "2" }, "nav 2"),
        react_1["default"].createElement(menuItem_1.MenuItem, { key: "3" }, "nav 3"),
        react_1["default"].createElement(menuItem_1.MenuItem, { key: "4" }, "nav 4")));
};
exports.HMenu.storyName = "横向 Menu";
exports.VMenu = function () {
    return (react_1["default"].createElement(menu_1.Menu, { mode: "vertical" },
        react_1["default"].createElement(menuItem_1.MenuItem, { key: "1" }, "nav 1"),
        react_1["default"].createElement(menuItem_1.MenuItem, { key: "2" }, "nav 2"),
        react_1["default"].createElement(menuItem_1.MenuItem, { key: "3" }, "nav 3"),
        react_1["default"].createElement(menuItem_1.MenuItem, { key: "4" }, "nav 4")));
};
exports.VMenu.storyName = "纵向 Menu";
exports.SbMenu = function () {
    return (react_1["default"].createElement(menu_1.Menu, null,
        react_1["default"].createElement(menuItem_1.MenuItem, { key: "1" }, "nav 1"),
        react_1["default"].createElement(subMenu_1["default"], { title: "sub menu" },
            react_1["default"].createElement(menuItem_1.MenuItem, { key: "2" }, "nav 2"),
            react_1["default"].createElement(menuItem_1.MenuItem, { key: "3" }, "nav 3"),
            react_1["default"].createElement(menuItem_1.MenuItem, { key: "4" }, "nav 4")),
        react_1["default"].createElement(menuItem_1.MenuItem, { key: "2" }, "nav 2")));
};
exports.SbMenu.storyName = "分类 Menu";
