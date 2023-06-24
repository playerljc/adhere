import React from 'react';
import GridLayout, {
  Responsive,
  WidthProvider,
  /*{ Responsive, WidthProvider }*/
} from 'react-grid-layout';

import './GridLayout.less';

const ResponsiveGridLayout = WidthProvider(GridLayout);
class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 5 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ];
    return (
      <ResponsiveGridLayout
        className="layout"
        // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        cols={12}
        rowHeight={10}
        layout={layout}
        width={1200}
        compactType="horizontal"
        margin={[0, 0]}
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
      </ResponsiveGridLayout>
    );
  }
}

export default MyFirstGrid;
