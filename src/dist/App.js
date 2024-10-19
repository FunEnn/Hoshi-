"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var axios_1 = require("axios");
var uploadList_1 = require("./components/Upload/uploadList");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
var App = function () {
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (files) {
            var uploadedFile = files[0];
            var formData = new FormData();
            formData.append(uploadedFile.name, uploadedFile);
            axios_1["default"]
                .post("https://jsonplaceholder.typicode.com/posts", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(function (res) {
                console.log(res);
            })["catch"](function (err) {
                console.log(err);
            });
        }
    };
    var fileList = [
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
    return (react_1["default"].createElement("div", { className: "App", style: { marginTop: "100px", marginLeft: "100px" } },
        react_1["default"].createElement("input", { type: "file", name: "myFile", onChange: handleFileChange }),
        react_1["default"].createElement(uploadList_1["default"], { fileList: fileList })));
};
exports["default"] = App;
