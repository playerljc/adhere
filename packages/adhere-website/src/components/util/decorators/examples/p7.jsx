import React from 'react';
import { Decorators } from '@baifendian/adhere';

class MyComponent extends React.Component {
  // 这里只能使用function，不能使用箭头函数，可以再function过去到this
  @Decorators.ReactAop(function(){
    console.log('start');
  }, function(){
    console.log('end');
  })
  display(name) {
    return name;
  }

  render() {
    return <div>MyComponent</div>
  }
}

export default MyComponent;
