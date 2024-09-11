import Mockjs from 'mockjs';
import MockJS from 'mockjs';

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

const options = Array.from({ length: 1000 }).map((t, _index) => {
  const value = MockJS.mock('@guid');
  const title = `${MockJS.mock('@name')}1`;

  return {
    value,
    title,
    label: title,
    children: title,
    id: value,
    description: title,
  };
});

export { Province, City, County, options };
