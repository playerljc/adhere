import React, { useState } from 'react';

import iconArrow from '../../images/icon-arrow.png';
import Circle from '../Circle';

import styles from './index.less';

const Carousel = ({ defaultIndex = 0, data = [], onChange = () => {} }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const onCarouelItemClick = (item, index) => {
    setActiveIndex(index);
    onChange(item, index);
  };

  const carouelList = data.map((item, idx) => {
    const isActive = activeIndex === idx;
    return (
      <div
        key={item.key}
        className={`${styles.carouelItem} ${isActive ? styles.active : ''}`}
        onClick={() => {
          onCarouelItemClick(item, idx);
        }}
      >
        <Circle
          detail={item.detail}
          center={[70, 70]}
          size={70}
          color={isActive ? '#D45130' : '#5D81C7'}
          // size={73}
          // style={{ border: '6px solid #EFEFEF' }}
        />
      </div>
    );
  });

  const renderArrow = () => {
    const top = activeIndex * 180 + 70;
    return (
      <div
        className={styles.arrow}
        style={{
          top,
          transition: 'top 0.6s ease-out',
        }}
      >
        <img src={iconArrow} alt="" />
      </div>
    );
  };

  return (
    <div className={styles.carouel}>
      <p className={styles.title}></p>
      <div className={styles.carouelContainer}>
        {carouelList}
        {renderArrow()}
      </div>
    </div>
  );
};

export default Carousel;
