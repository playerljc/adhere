import { IReplyProps } from '@/types';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import Intl from '@baifendian/adhere-util-intl';

const { TextArea } = Input;

const selectorPrefix = 'adhere-ui-comment-reply';

function Reply(props: IReplyProps) {
  const [value, setValue] = useState('');

  return (
    <div className={`${selectorPrefix}`}>
      <div className={`${selectorPrefix}-textarea-weap`}>
        <TextArea
          className={`${selectorPrefix}-textarea`}
          placeholder={Intl.v('请输入回复内容')}
          autoFocus={true}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          showCount
          maxLength={100}
        />
      </div>

      <div className={`${selectorPrefix}-toolbar`}>
        <Button
          type="primary"
          className={`${selectorPrefix}-toolbar-item`}
          disabled={!value}
          onClick={() => {
            props?.onResult?.(value.trim());
          }}
        >
          {Intl.v('添加')}
        </Button>

        <Button className={`${selectorPrefix}-toolbar-item`} onClick={() => props?.onCancel?.()}>
          {Intl.v('取消')}
        </Button>
      </div>
    </div>
  );
}

Reply.defaultProps = {};

Reply.propTypes = {
  onCancel: PropTypes.func,
  onResult: PropTypes.func,
};

export default Reply;
