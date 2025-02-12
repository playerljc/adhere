import React from 'react';
import { Decorators } from '@baifendian/adhere';

@Decorators.ReactErrorBoundaries
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        MyComponent
      </div>
    );
  }
}

export default MyComponent;
