import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Button, Input, Popover } from 'antd';
import Intl from '@baifendian/adhere-util-intl';
import Hooks from '@baifendian/adhere-ui-hooks';

import ar from '@emoji-mart/data/i18n/ar.json';
import de from '@emoji-mart/data/i18n/de.json';
import en from '@emoji-mart/data/i18n/en.json';
import es from '@emoji-mart/data/i18n/es.json';
import fa from '@emoji-mart/data/i18n/fa.json';
import fr from '@emoji-mart/data/i18n/fr.json';
import it from '@emoji-mart/data/i18n/it.json';
import ja from '@emoji-mart/data/i18n/ja.json';
import nl from '@emoji-mart/data/i18n/nl.json';
import pl from '@emoji-mart/data/i18n/pl.json';
import pt from '@emoji-mart/data/i18n/pt.json';
import ru from '@emoji-mart/data/i18n/ru.json';
import uk from '@emoji-mart/data/i18n/uk.json';
import zh from '@emoji-mart/data/i18n/zh.json';

import EmojiIcon from './emoji';
import { IReplyProps } from '@/types';

const { TextArea } = Input;

const { useSetState } = Hooks;

const selectorPrefix = 'adhere-ui-comment-reply';

const LOCAL_MAP = new Map<string, any>([
  ['ar', ar],
  ['de', de],
  ['en', en],
  ['es', es],
  ['fa', fa],
  ['fr', fr],
  ['it', it],
  ['ja', ja],
  ['nl', nl],
  ['pl', pl],
  ['pt', pt],
  ['ru', ru],
  ['uk', uk],
  ['zh', zh],
]);

/**
 * Reply
 * @param props
 * @constructor
 * @classdesc 回复
 */
function Reply(props: IReplyProps) {
  const [value, setValue] = useSetState<string>('');

  // 回复内容的textarea
  const textAreaRef = useRef();

  const emojiWrapRef = useRef<HTMLDivElement>();

  const [emojiIconWrapVisible, setEmojiIconWrapVisible] = useState(false);

  /**
   * onEmojiSelect
   * @param native
   */
  function onEmojiSelect({ native }) {
    // 获取textarea的dom
    const textareaEl = (textAreaRef?.current as unknown as HTMLElement)?.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;

    // 光标开始索引
    const { selectionStart } = textareaEl;

    const str = [...value];
    str.splice(selectionStart, 0, native);

    setValue(str.join(''), () => {
      textareaEl.focus();
      textareaEl.setSelectionRange(selectionStart + 1, selectionStart + 1);
    });
  }

  useLayoutEffect(() => {
    function onDocBodyClick(e) {
      // console.log('onDocBodyClick');
      const target = e.target;

      const textareaEl = textAreaRef?.current as unknown as HTMLElement;

      // console.log('target', target);
      // console.log('textAreaRef.current', textareaEl);

      if (![textareaEl.querySelector('textarea')].includes(target)) {
        setEmojiIconWrapVisible(false);
      }
    }

    function onEmojiWrapClick(e) {
      // console.log('onEmojiIconWrapClick');
      e.stopPropagation();
    }

    document.body.addEventListener('click', onDocBodyClick);
    (emojiWrapRef?.current! as HTMLElement)?.addEventListener?.('click', onEmojiWrapClick);
    return () => {
      document.body.removeEventListener('click', onDocBodyClick);
      (emojiWrapRef?.current! as HTMLElement)?.removeEventListener?.('click', onEmojiWrapClick);
    };
  }, []);

  return (
    <div className={`${selectorPrefix}`}>
      {/*@ts-ignore*/}
      <div className={`${selectorPrefix}-textarea-wrap`} ref={textAreaRef}>
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

      {/*@ts-ignore*/}
      <div ref={emojiWrapRef} className={`${selectorPrefix}-emoji-wrap`} />

      <div className={`${selectorPrefix}-toolbar`}>
        <Popover
          placement="bottomLeft"
          // trigger="click"
          // @ts-ignore
          getPopupContainer={() => emojiWrapRef.current}
          content={
            <Picker
              data={data}
              i18n={LOCAL_MAP.get(props.local || 'zh')}
              onEmojiSelect={onEmojiSelect}
            />
          }
          visible={emojiIconWrapVisible}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setEmojiIconWrapVisible(!emojiIconWrapVisible);
            }}
          >
            <EmojiIcon className={`${selectorPrefix}-toolbar-item-emoji`} />
          </div>
        </Popover>

        <div className={`${selectorPrefix}-toolbar-inner`}>
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
    </div>
  );
}

Reply.defaultProps = {};

Reply.propTypes = {
  onCancel: PropTypes.func,
  onResult: PropTypes.func,
  local: PropTypes.string,
};

export default Reply;
