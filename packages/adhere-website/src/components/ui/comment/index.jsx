import P1CodeText from '!!raw-loader!./examples/p1';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';

import P1CSSCodeText from '!!raw-loader!./index.less';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="Comment">
        <p>评论</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
          {
            id: `p1`,
            name: `基本使用`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用',
              },
            },
            active: 'P1.jsx',
            config: [
              {
                key: 'P1.jsx',
                title: 'P1.jsx',
                codeText: P1CodeText,
              },
              {
                key: 'index.less',
                title: 'index.less',
                codeText: P1CSSCodeText,
              },
            ],

            type: 'PlayGroundTab',
            renderChildren: () => <P1 />,
            // <Popover
            //   placement="bottomLeft"
            //   content={<Picker data={data} onEmojiSelect={console.log} i18n={zh} />}
            //   // trigger="click"
            //   visible={emojiIconWrapVisible}
            // >
            //   <button onClick={() => setEmojiIconWrapVisible(!emojiIconWrapVisible)}>
            //     Emoji
            //   </button>
            // </Popover>
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'getScrollWrapContainer',
                desc: '获取滚动的目标元素',
                type: 'HTMLElement',
                defaultVal: 'document.body',
              },
              {
                params: 'fetchCommentData',
                desc: '获取评论数据',
                type: '(params?: any) => Promise<any>',
                defaultVal: '',
              },
              {
                params: 'commentDataKeys',
                desc: '评论返回值结构',
                type: `
                  {
                    current: string;
                    totalPage: string;
                    list: string;
                    totalCount: string;
                  }
                `,
                defaultVal: `{
                  current: 'current',
                  totalPage: 'totalPage',
                  list: 'list',
                  totalCount: 'totalCount',
                }`,
              },
              {
                params: 'commentLimit',
                desc: '评论一页数据数',
                type: 'number',
                defaultVal: '10',
              },
              {
                params: 'commentKeyProp',
                desc: '评论数据的唯一主键属性',
                type: 'string',
                defaultVal: 'id',
              },
              {
                params: 'renderCommentActions',
                desc: '渲染评论的操作区',
                type: '(params?: any) => ReactNode[] | null',
                defaultVal: '',
              },
              {
                params: 'renderCommentAuthor',
                desc: '渲染评论作者',
                type: '(params?: any) => ReactNode[] | null',
                defaultVal: '',
              },
              {
                params: 'renderCommentAvatar',
                desc: '渲染评论头像',
                type: '(params?: any) => ReactNode | null',
                defaultVal: '',
              },
              {
                params: 'renderCommentContent',
                desc: '渲染评论内容',
                type: '(params?: any) => ReactNode | null',
                defaultVal: '',
              },
              {
                params: 'renderCommentDateTime',
                desc: '渲染评论时间',
                type: '(params?: any) => ReactNode | null',
                defaultVal: '',
              },
              {
                params: 'renderCommentLoading',
                desc: '渲染评论的loading',
                type: '(params?: any) => ReactNode | null',
                defaultVal: '',
              },
              {
                params: 'fetchReplyData',
                desc: '加载回复数据',
                type: '(params?: any) => Promise<any>',
                defaultVal: '',
              },
              {
                params: 'replyDataKeys',
                desc: '回复数据结构',
                type: `{
                  current: string;
                  totalPage: string;
                  list: string;
                  totalCount: string;
                }`,
                defaultVal: `{
                  current: 'current',
                  totalPage: 'totalPage',
                  list: 'list',
                  totalCount: 'totalCount',
                }`,
              },
              {
                params: 'replyLimit',
                desc: '回复数据的分页数',
                type: 'number',
                defaultVal: '10',
              },
              {
                params: 'replyKeyProp',
                desc: '回复数据唯一主键属性',
                type: 'string',
                defaultVal: 'id',
              },
              {
                params: 'renderReplyActions',
                desc: '渲染回复的工具',
                type: '(params?: any) => ReactNode[] | null',
                defaultVal: '',
              },
              {
                params: 'renderReplyAuthor',
                desc: '渲染回复的作者',
                type: '(params?: any) => ReactNode | null',
                defaultVal: '',
              },
              {
                params: 'renderReplyAvatar',
                desc: '渲染回复的头像renderReplyAvatar',
                type: '(params?: any) => ReactNode | null',
                defaultVal: '',
              },
              {
                params: 'renderReplyContent',
                desc: '渲染回复内容',
                type: '(params?: any) => ReactNode | null',
                defaultVal: '',
              },
              {
                params: 'renderReplyDateTime',
                desc: '渲染回复的时间',
                type: '(params?: any) => ReactNode | null',
                defaultVal: '',
              },
              {
                params: 'renderReplyLoading',
                desc: '渲染回复loading',
                type: '(params?: any) => ReactNode | null',
                defaultVal: '',
              },
              {
                params: 'fetchReply',
                desc: '进行回复',
                type: '(params?: any) => Promise<any>',
                defaultVal: '',
              },
              {
                params: 'listProps',
                desc: 'ScrollList的props',
                type: 'any',
                defaultVal: '{}',
              },
              {
                params: 'isMoreProp',
                desc: '是否有更多的属性',
                type: 'string',
                defaultVal: 'isMore',
              },
              {
                params: 'flexLayoutProps',
                desc: 'flexLayout的props',
                type: 'FlexLayoutProps',
                defaultVal: '{}',
              },
              {
                params: 'renderEmpty',
                desc: '无数据的渲染',
                type: '() => ReactElement | null',
                defaultVal: '',
              },
              {
                params: 'renderFirstLoading',
                desc: '第一次的渲染',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'showReplyText',
                desc: '回复的文本',
                type: 'string | Function',
                defaultVal: '',
              },
              {
                params: 'hideReplyText',
                desc: '隐藏回复的文本',
                type: 'string | Function',
                defaultVal: '',
              },
              {
                params: 'loadMoreReplyText',
                desc: '加载更多数据的文本',
                type: 'string | Function',
                defaultVal: '',
              },
              {
                params: 'showReplyTextIcon',
                desc: '滚动',
                type: '回复文本的图标',
                defaultVal: 'ReactNode | Function',
              },
              {
                params: 'hideReplyTextIcon',
                desc: '隐藏回复的图标',
                type: 'ReactNode | Function',
                defaultVal: '',
              },
              {
                params: 'loadMoreCollapseTextIcon',
                desc: '加载更多数据的图标',
                type: 'ReactNode | Function',
                defaultVal: '',
              },
              {
                params: 'local',
                desc: '国际化',
                type: 'Local',
                defaultVal: 'zh',
              },
              {
                params: 'emojiPickerProps',
                desc: '表情组件的Props',
                type: 'any',
                defaultVal: '{}',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
