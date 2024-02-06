import Mock from '@baifendian/adhere-mock';

const { Book } = Mock;

export default Book.map((t, index) => {
  const id = index; //Mock.mock('@guid');

  return {
    ...t,
    t: `${t.t}1`,
    value: id,
    label: t.t,
    id,
  };
});
