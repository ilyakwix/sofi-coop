import React, { VideoHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './video.module.scss';

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
    className?: string;
}

export const Video = ({className,src, id, muted, autoPlay, loop, ...props}: VideoProps) => {
    let mutedParam = '';
    if (muted) {
        mutedParam = 'muted';
    }
    let autoPlayParam = '';
    if (autoPlay) {
        autoPlayParam = 'autoplay';
    }
    let loopParam = '';
    if (loop) {
        loopParam = 'loop';
    }
    return (
        <div
            className={classNames(styles.root, className)}
            dangerouslySetInnerHTML={{
                __html: `
          <video
            ${mutedParam}
            ${autoPlayParam}
            ${loopParam}           
            playsinline
            src="${src}"   
            id="${id}"
          />`,
            }}
        />
    );
};
