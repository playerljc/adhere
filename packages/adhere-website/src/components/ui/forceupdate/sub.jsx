import React, { useEffect } from 'react';

export default (props) => {
  useEffect(() => {
    console.log('子组件挂载');
  }, []);

  useEffect(() => {
    console.log('子组件更新');
  });
  return <div>子组件:{props.count}</div>;
};
