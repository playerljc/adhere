import React from 'react';
import { Decorators } from '@baifendian/adhere';

class MyComponent extends React.Component {
  // 这里只能使用function，不能使用箭头函数，可以再function过去到this
  @Decorators.ReactAutoTryCatch(function(e){
    console.error(e);
  })
  display(name) {
    return name;
  }

  render() {
    return <div>MyComponent</div>
  }
}

export default MyComponent;
