import classNames from 'classnames';
import styles from './ecopeace-header.module.scss';

export interface EcopeaceHeaderProps {
    className?: string;
}

export const EcopeaceHeader = ({ className }: EcopeaceHeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <h1 className={styles.title}>EcoPeace Nominated For Nobel Peace Prize </h1>
                <p className={styles.description}>
                    EcoPeace Middle East, has been nominated for the Nobel Peace Prize, recognizing
                    three decades of EcoPeace’s environmental peacebuilding efforts.
                </p>
            </div>
        </div>
    );
};
