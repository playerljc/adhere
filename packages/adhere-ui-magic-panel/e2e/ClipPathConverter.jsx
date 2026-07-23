import React from 'react';

import { ClipPathConverter } from '../src/index';

const samples = [
  {
    title: 'inset',
    clip: {
      type: 'basic-shape',
      shape: {
        type: 'inset',
        top: 20,
        right: 40,
        bottom: 20,
        left: 40,
        round: '12px',
      },
    },
  },
  {
    title: 'circle',
    clip: {
      type: 'basic-shape',
      shape: {
        type: 'circle',
        radius: '40%',
        position: 'at 50% 50%',
      },
    },
  },
  {
    title: 'ellipse',
    clip: {
      type: 'basic-shape',
      shape: {
        type: 'ellipse',
        radiusX: '45%',
        radiusY: '30%',
        position: 'at center',
      },
    },
  },
  {
    title: 'polygon',
    clip: {
      type: 'basic-shape',
      shape: {
        type: 'polygon',
        fillRule: 'nonzero',
        points: [
          { x: '50%', y: '0%' },
          { x: '100%', y: '50%' },
          { x: '50%', y: '100%' },
          { x: '0%', y: '50%' },
        ],
      },
    },
  },
  {
    title: 'path',
    clip: {
      type: 'basic-shape',
      shape: {
        type: 'path',
        fillRule: 'evenodd',
        d: 'M20,20 h60 a20,20 0 1 1 0,40 h-60 a20,20 0 1 1 0,-40 z',
      },
    },
  },
  {
    title: 'none',
    clip: { type: 'none' },
  },
];

/**
 * ClipPathConverter
 * @description 展示 ClipPathConverter.toCSS 对各形状的转换结果
 */
export default () => {
  return (
    <div style={{ padding: 24, fontFamily: 'monospace', lineHeight: 1.6 }}>
      {samples.map((sample) => {
        const css = ClipPathConverter.toCSS(sample.clip);
        return (
          <div key={sample.title} style={{ marginBottom: 20 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>{sample.title}</div>
            <div
              style={{
                width: 160,
                height: 100,
                marginBottom: 8,
                background: 'linear-gradient(135deg, #1677ff, #69b1ff)',
                clipPath: css,
              }}
            />
            <code>{css}</code>
          </div>
        );
      })}
    </div>
  );
};
