import React from 'react';
import { Statistic, Row, Button, Col } from 'antd';

import Table from './table';

/**
 * RenderSearchBetweenTable
 * @classdesc
 */
class RenderSearchBetweenTable extends Table {
  renderSearchFormBefore() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
          <Button style={{ marginTop: 16 }} type="primary">
            Recharge
          </Button>
        </Col>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} loading />
        </Col>
      </Row>
    );
  }

  renderSearchFormAfter() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
          <Button style={{ marginTop: 16 }} type="primary">
            Recharge
          </Button>
        </Col>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} loading />
        </Col>
      </Row>
    );
  }
}

export default RenderSearchBetweenTable;
