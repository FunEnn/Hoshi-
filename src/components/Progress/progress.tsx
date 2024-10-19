import React, { FC, ReactNode, memo } from "react";
import { ThemeProps } from "../Icon/icon";

export interface ProgressProps {
  percent?: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
  children?: ReactNode;
}
const Progress: FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, showText, styles, theme, children } = props;
  return (
    <div className="Hoshi-progress-bar" style={styles}>
      <div
        className="Hoshi-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`Hoshi-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};
export default memo(Progress);
