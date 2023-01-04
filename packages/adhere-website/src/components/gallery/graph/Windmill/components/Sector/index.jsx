import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import { statusColor, statusIcon, statusTexts, timeIcon } from '../../config';

import styles from './index.less';

const Sector = ({
  center = [820, 420], // 中心点位置x, y
  size = 400, // 扇形半径的长
  startRotate = 0,
  rotate = 0, // 旋转的角度
  angle = 30, // 扇形的角度大小
  color = '#f00', // 背景颜色
  borderWidth = 0, // 上方边框的宽度
  borderColor = '', // 上方边框的颜色
  textHeight = 37,
  textMaxWidth = [72, 56], // 文本最大宽度
  className = '',
  style = {},
  texts = [],
  textDirection = 'column', // 两个值 column 和row
  textColors = ['rgba(61, 65, 67, 0.7)', '#3D4143'],
  lineColor = '#F7F6F6',
  lineWidth = 6,
  detail = null,
  showAnimate = false,
  onClick = null,
  onClickCompany = null,
  onClickPerson = null,
}) => {
  const [realRotate, setRealRotate] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);

  const sectorSize = size * 2;
  const left = center[0] - size;
  const top = center[1] - size;
  let border;
  if (borderWidth > 0 && borderColor !== '') {
    border = `${borderWidth}px solid ${borderColor}`;
  }
  const renderDetail = () => {
    if (detail) {
      const isLeft = realRotate >= 180 - 1.5;
      const rotateDeg = isLeft
        ? 180 - startRotate - realRotate - angle / 2
        : -realRotate - startRotate - angle / 2;
      const renderIcon = () => statusIcon[detail.status];
      const renderDetailText = (bool) => (
        <>
          {bool && (
            <span className={styles.detailText}>
              {detail.status === 1 && '拟'}
              {detail.status === 1 ? detail.yme || '--' : detail.sme || '--'}
              {detail.status === 1 ? detail.yme && '亿' : detail.sme && '亿'}
            </span>
          )}
        </>
      );

      return (
        <div
          className={styles.detail}
          style={{
            transform: `translate(${100}px, -${40}px) rotate(${rotateDeg}deg)`,
            transformOrigin: `-${100}px ${40}px`,
            transition: 'opacity 1s ease-out',
            opacity: textOpacity,
          }}
        >
          <div
            className={styles.detailContainer}
            style={{
              transform: isLeft ? `rotate(180deg)` : '',
              textAlign: isLeft ? `right` : '',
              justifyContent: isLeft ? `right` : '',
            }}
          >
            {!isLeft && renderIcon()}
            <div
              className={styles.detailContent}
              style={{ margin: isLeft ? `0 ${10}px 0 0` : `0 0 0 ${10}px` }}
            >
              <p className={styles.name}>{detail.projName || '--'}</p>
              <p>
                {renderDetailText(isLeft)}
                <span
                  className={styles.statusText}
                  style={{
                    color: statusColor[detail.status],
                    margin: isLeft ? `0 0 0 ${20}px` : `0 ${20}px 0 0`,
                  }}
                >
                  {statusTexts[detail.status]}
                </span>
                {renderDetailText(!isLeft)}
              </p>
              <p
                className={styles.time}
                style={{
                  justifyContent: isLeft ? `right` : '',
                }}
              >
                {!isLeft && timeIcon}
                <span style={{ margin: isLeft ? `0 ${8}px 0 0` : `0 0 0 ${8}px` }}>
                  {/* eslint-disable-next-line */}
                  {detail.status === 1
                    ? detail.startTime
                      ? dayjs(detail.startTime).format('YYYY-MM-DD')
                      : '--'
                    : detail.endTime
                    ? dayjs(detail.endTime).format('YYYY-MM-DD')
                    : '--'}
                  {detail.status === 1 && '(申报)'}
                </span>
                {isLeft && timeIcon}
              </p>
            </div>
            {isLeft && renderIcon()}
          </div>
        </div>
      );
    }
    return null;
  };

  // 角度大于180度时 需要使用两个元素来处理
  const renderSector = () => {
    const renderLine = () => (
      <div className={styles.line} style={{ backgroundColor: lineColor, width: lineWidth }} />
    );
    if (angle <= 180) {
      return (
        <div
          className={styles.content}
          style={{ transform: `rotate(${-(angle / 2)}deg) translateZ(0)` }}
        >
          <div
            className={styles.father}
            style={{ clip: `rect(0, ${sectorSize}px, ${sectorSize}px, ${size}px)` }}
          >
            <div
              className={styles.child}
              style={{
                backgroundColor: color,
                border,
                transform: `rotate(${angle}deg)`,
                clip: `rect(0, ${size}px, ${sectorSize}px, 0)`,
                cursor: onClick ? 'pointer' : 'auto',
                pointerEvents: onClick ? 'auto' : 'none',
              }}
              onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
              }}
            />
          </div>
          {renderLine()}
        </div>
      );
    }

    return (
      <>
        <div className={styles.content} style={{ transform: `rotate(0deg) translateZ(0)` }}>
          <div
            className={styles.father}
            style={{ clip: `rect(0, ${sectorSize}px, ${sectorSize}px, ${size - 1}px)` }}
          >
            <div
              className={styles.child}
              style={{
                backgroundColor: color,
                border,
                transform: `rotate(${angle / 2}deg)`,
                clip: `rect(0, ${size + 1}px, ${sectorSize}px, 0)`,
                cursor: onClick ? 'pointer' : 'auto',
                pointerEvents: onClick ? 'auto' : 'none',
              }}
              onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
              }}
            />
          </div>
        </div>
        <div
          className={styles.content}
          style={{ transform: `rotate(${-(angle / 2)}deg) translateZ(0)` }}
        >
          <div
            className={styles.father}
            style={{ clip: `rect(0, ${sectorSize}px, ${sectorSize}px, ${size - 1}px)` }}
          >
            <div
              className={styles.child}
              style={{
                backgroundColor: color,
                border,
                transform: `rotate(${angle / 2}deg)`,
                clip: `rect(0, ${size + 1}px, ${sectorSize}px, 0)`,
                cursor: onClick ? 'pointer' : 'auto',
                pointerEvents: onClick ? 'auto' : 'none',
              }}
              onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
              }}
            />
          </div>
          {renderLine()}
        </div>
      </>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setRealRotate(rotate);
      setTextOpacity(1);
    });
  }, [rotate]);

  return (
    <div
      className={`${styles.container} ${className}`}
      style={{
        ...style,
        width: sectorSize,
        height: sectorSize,
        transition: showAnimate ? 'transform 1s ease-out' : 'none',
        transform: `rotate(${startRotate + realRotate + angle / 2}deg) translateZ(0)`,
        left: left,
        top: top,
      }}
    >
      {renderSector()}
      {renderDetail()}
      <span
        className={`${styles.texts} ${styles[textDirection]}`}
        style={{
          top: textHeight / 2 + 2,
          transition: showAnimate ? 'opacity 1s ease-out' : 'none',
          opacity: textOpacity,
          marginLeft: lineWidth / 2,
        }}
      >
        <span
          className={styles.top}
          style={{
            maxWidth: textMaxWidth[0],
            color: textColors[0],
            cursor: onClickCompany ? 'pointer' : 'auto',
            pointerEvents: onClickCompany ? 'auto' : 'none',
          }}
        >
          {/* {texts[0]?.name || '--'} */}
          {texts.map((a, idxx) => {
            return (
              <>
                {idxx > 0 && <span>|</span>}
                <span
                  key={a?.envId}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClickCompany && onClickCompany(a?.envId);
                  }}
                  title={a.name}
                >
                  {a.name || '--'}
                </span>
              </>
            );
          })}
        </span>
        {texts[0]?.person && (
          <span
            className={styles.bottom}
            style={{
              maxWidth: textMaxWidth[1],
              color: textColors[1],
              cursor: onClickPerson ? 'pointer' : 'auto',
              pointerEvents: onClickPerson ? 'auto' : 'none',
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClickPerson && onClickPerson();
            }}
          >
            {/* {texts[0]?.person || '--'} */}
            {texts.map((a, idxx) => {
              return (
                <>
                  {idxx > 0 && <span>|</span>}
                  <span
                    key={a?.pplId}
                    title={a.person}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickPerson && onClickPerson(a?.pplId);
                    }}
                  >
                    {a.person || '--'}
                  </span>
                </>
              );
            })}
          </span>
        )}
      </span>
    </div>
  );
};

export default Sector;
