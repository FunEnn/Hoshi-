import React, { ReactNode } from "react";
import { UploadFile } from "./upload";
interface UploadListProps {
    fileList?: UploadFile[];
    onRemove?: (_file: UploadFile) => void;
    children?: ReactNode;
}
declare const _default: React.NamedExoticComponent<UploadListProps>;
export default _default;
