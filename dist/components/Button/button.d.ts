import { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";
export interface IProps {
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    href?: string;
}
type NativeButtonProps = IProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = IProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export declare const Button: FC<ButtonProps>;
export default Button;
