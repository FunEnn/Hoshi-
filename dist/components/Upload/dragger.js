import React, { memo, useState } from "react";
import classNames from "classnames";
var Dragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = useState(false), dragOver = _a[0], setDragOver = _a[1];
    var klass = classNames("Hoshi-uploader-dragger", {
        "is-dragover": dragOver,
    });
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(over);
    };
    return (React.createElement("div", { className: klass, onDragOver: function (e) {
            handleDrag(e, true);
        }, onDragLeave: function (e) {
            handleDrag(e, false);
        } }, children));
};
export default memo(Dragger);
