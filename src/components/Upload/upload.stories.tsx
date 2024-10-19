import React from "react";
import { action } from "@storybook/addon-actions";
import Upload, { UploadFile } from "./upload";
import Icon from "../Icon/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UploadList from "./uploadList";

export default {
  title: "Upload",
  component: Upload,
};
const defaultFileList: UploadFile[] = [
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
const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert("File too large, the max file size is 50KB");
    return false;
  }
  return true;
};
const filePromise = (file: File) => {
  const newFile = new File([file], "new_name.jpg", { type: file.type });
  return Promise.resolve(newFile);
};
export const SimpleUpload = () => {
  return (
    <Upload
      action="https://run.mocky.io/v3/8fd886bf-a7f7-4ebc-84af-6adb261dbee4"
      onChange={action("changed")}
      onRemove={action("removed")}
      name="fileName"
      data={{ key: "value" }}
      headers={{ "X-Powered-By": "Hello World" }}
      accept=".jpg"
      multiple
      drag
    >
      <Icon icon="upload" theme="secondary" size="5x" />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  );
};
