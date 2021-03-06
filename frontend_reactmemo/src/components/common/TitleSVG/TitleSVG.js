import React from 'react';
import styles from './TitleSVG.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const titleSVG = () => {
  return (
      <svg role='img'>
        <title>reactMEMO</title>
        <text
          className={cx('word')}
          dominantBaseline='central'
          fill='black'
          textAnchor='middle'
          x='50%'
          y='50%'
          >
          reactMemo
        </text>
      </svg>
  );
};

export default titleSVG;