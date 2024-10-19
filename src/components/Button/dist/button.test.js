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
var react_2 = require("@testing-library/react");
var button_1 = require("./button");
var defaultProps = {
    onClick: jest.fn()
};
var testProps = {
    btnType: "primary",
    size: "lg",
    className: "klass"
};
var disabledProps = {
    disabled: true,
    onClick: jest.fn()
};
describe("test button component", function () {
    it("should render the correct default button", function () {
        react_2.render(react_1["default"].createElement(button_1["default"], __assign({}, defaultProps), "Nice"));
        var element = react_2.screen.getByText("Nice");
        expect(element).toBeInTheDocument();
        expect(element === null || element === void 0 ? void 0 : element.tagName).toEqual("BUTTON");
        expect(element).toHaveClass("btn btn-default");
        expect(element.disabled).toBeFalsy();
        react_2.fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });
    it("should render the correct component based on different props", function () {
        react_2.render(react_1["default"].createElement(button_1["default"], __assign({}, testProps), "Nice"));
        var element = react_2.screen.getByText("Nice");
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass("btn-primary btn-lg klass");
    });
    it("should render a link when btnType equals link and href is provided", function () {
        react_2.render(react_1["default"].createElement(button_1["default"], { btnType: "link", href: "http://test.com" }, "Link"));
        var element = react_2.screen.getByText("Link");
        expect(element).toBeInTheDocument();
        expect(element === null || element === void 0 ? void 0 : element.tagName).toEqual("A");
        expect(element).toHaveClass("btn btn-link");
    });
    it("should render a disabled button when disabled prop is true", function () {
        react_2.render(react_1["default"].createElement(button_1["default"], __assign({}, disabledProps), "Nice"));
        var element = react_2.screen.getByText("Nice");
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
    });
});
