import React, { FC, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Icon from "./components/Icon/icon";
import UploadList from "./components/Upload/uploadList";
import { UploadFile } from "./components/Upload/upload";
library.add(fas);
const App: FC = () => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const uploadedFile = files[0];
      const formData = new FormData();
      formData.append(uploadedFile.name, uploadedFile);
      axios
        .post("https://jsonplaceholder.typicode.com/posts", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const fileList: UploadFile[] = [
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
  return (
    <div className="App" style={{ marginTop: "100px", marginLeft: "100px" }}>
      <input type="file" name="myFile" onChange={handleFileChange}></input>
      <UploadList fileList={fileList} />
    </div>
  );
};

export default App;
