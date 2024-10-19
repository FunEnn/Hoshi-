import React, { FC, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps as CSSTransitionPropsOriginal } from "react-transition-group/CSSTransition";

type AnimationName =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-bottom"
  | "zoom-in-right";

type CSSTransitionProps = Omit<CSSTransitionPropsOriginal, "classNames"> & {
  animation?: AnimationName;
  className?: string;
  wrapper?: boolean;
  children?: ReactNode;
};

const Transition: FC<CSSTransitionProps> = ({
  animation,
  className,
  children,
  wrapper,
  ...restProps
}) => {
  return (
    <CSSTransition
      timeout={300}
      classNames={className ? className : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};
export default Transition;
