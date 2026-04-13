import Copy from './copy';
import Delete from './delete';

export ACTIONS = [
  {
    key: Copy.key;
    label: Copy.label
    render: (id: string) => <Copy id={id} />;
  },
  {
    key: Delete.key;
    label: Delete.label
    render: (id: string) => <Delete id={id} />;
  },
];

export { Copy, Delete };
