import { Button, Input, Popover } from 'antd';
import React, { memo, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';

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

import type { ReplyProps, Local, EmojiPickerProps } from '../../types';
import EmojiIcon from './emoji';

const { TextArea } = Input;

const { useSetState } = Hooks;

const selectorPrefix = 'adhere-ui-comment-reply';

/**
 * 语言映射表
 */
const LOCAL_MAP = new Map<Local, any>([
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
 * 表情选择事件参数
 */
interface EmojiSelectEvent {
  /** 表情的原始字符 */
  native: string;
}

/**
 * 回复提交组件
 * 
 * @description 提供回复内容的输入、表情选择和提交功能
 * @param props - 组件属性
 * @returns 回复提交组件实例
 * 
 * @example
 * ```tsx
 * <ReplySubmit
 *   onCancel={() => setShowReply(false)}
 *   onResult={(reply) => submitReply(reply)}
 *   local="zh"
 * />
 * ```
 */
const ReplySubmit = memo<ReplyProps>((props) => {
  const { local = 'zh', emojiPickerProps = {}, onResult, onCancel } = props;

  const [valueRef, setValue] = useSetState<string>('');

  // 回复内容的textarea引用
  const textAreaRef = useRef<HTMLDivElement | null>(null);

  // 表情选择器容器引用
  const emojiWrapRef = useRef<HTMLDivElement | null>(null);

  // 表情选择器显示状态
  const [emojiIconWrapVisible, setEmojiIconWrapVisible] = useState(false);

  /**
   * 处理表情选择
   * @param event - 表情选择事件
   */
  const onEmojiSelect = useCallback(
    ({ native }: EmojiSelectEvent) => {
      // 获取textarea的DOM元素
      const textareaEl = textAreaRef?.current?.querySelector('textarea') as HTMLTextAreaElement;

      if (!textareaEl) return;

      // 光标开始索引
      const { selectionStart } = textareaEl;

      // 在光标位置插入表情
      setValue(
        `${valueRef.current.substring(0, selectionStart)}${native}${valueRef.current.substring(
          selectionStart,
        )}`,
        () => {
          textareaEl.focus();
          textareaEl.setSelectionRange(
            selectionStart + native.length,
            selectionStart + native.length,
          );
        },
      );
    },
    [valueRef.current, setValue],
  );

  /**
   * 表情选择器内容
   */
  const PopoverContent = useMemo(
    () => (
      <Picker
        data={data}
        i18n={LOCAL_MAP.get(local || 'zh')}
        onEmojiSelect={onEmojiSelect}
        {...(emojiPickerProps ?? {})}
      />
    ),
    [data, local, onEmojiSelect, emojiPickerProps],
  );

  /**
   * 处理文档点击事件
   */
  useLayoutEffect(() => {
    /**
     * 处理文档主体点击
     * @param e - 点击事件
     */
    function onDocBodyClick(e: MouseEvent) {
      const target = e.target as Element;
      const textareaEl = textAreaRef?.current as HTMLDivElement;

      const textarea = textareaEl.querySelector('textarea');
      if (textarea && !textarea.contains(target)) {
        setEmojiIconWrapVisible(false);
      }
    }

    /**
     * 处理表情容器点击
     * @param e - 点击事件
     */
    function onEmojiWrapClick(e: Event) {
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
          placeholder={Intl.get('enter_reply')}
          autoFocus={true}
          value={valueRef.current}
          onChange={(e) => setValue(e.target.value)}
          showCount
          maxLength={100}
        />
      </div>

      <div ref={emojiWrapRef} className={`${selectorPrefix}-toolbar-emoji-wrap`} />

      <div className={`${selectorPrefix}-toolbar`}>
        <Popover
          placement="bottomLeft"
          getPopupContainer={() => emojiWrapRef.current!}
          content={PopoverContent}
          open={emojiIconWrapVisible}
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
            disabled={!valueRef.current}
            onClick={() => onResult?.(valueRef.current.trim())}
          >
            {Intl.get('add')}
          </Button>

          <Button className={`${selectorPrefix}-toolbar-item`} onClick={() => onCancel?.()}>
            {Intl.get('cancel')}
          </Button>
        </div>
      </div>
    </div>
  );
});

ReplySubmit.displayName = 'ReplySubmit';

export default ReplySubmit;
