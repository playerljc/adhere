import Mockjs from 'mockjs';

import Mock from '@baifendian/adhere-mock';

const { Book, Province, City, County } = Mock;

export const books = Book.map((t) => ({
  ...t,
  label: t.t,
  title: t.t,
  children: t.t,
  value: Mockjs.mock('@guid'),
  id: t.itemid,
  key: t.itemid,
}));

export { Province, City, County };
