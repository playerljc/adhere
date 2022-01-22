import React from 'react';

import styles from './index.less';

const Circle = ({
  center = [820, 420], // 中心点位置x, y
  size = 68, // 扇形半径的长
  color = 'linear-gradient(90deg, #D84930 0%, #CC412B 100%)', // 背景颜色
  className = '',
  style = {},
  detail = null,
  onClick = null,
  onCompanyClick = null,
}) => {
  const sectorSize = size * 2;
  const left = center[0] - size;
  const top = center[1] - size;
  const renderDetail = () => {
    if (detail) {
      return (
        <div className={styles.texts}>
          <p className={styles.score}>{Number(detail?.totalScore).toFixed(1) || '--'}分</p>
          <p className={styles.name}>{detail?.name || '--'}</p>
          <p className={styles.age}>
            <span>{detail?.age || '--'}岁</span>
            <span>从业{detail?.workingYear || '--'}年</span>
          </p>
          <p
            className={styles.company}
            style={{
              cursor: onCompanyClick ? 'pointer' : 'auto',
              pointerEvents: onCompanyClick ? 'auto' : 'none',
            }}
            onClick={(e) => {
              e.stopPropagation();
              onCompanyClick && onCompanyClick(detail);
            }}
            title={detail.envName}
          >
            {detail.envName || '--'}
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{
        ...style,
        width: sectorSize,
        height: sectorSize,
        left: left,
        top: top,
        background: color,
      }}
    >
      <div
        className={styles.content}
        style={{
          width: sectorSize * 0.8,
          height: sectorSize * 0.8,
          cursor: onClick ? 'pointer' : 'auto',
          pointerEvents: onClick ? 'auto' : 'none',
        }}
        onClick={() => {
          onClick && onClick(detail);
        }}
      />
      {renderDetail()}
    </div>
  );
};

export default Circle;
