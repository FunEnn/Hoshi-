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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Icon = function (props) {
    var _a;
    // icon-primary
    var className = props.className, theme = props.theme, restProps = __rest(props, ["className", "theme"]);
    var classes = classnames_1["default"]("Hoshi-icon", className, (_a = {},
        _a["icon-" + theme] = theme,
        _a));
    return react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, __assign({ className: classes }, restProps));
};
exports["default"] = Icon;
