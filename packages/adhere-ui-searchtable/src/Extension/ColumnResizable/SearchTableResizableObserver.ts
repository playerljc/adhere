export default (context) => {
  const observer = new MutationObserver((mutationsList) => {
    const list = mutationsList.filter(
      // @ts-ignore
      (t) => t.type === 'childList' && t.target?.tagName?.toLowerCase() === 'colgroup',
    );

    if (list.length) {
      const columns = context.getTableColumns();
      if (list.length - 1 === columns.length) {
        // 停止监控
        observer?.disconnect?.();
        context?.forceUpdate?.();
      }
    }
  });

  observer.observe(context.tableWrapRef.current, {
    attributes: false,
    childList: true,
    subtree: true,
  });

  return observer;
};
