import Mockjs from 'mockjs';

import Mock from '@baifendian/adhere-mock';

const { Book } = Mock;

export default Book.map((t, _index) => {
  const id = `${_index + 1}`; //Mockjs.mock('@guid');

  return {
    ...t,
    title: t.label,
    t: `${t.t}1`,
    value: id,
    label: t.t,
    id,
  };
});
