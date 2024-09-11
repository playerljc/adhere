import React from 'react';

import { Hooks } from '@baifendian/adhere';

const { useItemsRef } = Hooks;

export default () => {
  const { get, set } = useItemsRef();

  return (
    <ul>
      {Array.from({ length: 10 }).map((t, _index) => (
        <li
          key={`${_index + 1}`}
          ref={(node) => {
            set(`${_index + 1}`, node);
          }}
          onClick={() => {
            const el = get(`${_index + 1}`);
            alert(el.innerHTML);
          }}
        >
          {_index + 1}：<span>pppppppppppppppppppppppppppppppppppp</span>
        </li>
      ))}
    </ul>
  );
};
