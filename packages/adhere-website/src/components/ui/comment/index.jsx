import React, { useRef, useState } from 'react';
import { Tooltip /*Popover*/ } from 'antd';
import { Comment, DateDisplay, GlobalIndicator } from '@baifendian/adhere';
import faker from 'faker';
import PlayGroundPage, { Section, PropsSection, CodeBoxSection } from '@/lib/PlaygroundPage';
import { LikeFilled, DislikeOutlined } from '@ant-design/icons';
// import data from '@emoji-mart/data';
// import Picker from '@emoji-mart/react';
// import zh from '@emoji-mart/data/i18n/zh.json';
import styles from './index.less';

const CommentData = Array.from({ length: 300 }).map((t, index) => ({
  id: index + 1,
  name: faker.internet.userName(),
  time: faker.date.past(),
  icon: 'https://joeschmoe.io/api/v1/random',
  info: faker.hacker.phrase(),
  isMore: index % 2 === 0,
  like: faker.random.number(),
  dislike: faker.random.number(),
}));

const ReplyData = Array.from({ length: 300 }).map((t, index) => ({
  id: index + 1,
  name: faker.internet.userName(),
  time: faker.date.past(),
  icon: 'https://joeschmoe.io/api/v1/random',
  info: faker.hacker.phrase(),
  isMore: index % 2 === 0,
  like: faker.random.number(),
  dislike: faker.random.number(),
}));

export default () => {
  const ref = useRef();

  // const [emojiIconWrapVisible, setEmojiIconWrapVisible] = useState(false);

  function fetchCommentData({ page, limit }) {
    console.log('fetchCommentData', page, limit);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          current: page,
          totalPage: CommentData.length / limit + (CommentData.length % limit !== 0 ? 1 : 0),
          list: CommentData.slice((page - 1) * limit, page * limit),
          totalCount: CommentData.length,
        });
      }, 1500);
    });
  }

  function renderCommentAuthor(record) {
    return record?.name;
  }

  function renderCommentAvatar(record) {
    return <img src={record?.icon} alt="" />;
  }

  function renderCommentActions(record, callback) {
    return [
      <Tooltip key="comment-basic-like" title="Like">
        <span
          onClick={() => {
            setTimeout(() => {
              record.like = faker.random.number();
              callback({ ...record });
            }, 1000);
          }}
        >
          <LikeFilled />
          <span style={{ marginLeft: 5 }}>{record.like}</span>
        </span>
      </Tooltip>,
      <Tooltip key="comment-basic-dislike" title="Dislike">
        <span
          onClick={() => {
            setTimeout(() => {
              record.dislike = faker.random.number();
              callback({ ...record });
            }, 1000);
          }}
        >
          <DislikeOutlined />
          <span style={{ marginLeft: 5 }}>{record.dislike}</span>
        </span>
      </Tooltip>,
    ];
  }

  function renderCommentContent(record) {
    return record?.info;
  }

  function renderCommentDateTime(record) {
    return <DateDisplay.DateDisplayFromNow value={record?.time} />;
  }

  function fetchReplyData({ page, limit, record }) {
    console.log('fetchReplyData', page, limit, record);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          current: page,
          totalPage: ReplyData.length / limit + (ReplyData.length % limit !== 0 ? 1 : 0),
          list: ReplyData.slice((page - 1) * limit, page * limit),
          totalCount: ReplyData.length,
        });
      }, 1500);
    });
  }

  function renderReplyAuthor(record) {
    return record?.name;
  }

  function renderReplyAvatar(record) {
    return <img src={record?.icon} alt="" />;
  }

  function renderReplyActions(record, callback) {
    return [
      <Tooltip key="comment-basic-like" title="Like">
        <span
          onClick={() => {
            setTimeout(() => {
              record.like = faker.random.number();
              callback({ ...record });
            }, 1000);
          }}
        >
          <LikeFilled />
          <span style={{ marginLeft: 5 }}>{record.like}</span>
        </span>
      </Tooltip>,
      <Tooltip key="comment-basic-dislike" title="Dislike">
        <span
          onClick={() => {
            setTimeout(() => {
              record.dislike = faker.random.number();
              callback({ ...record });
            }, 1000);
          }}
        >
          <DislikeOutlined />
          <span style={{ marginLeft: 5 }}>{record.dislike}</span>
        </span>
      </Tooltip>,
    ];
  }

  function renderReplyContent(record) {
    return record?.info;
  }

  function renderReplyDateTime(record) {
    return <DateDisplay.DateDisplayFromNow value={record?.time} />;
  }

  function fetchReply({ id, record, reply }) {
    const indicator = GlobalIndicator.show(document.body, '');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        GlobalIndicator.hide(indicator);
      }, 1000);
    });
  }

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
            codeText: ``,
            type: 'PlayGround',
            renderChildren: () => (
              <>
                <div className={styles.ScrollWrap} ref={ref}>
                  <div className={styles.Scroll}>
                    <Comment
                      getScrollWrapContainer={() => ref.current}
                      fetchCommentData={fetchCommentData}
                      renderCommentActions={renderCommentActions}
                      renderCommentAuthor={renderCommentAuthor}
                      renderCommentAvatar={renderCommentAvatar}
                      renderCommentContent={renderCommentContent}
                      renderCommentDateTime={renderCommentDateTime}
                      fetchReplyData={fetchReplyData}
                      renderReplyActions={renderReplyActions}
                      renderReplyAuthor={renderReplyAuthor}
                      renderReplyAvatar={renderReplyAvatar}
                      renderReplyContent={renderReplyContent}
                      renderReplyDateTime={renderReplyDateTime}
                      fetchReply={fetchReply}
                      // replyLimit={1}
                      // renderCommentLoading={() => <Spin />}
                      // renderFirstLoading={() => <Spin />}
                      // listProps={{
                      //   scrollLoadProps: {
                      //     renderLoading: () => <Spin />,
                      //     renderEmpty: () => <Empty />,
                      //     renderError: () => <div>error</div>,
                      //   },
                      // }}
                    />
                  </div>
                </div>

                {/*<Popover
                  placement="bottomLeft"
                  content={<Picker data={data} onEmojiSelect={console.log} i18n={zh} />}
                  // trigger="click"
                  visible={emojiIconWrapVisible}
                >
                  <button onClick={() => setEmojiIconWrapVisible(!emojiIconWrapVisible)}>
                    Emoji
                  </button>
                </Popover>*/}
              </>
            ),
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
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'zIndex',
                desc: '层级',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'duration',
                desc: '动画持续的事件',
                type: 'number',
                defaultVal: '300',
              },
              {
                params: 'target',
                desc: '获取滚动的目标元素',
                type: '() => HtmlElement | Window',
                defaultVal: '',
              },
              {
                params: 'onTrigger',
                desc: '点击事件',
                type: '() => void',
                defaultVal: '',
              },
              {
                params: 'onScrollTop',
                desc: '滚动',
                type: '(value: number) => void',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
