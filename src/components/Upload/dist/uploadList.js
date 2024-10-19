"use strict";
exports.__esModule = true;
var react_1 = require("react");
var icon_1 = require("../Icon/icon");
var progress_1 = require("../Progress/progress");
var UploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    return (react_1["default"].createElement("ul", { className: "Hoshi-upload-list" }, fileList === null || fileList === void 0 ? void 0 : fileList.map(function (item) {
        return (react_1["default"].createElement("li", { className: "Hoshi-upload-list-item", key: item.uid },
            react_1["default"].createElement("span", { className: "file-name file-name-" + item.status },
                react_1["default"].createElement(icon_1["default"], { icon: "file-alt", theme: "secondary" }),
                item.name),
            react_1["default"].createElement("span", { className: "file-status" },
                item.status === "uploading" && (react_1["default"].createElement(icon_1["default"], { icon: "spinner", spin: true, theme: "primary" })),
                item.status === "success" && (react_1["default"].createElement(icon_1["default"], { icon: "check-circle", theme: "success" })),
                item.status === "error" && (react_1["default"].createElement(icon_1["default"], { icon: "times-circle", theme: "danger" }))),
            react_1["default"].createElement("span", { className: "file-actions" },
                react_1["default"].createElement(icon_1["default"], { icon: "times", onClick: function () { return onRemove && onRemove(item); } })),
            item.status === "uploading" && (react_1["default"].createElement(progress_1["default"], { percent: item.percent || 0 }))));
    })));
};
exports["default"] = react_1.memo(UploadList);
