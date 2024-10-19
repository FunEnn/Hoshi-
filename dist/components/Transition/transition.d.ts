import { FC, ReactNode } from "react";
import { CSSTransitionProps as CSSTransitionPropsOriginal } from "react-transition-group/CSSTransition";
type AnimationName = "zoom-in-top" | "zoom-in-left" | "zoom-in-bottom" | "zoom-in-right";
type CSSTransitionProps = Omit<CSSTransitionPropsOriginal, "classNames"> & {
    animation?: AnimationName;
    className?: string;
    wrapper?: boolean;
    children?: ReactNode;
};
declare const Transition: FC<CSSTransitionProps>;
export default Transition;
