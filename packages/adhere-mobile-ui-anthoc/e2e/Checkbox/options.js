export const letterOptions = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    title: letter,
    value: letter,
    children: letter,
  };
});

export const pagingOptions = Array.from({ length: 100 }).map((t, _index) => {
  return {
    title: `${_index + 1}`,
    value: _index + 1,
    children: `${_index + 1}`,
  };
});
