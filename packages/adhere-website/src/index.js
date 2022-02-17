import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Intl, Util, Resource } from '@baifendian/adhere';

import Router from '@/lib/Router';
import DictConfig from '@/config/dict/dict.config';

// import 'antd/dist/antd.less';
import 'nprogress/nprogress.css';
import '@baifendian/adhere/lib/css.less';
import './index.less';

// 配置字典
DictConfig();

// 获取当前语言
const lang = Util.getLang();

Resource.Dict.value.LocalsMoment.value[lang]();

// 初始化国际化
Intl.init({
  currentLocale: lang,
}).then(() => {
  Router().then((routerConfig) => {
    ReactDOM.render(
      <ConfigProvider locale={Resource.Dict.value.LocalsAntd.value[lang]}>
        {routerConfig}
      </ConfigProvider>,
      document.getElementById('app'),
    );
  });
});

// import React, { createRef } from 'react';
// import ReactDOM from 'react-dom';
// import { Select } from 'antd';
// import Mark from 'mark.js';
//
// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.ref = createRef();
//
//     this.instance = null;
//
//     this.visible = false;
//
//     this.state = {
//       searchVal: '',
//     };
//   }
//
//   render() {
//     return (
//       <Select
//         style={{ width: 240 }}
//         getPopupContainer={(e) => e.parentElement}
//         showSearch
//         defaultActiveFirstOption={false}
//         autoClearSearchValue={false}
//         showArrow={false}
//         filterOption={false}
//         bordered={false}
//         searchValue={this.state.searchVal}
//         onSearch={(val) => {
//           this.setState({
//             searchVal: this.visible ? val : this.state.searchVal,
//           }, () => {
//             if (this.ref.current && !this.instance) {
//               this.instance = new Mark(this.ref.current);
//             }
//
//             if (this.instance) {
//               this.instance.unmark();
//               this.instance.mark(this.state.searchVal);
//             }
//           });
//         }}
//         dropdownRender={() => {
//           return (
//             <div ref={this.ref}>
//               <ul>
//                 <li>111</li>
//                 <li>111</li>
//                 <li>111</li>
//                 <li>111</li>
//                 <li>111</li>
//                 <li>111</li>
//                 <li>111</li>
//                 <li>111</li>
//                 <li>111</li>
//                 <li>111</li>
//                 <li>111</li>
//                 <li>111</li>
//               </ul>
//             </div>
//           );
//         }}
//         onDropdownVisibleChange={(e) => {
//           this.visible = e;
//
//           if (this.ref.current && !this.instance) {
//             this.instance = new Mark(this.ref.current);
//           }
//         }}
//       />
//     );
//   }
// }
//
// ReactDOM.render(<Search />, document.getElementById('app'));
