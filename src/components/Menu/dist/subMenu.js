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
var react_1 = require("react");
var classnames_1 = require("classnames");
var menu_1 = require("./menu");
var icon_1 = require("../Icon/icon");
var transition_1 = require("../Transition/transition");
var SubMenu = function (_a) {
    var index = _a.index, title = _a.title, children = _a.children, className = _a.className;
    var context = react_1.useContext(menu_1.MenuContext);
    var openedSubMenus = context.defaultOpenSubMenus;
    var isOpend = index && context.mode === "vertical"
        ? openedSubMenus.includes(index)
        : false;
    var _b = react_1.useState(isOpend), menuOpen = _b[0], setOpen = _b[1];
    var classes = classnames_1["default"]("menu-item submenu-item", className, {
        "is-active": context.index === index,
        "is-opened": menuOpen,
        "is-vertical": context.mode === "vertical"
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var clickEvents = context.mode === "vertical"
        ? {
            onClick: handleClick
        }
        : {};
    var hoverEvents = context.mode !== "vertical"
        ? {
            onMouseEnter: function (e) {
                handleMouse(e, true);
            },
            onMouseLeave: function (e) {
                handleMouse(e, false);
            }
        }
        : {};
    var renderChildren = function () {
        var subMenuClasses = classnames_1["default"]("Hoshi-submenu", {
            "menu-opened": menuOpen
        });
        var childrenComponent = react_1["default"].Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === "MenuItem") {
                return react_1["default"].cloneElement(childElement, {
                    index: index + "-" + i
                });
            }
            else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component");
            }
        });
        return (react_1["default"].createElement(transition_1["default"], { "in": menuOpen, timeout: 300, animation: "zoom-in-top" },
            react_1["default"].createElement("ul", { className: subMenuClasses }, childrenComponent)));
    };
    return (react_1["default"].createElement("li", __assign({ key: index, className: classes }, hoverEvents),
        react_1["default"].createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            react_1["default"].createElement(icon_1["default"], { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = "SubMenu";
exports["default"] = SubMenu;
