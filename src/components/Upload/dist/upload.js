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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Upload = void 0;
var react_1 = require("react");
var axios_1 = require("axios");
var uploadList_1 = require("./uploadList");
var dragger_1 = require("./dragger");
exports.Upload = function (props) {
    var action = props.action, defaultFileList = props.defaultFileList, beforeUpload = props.beforeUpload, onProgress = props.onProgress, onSuccess = props.onSuccess, onError = props.onError, onChange = props.onChange, onRemove = props.onRemove, name = props.name, headers = props.headers, data = props.data, withCredentials = props.withCredentials, accept = props.accept, multiple = props.multiple, children = props.children, drag = props.drag;
    var fileInput = react_1.useRef(null);
    var _a = react_1.useState(defaultFileList || []), fileList = _a[0], setFileList = _a[1];
    var updateFileList = function (updateFile, updateObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var handleClick = function () {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (!files) {
            return;
        }
        uploadFiles(files);
        if (fileInput.current) {
            fileInput.current.value = "";
        }
    };
    var handleRemove = function (file) {
        setFileList(function (prevList) {
            return prevList.filter(function (item) { return item.uid !== file.uid; });
        });
        if (onRemove) {
            onRemove(file);
        }
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            if (!beforeUpload) {
                post(file);
            }
            else {
                var result = beforeUpload(file);
                if (result && result instanceof Promise) {
                    result.then(function (processedFile) {
                        post(processedFile);
                    });
                }
                else if (result !== false) {
                    post(file);
                }
            }
        });
    };
    var post = function (file) {
        var _file = {
            uid: Date.now() + "upload-file",
            status: "ready",
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file
        };
        //setFileList([_file, ...fileList])
        setFileList(function (prevList) {
            return __spreadArrays([_file], prevList);
        });
        var formData = new FormData();
        formData.append(name || "file", file);
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios_1["default"]
            .post(action, formData, {
            headers: __assign(__assign({}, headers), { "Content-Type": "multipart/form-data" }),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var percentage = Math.round((e.loaded * 100) / (e.total || 1)) || 0;
                if (percentage < 100) {
                    updateFileList(_file, { percent: percentage, status: "uploading" });
                    if (onProgress) {
                        onProgress(percentage, file);
                    }
                }
            }
        })
            .then(function (resp) {
            updateFileList(_file, { status: "success", response: resp.data });
            if (onSuccess) {
                onSuccess(resp.data, file);
            }
            if (onChange) {
                onChange(file);
            }
        })["catch"](function (err) {
            updateFileList(_file, { status: "error", error: err });
            if (onError) {
                onError(err, file);
            }
            if (onChange) {
                onChange(file);
            }
        });
    };
    return (react_1["default"].createElement("div", { className: "Hoshi-upload-component" },
        react_1["default"].createElement("div", { className: "Hoshi-upload-input", style: { display: "inline-block" }, onClick: handleClick },
            drag ? (react_1["default"].createElement(dragger_1["default"], { onFile: function (files) {
                    uploadFiles(files);
                } }, children)) : (children),
            react_1["default"].createElement("input", { className: "Hoshi-file-input", style: { display: "none" }, ref: fileInput, onChange: handleFileChange, type: "file", accept: accept, multiple: multiple })),
        react_1["default"].createElement(uploadList_1["default"], { fileList: fileList, onRemove: handleRemove })));
};
exports.Upload.defaultProps = {
    name: "file"
};
exports["default"] = exports.Upload;
