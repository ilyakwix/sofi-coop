import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, children="Label", ...props }: ButtonProps) => {
    return <button className={classNames(styles.root, className)}>{children}</button>;
};
