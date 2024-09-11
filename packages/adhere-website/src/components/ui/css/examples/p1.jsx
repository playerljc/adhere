import React from 'react';

const list = [];
list.length = 50;
list.fill(0);

const gridData = list.map((t, index) => ({
  name: `姓名${index + 1}`,
  sex: '男',
}));

export default () => (
  <ul className="g-grid-list column4">
    {gridData.map((t) => (
      <li className="g-grid-list-item" key={t.name}>
        {t.name}
      </li>
    ))}
  </ul>
);
