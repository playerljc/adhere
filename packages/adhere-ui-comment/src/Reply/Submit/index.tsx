import { Button, Input, Popover } from 'antd';
import React, { FC, useLayoutEffect, useRef, useState } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';
import data from '@emoji-mart/data';
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
import Picker from '@emoji-mart/react';

import { ReplyProps } from '../../types';
import EmojiIcon from './emoji';

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
const Reply: FC<ReplyProps> = (props) => {
  const { local = 'zh', emojiPickerProps = {}, onResult, onCancel } = props;

  const [value, setValue] = useSetState<string>('');

  // 回复内容的textarea
  const textAreaRef = useRef<HTMLDivElement>(null);

  const emojiWrapRef = useRef<HTMLDivElement>(null);

  const [emojiIconWrapVisible, setEmojiIconWrapVisible] = useState(false);

  /**
   * onEmojiSelect
   * @param native
   */
  function onEmojiSelect({ native }) {
    // 获取textarea的dom
    const textareaEl = textAreaRef?.current?.querySelector('textarea') as HTMLTextAreaElement;

    // 光标开始索引
    const { selectionStart } = textareaEl;

    // (0) 1 (1) 2 (2) 3 (3)
    setValue(
      `${value.substring(0, selectionStart)}${native}${value.substring(selectionStart)}`,
      () => {
        textareaEl.focus();
        textareaEl.setSelectionRange(
          selectionStart + native.length,
          selectionStart + native.length,
        );
      },
    );
  }

  useLayoutEffect(() => {
    function onDocBodyClick(e) {
      const target = e.target;

      const textareaEl = textAreaRef?.current as HTMLDivElement;

      if (![textareaEl.querySelector('textarea')].includes(target)) {
        setEmojiIconWrapVisible(false);
      }
    }

    function onEmojiWrapClick(e) {
      e.stopPropagation();
    }

    document.body.addEventListener('click', onDocBodyClick);
    (emojiWrapRef?.current! as HTMLElement)?.addEventListener?.('click', onEmojiWrapClick);
    return () => {
      document.body.removeEventListener('click', onDocBodyClick);
      (emojiWrapRef?.current! as HTMLElement)?.removeEventListener?.('click', onEmojiWrapClick);
    };
  });

  return (
    <div className={`${selectorPrefix}`}>
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

      <div ref={emojiWrapRef} className={`${selectorPrefix}-emoji-wrap`} />

      <div className={`${selectorPrefix}-toolbar`}>
        <Popover
          placement="bottomLeft"
          getPopupContainer={() => emojiWrapRef.current!}
          content={
            <Picker
              data={data}
              i18n={LOCAL_MAP.get(local || 'zh')}
              onEmojiSelect={onEmojiSelect}
              {...(emojiPickerProps || {})}
            />
          }
          visible={emojiIconWrapVisible}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setEmojiIconWrapVisible((v) => !v);
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
              onResult?.(value.trim());
            }}
          >
            {Intl.v('添加')}
          </Button>

          <Button className={`${selectorPrefix}-toolbar-item`} onClick={() => onCancel?.()}>
            {Intl.v('取消')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reply;
