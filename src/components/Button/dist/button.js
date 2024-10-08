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
exports.Button = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
exports.Button = function (props) {
    var _a;
    var children = props.children, className = props.className, _b = props.disabled, disabled = _b === void 0 ? false : _b, size = props.size, _c = props.btnType, btnType = _c === void 0 ? "default" : _c, href = props.href, restProps = __rest(props, ["children", "className", "disabled", "size", "btnType", "href"]);
    var classes = classnames_1["default"]("btn", className, (_a = {},
        _a["btn-" + btnType] = btnType,
        _a["btn-" + size] = size,
        _a["disabled"] = btnType === "link" && disabled,
        _a));
    if (btnType === "link" && href) {
        return (react_1["default"].createElement("a", __assign({ className: classes, href: href }, restProps), children));
    }
    return (react_1["default"].createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children));
};
exports["default"] = exports.Button;
