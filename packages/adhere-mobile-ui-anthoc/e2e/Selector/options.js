export const letterOptions = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    label: letter,
    value: letter,
    description: letter,
  };
});

export const pagingOptions = Array.from({ length: 1000 }).map((t, _index) => {
  return {
    label: `${_index + 1}`,
    value: _index + 1,
    description: `${_index + 1}`,
  };
});

export const defaultPaging = {
  limit: 40,
};

export const selectorStyle = {
  '--border-radius': '100px',
  '--border': 'solid transparent 1px',
  '--checked-border': 'solid var(--adm-color-primary) 1px',
  '--padding': '8px 24px',
};
