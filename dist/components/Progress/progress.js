import React, { memo } from "react";
var Progress = function (props) {
    var percent = props.percent, strokeHeight = props.strokeHeight, showText = props.showText, styles = props.styles, theme = props.theme, children = props.children;
    return (React.createElement("div", { className: "Hoshi-progress-bar", style: styles },
        React.createElement("div", { className: "Hoshi-progress-bar-outer", style: { height: "".concat(strokeHeight, "px") } },
            React.createElement("div", { className: "Hoshi-progress-bar-inner color-".concat(theme), style: { width: "".concat(percent, "%") } }, showText && React.createElement("span", { className: "inner-text" }, "".concat(percent, "%"))))));
};
export default memo(Progress);
