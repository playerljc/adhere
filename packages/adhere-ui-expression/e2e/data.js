export const keywords = ['java', 'c++', 'javascript', 'react', 'vue', 'spring'];

export function filterKeywords(text) {
  if (!text) return [];

  return keywords
    .filter((kw) => kw.includes(text))
    .map((t) => ({
      label: t,
      value: t,
    }));
}

export const variableItems = [
  { label: '申请人姓名', key: '1' },
  { label: '申请编号', key: '2' },
  { label: '下载签证链接', key: '3' },
  { label: '签证到期时间', key: '4' },
  { label: '签证申请审核意见', key: '5' },
  { label: '账户', key: '6' },
  { label: '激活链接', key: '7' },
  { label: '登录链接', key: '8' },
  { label: '签证号', key: '9' },
];
