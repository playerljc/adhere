import Mock from '@baifendian/adhere-mock';

const { Book } = Mock;

export default Book.map((t, index) => {
  const id = index;

  return {
    ...t,
    t: `${t.t}1`,
    value: id,
    label: t.t,
    publisher: t.label,
    id,
  };
});
