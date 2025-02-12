import Mockjs from 'mockjs';

import Mock from '@baifendian/adhere-mock';

const { Book } = Mock;

export default Book.map((t) => {
  const id = Mockjs.mock('@guid');

  return {
    ...t,
    value: id,
    label: t.t,
    id,
  };
});
