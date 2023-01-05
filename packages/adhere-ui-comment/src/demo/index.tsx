// import { Tooltip } from 'antd';
// import faker from 'faker';
// import React, { useRef } from 'react';
// import ReactDOM from 'react-dom/client';
//
// import { DislikeOutlined, LikeFilled } from '@ant-design/icons';
// import AdhereConfigProvider from '@baifendian/adhere-ui-configprovider';
// import DateDisplay from '@baifendian/adhere-ui-datedisplay';
// import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';
//
// import Comment from '../index';
//
// import '../index.less';
// import './index.less';
//
// const CommentData = Array.from({ length: 300 }).map((t, index) => ({
//   id: index + 1,
//   name: faker.internet.userName(),
//   time: faker.date.past(),
//   icon: 'https://joeschmoe.io/api/v1/random',
//   info: faker.hacker.phrase(),
//   isMore: index % 2 === 0,
//   like: faker.random.number(),
//   dislike: faker.random.number(),
// }));
//
// const ReplyData = Array.from({ length: 300 }).map((t, index) => ({
//   id: index + 1,
//   name: faker.internet.userName(),
//   time: faker.date.past(),
//   icon: 'https://joeschmoe.io/api/v1/random',
//   info: faker.hacker.phrase(),
//   isMore: index % 2 === 0,
//   like: faker.random.number(),
//   dislike: faker.random.number(),
// }));
//
// function Wrap() {
//   const ref = useRef();
//
//   function fetchCommentData({ page, limit }) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           current: page,
//           totalPage: CommentData.length / limit + (CommentData.length % limit !== 0 ? 1 : 0),
//           list: CommentData.slice((page - 1) * limit, page * limit),
//           totalCount: CommentData.length,
//         });
//       }, 1500);
//     });
//   }
//
//   function renderCommentAuthor(record) {
//     return record?.name;
//   }
//
//   function renderCommentAvatar(record) {
//     return <img src={record?.icon} alt="" />;
//   }
//
//   function renderCommentActions(record, callback) {
//     return [
//       <Tooltip key="comment-basic-like" title="Like">
//         <span
//           onClick={() => {
//             setTimeout(() => {
//               record.like = faker.random.number();
//               callback({ ...record });
//             }, 1000);
//           }}
//         >
//           <LikeFilled />
//           <span style={{ marginLeft: 5 }}>{record.like}</span>
//         </span>
//       </Tooltip>,
//       <Tooltip key="comment-basic-dislike" title="Dislike">
//         <span
//           onClick={() => {
//             setTimeout(() => {
//               record.dislike = faker.random.number();
//               callback({ ...record });
//             }, 1000);
//           }}
//         >
//           <DislikeOutlined />
//           <span style={{ marginLeft: 5 }}>{record.dislike}</span>
//         </span>
//       </Tooltip>,
//     ];
//   }
//
//   function renderCommentContent(record) {
//     return record?.info;
//   }
//
//   function renderCommentDateTime(record) {
//     return <DateDisplay.DateDisplayFromNow value={record?.time} />;
//   }
//
//   function fetchReplyData({ page, limit, record }) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           current: page,
//           totalPage: ReplyData.length / limit + (ReplyData.length % limit !== 0 ? 1 : 0),
//           list: ReplyData.slice((page - 1) * limit, page * limit),
//           totalCount: ReplyData.length,
//         });
//       }, 1500);
//     });
//   }
//
//   function renderReplyAuthor(record) {
//     return record?.name;
//   }
//
//   function renderReplyAvatar(record) {
//     return <img src={record?.icon} alt="" />;
//   }
//
//   function renderReplyActions(record, callback) {
//     return [
//       <Tooltip key="comment-basic-like" title="Like">
//         <span
//           onClick={() => {
//             setTimeout(() => {
//               record.like = faker.random.number();
//               callback({ ...record });
//             }, 1000);
//           }}
//         >
//           <LikeFilled />
//           <span style={{ marginLeft: 5 }}>{record.like}</span>
//         </span>
//       </Tooltip>,
//       <Tooltip key="comment-basic-dislike" title="Dislike">
//         <span
//           onClick={() => {
//             setTimeout(() => {
//               record.dislike = faker.random.number();
//               callback({ ...record });
//             }, 1000);
//           }}
//         >
//           <DislikeOutlined />
//           <span style={{ marginLeft: 5 }}>{record.dislike}</span>
//         </span>
//       </Tooltip>,
//     ];
//   }
//
//   function renderReplyContent(record) {
//     return record?.info;
//   }
//
//   function renderReplyDateTime(record) {
//     return <DateDisplay.DateDisplayFromNow value={record?.time} />;
//   }
//
//   function fetchReply({ id, record, reply }) {
//     const indicator = GlobalIndicator.show(document.body, '');
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//         GlobalIndicator.hide(indicator);
//       }, 1000);
//     });
//   }
//
//   return (
//     <div className="ScrollWrap" ref={ref}>
//       <div className="Scroll">
//         <Comment
//           getScrollWrapContainer={() => ref.current}
//           fetchCommentData={fetchCommentData}
//           renderCommentActions={renderCommentActions}
//           renderCommentAuthor={renderCommentAuthor}
//           renderCommentAvatar={renderCommentAvatar}
//           renderCommentContent={renderCommentContent}
//           renderCommentDateTime={renderCommentDateTime}
//           fetchReplyData={fetchReplyData}
//           renderReplyActions={renderReplyActions}
//           renderReplyAuthor={renderReplyAuthor}
//           renderReplyAvatar={renderReplyAvatar}
//           renderReplyContent={renderReplyContent}
//           renderReplyDateTime={renderReplyDateTime}
//           fetchReply={fetchReply}
//           // replyLimit={1}
//           // renderCommentLoading={() => <Spin />}
//           // renderFirstLoading={() => <Spin />}
//           // listProps={{
//           //   scrollLoadProps: {
//           //     renderLoading: () => <Spin />,
//           //     renderEmpty: () => <Empty />,
//           //     renderError: () => <div>error</div>,
//           //   },
//           // }}
//         />
//       </div>
//     </div>
//   );
// }
//
// ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
//   <AdhereConfigProvider
//     intl={{
//       lang: 'zh_CN',
//       locales: {},
//     }}
//   >
//     {() => <Wrap />}
//   </AdhereConfigProvider>,
// );
