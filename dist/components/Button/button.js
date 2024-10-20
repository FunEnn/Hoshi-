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
import React from "react";
import classNames from "classnames";
export var Button = function (props) {
    var _a;
    var children = props.children, className = props.className, _b = props.disabled, disabled = _b === void 0 ? false : _b, size = props.size, _c = props.btnType, btnType = _c === void 0 ? "default" : _c, href = props.href, restProps = __rest(props, ["children", "className", "disabled", "size", "btnType", "href"]);
    var classes = classNames("btn", className, (_a = {},
        _a["btn-".concat(btnType)] = btnType,
        _a["btn-".concat(size)] = size,
        _a["disabled"] = btnType === "link" && disabled,
        _a));
    if (btnType === "link" && href) {
        return (React.createElement("a", __assign({ className: classes, href: href }, restProps), children));
    }
    return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children));
};
export default Button;
