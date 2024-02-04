import { useEffect, useRef } from 'react';
import { Button } from '../button/button';
import classNames from 'classnames';
import styles from './adamteva-header.module.scss';

export interface AdamTevaHeaderProps {
    className?: string;
}

export const AdamTevaHeader = ({ className }: AdamTevaHeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <video
                // src={'https://adamteva.org.il/wp-content/uploads/2022/06/סרטון-חדש-מכווץ.mp4'}
                loop
                autoPlay
                className={styles.video}
                muted={true}
                playsInline
            />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    עורכי הדין
                    <br /> של הסביבה בישראל
                </h1>
                <Button className={styles.button}>תמכו בנו</Button>
            </div>
        </div>
    );
};
