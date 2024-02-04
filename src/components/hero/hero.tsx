import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './hero.module.scss';

export interface HeroProps {
    className?: string;
    children?: ReactNode;
}

export const Hero = ({ className, children="Add content here" }: HeroProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
