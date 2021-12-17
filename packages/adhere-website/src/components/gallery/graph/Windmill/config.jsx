import React from 'react';

import iconProcessing from './images/icon-processing.png';
import iconSuccess from './images/icon-success.png';
import iconFailed from './images/icon-failed.png';
import iconTime from './images/icon-time.png';

const icon = (img, size, imgSize, color, styles = {}) => {
  return (
    <span
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...styles,
      }}
    >
      <img src={img} alt="" style={{ width: imgSize, height: imgSize }} />
    </span>
  );
};

export const legendColor = {
  1: '#062C79', // 合作保荐人
  2: '#7EAAEC', // 律师事务所
  3: '#A5C7F3', // 会计师事务所
  4: '#D2E5FA', // 资评公司
};

export const legendItem = [
  { name: '合作保荐人', color: legendColor[1] },
  { name: '律师事务所', color: legendColor[2] },
  { name: '会计师事务所', color: legendColor[3] },
  { name: '资评公司', color: legendColor[4] },
];

export const statusColor = {
  1: '#F08755', // 进行中
  2: '#BF190E', // 成功
  3: '#69BCA6', // 失败
};

export const statusTexts = {
  1: '进行中',
  2: '成功',
  3: '失败',
};

export const statusIcon = {
  1: icon(iconProcessing, 46, 24, statusColor[1]), // 进行中
  2: icon(iconSuccess, 60, 32, statusColor[2]), // 成功
  3: icon(iconFailed, 46, 24, statusColor[3]), // 失败
};

export const timeIcon = icon(iconTime, 18, 18, 'transparent');

export const everyLengthConfig = {
  1: {
    details: {
      startRotate: -90,
    },
    projects: {
      startRotate: -180,
      lineWidth: 0,
      textDirection: 'row',
      textMaxWidths: [
        [72, 69],
        [84, 70],
        [96, 84],
      ],
    },
    collaborator: {
      startRotate: -180,
      lineWidth: 0,
    },
  },
  2: {
    details: {
      startRotate: -45,
    },
    projects: {
      startRotate: -45,
      textDirection: 'row',
      textMaxWidths: [
        [72, 69],
        [84, 70],
        [96, 84],
      ],
    },
    collaborator: {
      startRotate: -45,
    },
  },
  3: {
    details: {
      startRotate: -30,
    },
    projects: {
      startRotate: -30,
      textMaxWidths: [
        [96, 84],
        [120, 126],
        [144, 140],
      ],
    },
    collaborator: {
      startRotate: -30,
    },
  },
  4: {
    projects: {
      textMaxWidths: [
        [96, 84],
        [120, 126],
        [144, 140],
      ],
    },
  },
  5: {
    details: {
      startRotate: -18,
    },
    projects: {
      startRotate: -18,
      textMaxWidths: [
        [96, 84],
        [120, 126],
        [144, 140],
      ],
    },
    collaborator: {
      startRotate: -18,
    },
  },
  6: {
    projects: {
      textMaxWidths: [
        [96, 84],
        [120, 126],
        [144, 140],
      ],
    },
  },
  7: {
    details: {
      startRotate: -11,
    },
    projects: {
      startRotate: -11,
      textMaxWidths: [
        [96, 84],
        [120, 126],
        [144, 140],
      ],
    },
    collaborator: {
      startRotate: -11,
    },
  },
  8: {
    projects: {
      textMaxWidths: [
        [96, 84],
        [120, 126],
        [144, 140],
      ],
    },
  },
  9: {
    details: {
      startRotate: -10,
    },
    projects: {
      startRotate: -10,
      textMaxWidths: [
        [84, 69],
        [120, 112],
        [144, 140],
      ],
    },
    collaborator: {
      startRotate: -10,
    },
  },
  10: {
    projects: {
      textMaxWidths: [
        [72, 69],
        [108, 98],
        [132, 112],
      ],
    },
  },
  11: {
    projects: {
      textMaxWidths: [
        [72, 56],
        [96, 84],
        [120, 112],
      ],
    },
  },
  12: {
    projects: {
      textMaxWidths: [
        [60, 56],
        [84, 70],
        [96, 84],
      ],
    },
  },
  // 13: {
  //   projects: {
  //     textMaxWidths: [
  //       [60, 42],
  //       [84, 70],
  //       [108, 98],
  //     ],
  //   },
  // },
  // 14: {
  //   projects: {
  //     textMaxWidths: [
  //       [48, 42],
  //       [72, 70],
  //       [96, 84],
  //     ],
  //   },
  // },
  // 15: {
  //   projects: {
  //     textMaxWidths: [
  //       [48, 42],
  //       [72, 70],
  //       [96, 84],
  //     ],
  //   },
  // },
  // 16: {
  //   projects: {
  //     textMaxWidths: [
  //       [48, 42],
  //       [72, 56],
  //       [84, 70],
  //     ],
  //   },
  // },
};
