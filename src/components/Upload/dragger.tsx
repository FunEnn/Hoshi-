import React, { DragEvent, FC, ReactNode, memo, useState } from "react";
import classNames from "classnames";
export interface DraggerProps {
  onFile: (file: FileList) => void;
  children?: ReactNode;
}
const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const klass = classNames("Hoshi-uploader-dragger", {
    "is-dragover": dragOver,
  });
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };
  return (
    <div
      className={klass}
      onDragOver={(e) => {
        handleDrag(e, true);
      }}
      onDragLeave={(e) => {
        handleDrag(e, false);
      }}
    >
      {children}
    </div>
  );
};
export default memo(Dragger);
