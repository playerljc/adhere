import React, { useState } from 'react';
import GridLayout, {
  Responsive,
  WidthProvider,
  /*{ Responsive, WidthProvider }*/
} from 'react-grid-layout';

import './GridLayout.less';

const ResponsiveGridLayout = WidthProvider(GridLayout);
class MyFirstGrid extends React.Component {
  state = {
    layout: [
      { i: 'a', x: 0, y: 0, w: 6, h: 2 },
      { i: 'b', x: 6, y: 0, w: 6, h: 2 },
      { i: 'c', x: 0, y: 2, w: 12, h: 2 },
      // { i: 'b', x: 1, y: 0, w: 3, h: 2 },
      // { i: 'c', x: 4, y: 0, w: 1, h: 2 },
      // { i: 'd', x: 0, y: 2, w: 1, h: 2 },
      // { i: 'e', x: 0, y: 4, w: 1, h: 2 },
    ],
  };

  render() {
    // layout is an array of objects, see the demo for more complete usage
    // const layout = [
    //   { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    //   { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 5 },
    //   { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    // ];

    return (
      <div style={{ border: '1px solid #ccc' }}>
        <ResponsiveGridLayout
          className="layout"
          // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          cols={12}
          rowHeight={100}
          layout={this.state.layout}
          resizeHandles={['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne']}
          // width={1200}
          compactType="horizontal"
          margin={[20, 20]}
          // containerPadding={[20, 20]}
          onLayoutChange={(_layout) => {
            console.log('layout======', _layout);
          }}
        >
          <div key="a" style={{ border: '1px solid #ccc' }}>
            a
          </div>
          <div key="b" style={{ border: '1px solid #ccc' }}>
            b
          </div>
          <div key="c" style={{ border: '1px solid #ccc' }}>
            c
          </div>
          {/*<div key="d" style={{ border: '1px solid #ccc' }}>
            d
          </div>
          <div key="e" style={{ border: '1px solid #ccc' }}>
            e
          </div>*/}
        </ResponsiveGridLayout>
      </div>
    );
  }
}

export default MyFirstGrid;
