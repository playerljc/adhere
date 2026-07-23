import React from 'react';

import { colors } from '../../src';

const solidKeys = Object.keys(colors).filter((key) => typeof colors[key] === 'string');
const gradientKeys = Object.keys(colors).filter((key) => typeof colors[key] === 'object');

export default () => {
  return (
    <div style={{ padding: 24 }}>
      <h3>纯色</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {solidKeys.map((key) => (
          <div key={key} style={{ width: 96, textAlign: 'center', fontSize: 12 }}>
            <div
              style={{
                height: 40,
                borderRadius: 4,
                background: colors[key],
                marginBottom: 4,
              }}
            />
            {key}
          </div>
        ))}
      </div>

      <h3>渐变色</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {gradientKeys.map((key) => {
          const gradient = colors[key];
          const stops = (gradient.colorStops || [])
            .map((stop) => `${stop.color} ${stop.offset * 100}%`)
            .join(', ');

          return (
            <div key={key} style={{ width: 96, textAlign: 'center', fontSize: 12 }}>
              <div
                style={{
                  height: 40,
                  borderRadius: 4,
                  background: `linear-gradient(180deg, ${stops})`,
                  marginBottom: 4,
                }}
              />
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
};
