import React, { ReactNode } from "react";
export interface DraggerProps {
    onFile: (file: FileList) => void;
    children?: ReactNode;
}
declare const _default: React.NamedExoticComponent<DraggerProps>;
export default _default;
