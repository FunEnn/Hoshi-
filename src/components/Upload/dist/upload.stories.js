"use strict";
exports.__esModule = true;
exports.SimpleUpload = void 0;
var react_1 = require("react");
var addon_actions_1 = require("@storybook/addon-actions");
var upload_1 = require("./upload");
var icon_1 = require("../Icon/icon");
exports["default"] = {
    title: "Upload",
    component: upload_1["default"]
};
var defaultFileList = [
    {
        uid: "123",
        size: 1234,
        name: "hello.md",
        status: "uploading",
        percent: 30
    },
    { uid: "122", size: 1234, name: "xyz.md", status: "success", percent: 30 },
    { uid: "121", size: 1234, name: "eyiha.md", status: "error", percent: 30 },
];
var checkFileSize = function (file) {
    if (Math.round(file.size / 1024) > 50) {
        alert("File too large, the max file size is 50KB");
        return false;
    }
    return true;
};
var filePromise = function (file) {
    var newFile = new File([file], "new_name.jpg", { type: file.type });
    return Promise.resolve(newFile);
};
exports.SimpleUpload = function () {
    return (react_1["default"].createElement(upload_1["default"], { action: "https://run.mocky.io/v3/8fd886bf-a7f7-4ebc-84af-6adb261dbee4", onChange: addon_actions_1.action("changed"), onRemove: addon_actions_1.action("removed"), name: "fileName", data: { key: "value" }, headers: { "X-Powered-By": "Hello World" }, accept: ".jpg", multiple: true, drag: true },
        react_1["default"].createElement(icon_1["default"], { icon: "upload", theme: "secondary", size: "5x" }),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("p", null, "Drag file over to upload")));
};
