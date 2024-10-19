import React, { ReactNode } from "react";
import { ThemeProps } from "../Icon/icon";
export interface ProgressProps {
    percent?: number;
    strokeHeight?: number;
    showText?: boolean;
    styles?: React.CSSProperties;
    theme?: ThemeProps;
    children?: ReactNode;
}
declare const _default: React.NamedExoticComponent<ProgressProps>;
export default _default;
