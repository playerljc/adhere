import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';

import FieldGeneratorToDict from '../../../../src/index';

export default () => {
  const [val, setVal] = useState();
  const [vals, setVals] = useState([]);

  return (
    <div>
      <dl>
        <dt>
          <h1>Tag</h1>
        </dt>

        <dd>
          <dl>
            <dt>
              <h3>Tag横向</h3>
            </dt>
            <dd>
              <Space.Group direction="vertical">
                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagHorizontalFormItem
                  value={vals}
                  onChange={(v) => setVals(v)}
                />
                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagHorizontalFormItem
                  renderItem={({ index }) => {
                    const colorMap = new Map([
                      [0, 'magenta'],
                      [1, 'red'],
                      [2, 'volcano'],
                    ]);

                    return {
                      props: {
                        color: colorMap.get(index),
                      },
                    };
                  }}
                  value={vals}
                  onChange={(v) => setVals(v)}
                />
              </Space.Group>
            </dd>
          </dl>

          <dl>
            <dt>
              <h3>Tag纵向</h3>
            </dt>
            <dd>
              <Space.Group direction="vertical">
                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagVerticalFormItem
                  value={vals}
                  onChange={(v) => setVals(v)}
                />

                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagVerticalFormItem
                  renderItem={({ index }) => {
                    const colorMap = new Map([
                      [0, 'magenta'],
                      [1, 'red'],
                      [2, 'volcano'],
                    ]);

                    return {
                      props: {
                        color: colorMap.get(index),
                      },
                    };
                  }}
                  value={vals}
                  onChange={(v) => setVals(v)}
                />
              </Space.Group>
            </dd>
          </dl>

          <dl>
            <dt>Tag纵向全选</dt>
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagCheckAllVerticalFormItem
              value={vals}
              onChange={(v) => setVals(v)}
            />
          </dl>

          <dl>
            <dt>Tag横向全选</dt>
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagCheckAllHorizontalFormItem
              value={vals}
              onChange={(v) => setVals(v)}
            />
          </dl>

          <dl>
            <dt>Tag的Select</dt>
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagSelectFormItem
              selectProps={{
                style: {
                  width: 200,
                },
              }}
              value={val}
              onChange={(v) => setVal(v)}
            />
          </dl>

          <dl>
            <dt>Tag的Select多选</dt>
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagMultiSelectFormItem
              selectProps={{
                style: {
                  width: 200,
                },
              }}
              value={vals}
              onChange={(v) => setVals(v)}
            />
          </dl>

          <dl>
            <dt>Tag的CheckAllSelect</dt>
            <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagCheckAllSelectFormItem
              selectProps={{
                style: {
                  width: 200,
                },
              }}
              value={vals}
              onChange={(v) => setVals(v)}
            />
          </dl>
        </dd>
      </dl>
    </div>
  );
};
