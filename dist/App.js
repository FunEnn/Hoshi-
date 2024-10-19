import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import UploadList from "./components/Upload/uploadList";
library.add(fas);
var App = function () {
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (files) {
            var uploadedFile = files[0];
            var formData = new FormData();
            formData.append(uploadedFile.name, uploadedFile);
            axios
                .post("https://jsonplaceholder.typicode.com/posts", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
                .then(function (res) {
                console.log(res);
            })
                .catch(function (err) {
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
            percent: 30,
        },
        { uid: "122", size: 1234, name: "xyz.md", status: "success", percent: 30 },
        { uid: "121", size: 1234, name: "eyiha.md", status: "error", percent: 30 },
    ];
    return (React.createElement("div", { className: "App", style: { marginTop: "100px", marginLeft: "100px" } },
        React.createElement("input", { type: "file", name: "myFile", onChange: handleFileChange }),
        React.createElement(UploadList, { fileList: fileList })));
};
export default App;
