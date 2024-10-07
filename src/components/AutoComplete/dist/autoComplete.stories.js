"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.SimpleComplete = void 0;
var react_1 = require("react");
var addon_actions_1 = require("@storybook/addon-actions");
var autoComplete_1 = require("./autoComplete");
exports["default"] = {
    title: "AutoComplete",
    component: autoComplete_1.AutoComplete
};
exports.SimpleComplete = function () {
    var lakers = [
        "bradley beal",
        "stephen curry",
        "lebron james",
        "kevin durant",
    ];
    var lakersNumber = [
        {
            value: "lakers",
            number: 17
        },
        {
            value: "warriors",
            number: 30
        },
        {
            value: "bulls",
            number: 23
        },
    ];
    // const handleFetch = (query: string) => {
    //   return lakers.filter(item => item.includes(query)).map((item) => ({ value: item }));
    // };
    //   const handleFetch = (query: string) => {
    //     return lakersNumber.filter((item) => item.value.includes(query));
    //   };
    var handleFetch = function (query) {
        return fetch("https://api.github.com/search/users?q=" + query)
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var items = _a.items;
            return items.slice(0, 10).map(function (item) { return (__assign({ value: item.login }, item)); });
        });
    };
    var renderOption = function (item) {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", null,
                "Name: ",
                item.login)));
    };
    return (react_1["default"].createElement(autoComplete_1.AutoComplete, { fetchSuggestions: handleFetch, onSelect: addon_actions_1.action("selected"), renderOption: renderOption }));
};
