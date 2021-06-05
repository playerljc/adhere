import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Input } from 'antd';

import styles from './index.less';

const { Search } = Input;

/**
 * GalleryLayout
 * @class GalleryLayout
 * @classdesc GalleryLayout
 */
class GalleryLayout extends React.Component {
  state = {
    keyword: '',
    list: this.props.manifest,
  };

  renderGallery() {
    const { rowCount } = this.props;

    const result = [];

    let index = 0;

    const { list } = this.state;

    do {
      const itemList = list.slice(index, index + rowCount);

      result.push(
        <Row gutter={24}>
          {/* eslint-disable-next-line no-shadow */}
          {itemList.map((t, index) => (
            <Col span={24 / rowCount} key={`${index}`}>
              <div className={styles.CardWrap}>
                <Card title={t.title} bordered={false}>
                  {t.component}
                </Card>
              </div>
            </Col>
          ))}
        </Row>,
      );
      index += rowCount;
    } while (index < list.length);

    return result;
  }

  onSearch = () => {
    const { keyword } = this.state;
    const { manifest } = this.props;

    this.setState({
      list: keyword ? manifest.filter((t) => t.keyword.indexOf(keyword) !== -1) : manifest,
    });
  };

  render() {
    return (
      <div className={styles.Wrap}>
        <div className={styles.Fixed}>
          <Search
            style={{ width: '60%' }}
            placeholder="请输入关键字"
            value={this.state.keyword}
            allowClear
            onChange={(e) => {
              this.setState({ keyword: e.target.value.trim() }, () => {
                if (!this.state.keyword) {
                  this.setState({
                    list: this.props.manifest,
                  });
                }
              });
            }}
            onSearch={this.onSearch}
            enterButton
          />
        </div>
        <div className={styles.Auto}>{this.renderGallery()}</div>
      </div>
    );
  }
}

GalleryLayout.defaultProps = {
  rowCount: 2,
  manifest: [],
};

GalleryLayout.propTypes = {
  // 一行多少个组件
  rowCount: PropTypes.number,
  // 组件的清单文件
  manifest: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      keyword: PropTypes.string,
      component: PropTypes.node,
    }),
  ),
};

export default GalleryLayout;
