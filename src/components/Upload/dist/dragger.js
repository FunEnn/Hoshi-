"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var Dragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = react_1.useState(false), dragOver = _a[0], setDragOver = _a[1];
    var klass = classnames_1["default"]("Hoshi-uploader-dragger", {
        "is-dragover": dragOver
    });
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(over);
    };
    return (react_1["default"].createElement("div", { className: klass, onDragOver: function (e) {
            handleDrag(e, true);
        }, onDragLeave: function (e) {
            handleDrag(e, false);
        } }, children));
};
exports["default"] = react_1.memo(Dragger);
