import { useMount, useUpdateEffect } from 'ahooks';
import { useCallback, useMemo, useRef, useState } from 'react';

import Util from '@baifendian/adhere-util';
import Dict from '@baifendian/adhere-util-dict';

import type { LabelValue, UseTreeSelectLeaf } from '../types';
import { deepDep } from './util';

/**
 * useTreeSelectLeaf
 * @description 处理TreeSelect数据的isLeaf
 * @param dataSource
 */
export const useTreeSelectLeaf: UseTreeSelectLeaf = (dataSource) =>
  useMemo<LabelValue[]>(() => {
    function loop(nodes) {
      (nodes || []).forEach((node) => {
        node.disabled = !('isLeaf' in node && node.isLeaf);

        loop(node.children);
      });
    }

    const source = JSON.parse(JSON.stringify(dataSource));

    loop(source);

    return source;
  }, [dataSource]);

/**
 * useAsyncTreeSelect
 * @param dictName
 * @param cascadeParams
 * @param onDataSourceChange
 * @param fetchBranch
 * @param defaultId
 * @param value
 * @param treeDataSimpleMode
 */
export const useAsyncTreeSelect = (
  dictName: string,
  { cascadeParams, onDataSourceChange, fetchBranch, defaultId, value, treeDataSimpleMode },
) => {
  const [treeData, setTreeData] = useState<LabelValue[]>([]);

  const changeValue = useRef();

  const handler = Dict.value[dictName].value;

  /**
   * findNodeById
   * @description 通过id寻找节点
   * @param _treeData
   * @param {string} id
   * @return object
   */
  const findNodeById = (_treeData, id) => {
    function loop(_data) {
      let result;
      for (let i = 0; i < _data.length; i++) {
        if (_data[i].value === id) {
          result = _data[i];
          break;
        } else {
          result = loop(_data[i].children || []);

          if (result) {
            break;
          }
        }
      }

      return result;
    }

    return loop(_treeData);
  };

  /**
   * loadDefaultData
   * @description 加载初始化的数据
   */
  const loadDefaultData = () => {
    handler(defaultId ?? '', cascadeParams).then((data) => {
      setTreeData(data);
    });
  };

  /**
   * loadDefaultBranchData
   * @description 加载回显的数据
   */
  const loadDefaultBranchData = () => {
    // const treeBranchNode = Util.arrayToAntdTreeSelect(data, {
    //   keyAttr: 'id',
    //   titleAttr: 'title',
    //   rootParentId: '0',
    //   parentIdAttr: 'pid',
    // });

    if (!fetchBranch) return;

    // 回显 回显数据 并集 topLevel
    Promise.all([loadData(defaultId), fetchBranch?.(value, cascadeParams)]).then(
      ([rootNodes = [], treeBranchNode = []]) => {
        setTreeData([
          ...(treeBranchNode ?? []),
          ...(rootNodes ?? []).filter(
            (_node) => !(treeBranchNode ?? []).map((t) => t.value).includes(_node.value),
          ),
        ]);
      },
    );
  };

  /**
   * loadData
   * @description Async加载数据
   * @param {string} id
   * @return {LabelValue[]}
   */
  const loadData = (id) => handler(id, cascadeParams).then((data) => data);

  /**
   * onLoadData
   * @param id
   * @return {Promise<undefined>}
   */
  const onLoadData = ({ value: id }) =>
    new Promise<unknown>((resolve) => {
      setTimeout(() => {
        loadData(id).then((data) => {
          setTreeData((_treeData) => {
            // 拉平数据处理
            if (!!treeDataSimpleMode) {
              return [...data, ..._treeData.filter((t) => t.pId !== id)];
            }

            // 正常数据处理
            const node = findNodeById(_treeData, id);

            // children中可能有回显数据，需要分情况处理
            if (node.children && Array.isArray(node.children)) {
              if (!node.children.length) {
                node.children = data;
              } else {
                node.children = [
                  ...node.children,
                  ...data.filter((t) => node.children.find((n) => n.value !== t.value)),
                ];
              }
            } else {
              node.children = data;
            }

            return [..._treeData];
          });
        });

        resolve(undefined);
      }, 300);
    });

  const onChange = (callback, params) => {
    changeValue.current = params;
    callback(...params);
  };

  useMount(() => {
    debugger;

    if (value) {
      if (Array.isArray(value)) {
        if (!!value.length) {
          loadDefaultBranchData();
        } else {
          loadDefaultData();
        }
      } else {
        loadDefaultBranchData();
      }
    } else {
      loadDefaultData();
    }
  });

  useUpdateEffect(() => {
    if (!changeValue.current) {
      loadDefaultBranchData();
    }
  }, [value]);

  useUpdateEffect(() => {
    if (value) {
      loadDefaultBranchData();
    } else {
      loadDefaultData();
    }
  }, [deepDep(cascadeParams)]);

  useUpdateEffect(() => {
    onDataSourceChange?.(treeData);
  }, [treeData]);

  return {
    treeData,
    onLoadData,
    onChange,
  };
};

/**
 * useAsyncCascader
 * @param dictName
 * @param cascadeParams
 * @param onDataSourceChange
 * @param fetchBranch
 * @param defaultId
 * @param value
 * @param treeDataSimpleMode
 */
export function useAsyncCascader(
  dictName: string,
  { cascadeParams, onDataSourceChange, fetchBranch, defaultId, value, treeDataSimpleMode },
) {
  const [treeData, setTreeData] = useState<LabelValue[]>([]);

  const changeValue = useRef();

  const handler = Dict.value[dictName].value;

  /**
   * findNodeById
   * @description 通过id寻找节点
   * @param _treeData
   * @param {string} id
   * @return object
   */
  const findNodeById = (_treeData, id) => {
    function loop(_data) {
      let result;
      for (let i = 0; i < _data.length; i++) {
        if (_data[i].value === id) {
          result = _data[i];
          break;
        } else {
          result = loop(_data[i].children || []);

          if (result) {
            break;
          }
        }
      }

      return result;
    }

    return loop(_treeData);
  };

  /**
   * loadDefaultData
   * @description 加载初始化的数据
   */
  const loadDefaultData = () => {
    handler(defaultId ?? '', cascadeParams).then((data) => {
      setTreeData(data);
    });
  };

  /**
   * loadDefaultBranchData
   * @description 加载回显的数据
   */
  const loadDefaultBranchData = () => {
    // const treeBranchNode = Util.arrayToAntdTreeSelect(data, {
    //   keyAttr: 'id',
    //   titleAttr: 'title',
    //   rootParentId: '0',
    //   parentIdAttr: 'pid',
    // });

    if (!fetchBranch) return;

    // 回显 回显数据 并集 topLevel
    Promise.all([loadData(defaultId), fetchBranch?.(value, cascadeParams)]).then(
      ([rootNodes, treeBranchNode]) => {
        setTreeData([
          ...treeBranchNode,
          ...rootNodes.filter((_node) => !treeBranchNode.map((t) => t.value).includes(_node.value)),
        ]);
      },
    );
  };

  /**
   * loadData
   * @description Async加载数据
   * @param {string} id
   * @return {LabelValue[]}
   */
  const loadData = (id) => handler(id, cascadeParams).then((data) => data);

  /**
   * onLoadData
   * @return {Promise<undefined>}
   * @param selectedOptions
   */
  const onLoadData = (selectedOptions) =>
    new Promise<unknown>((resolve) => {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      const id = targetOption.value;

      setTimeout(() => {
        loadData(id).then((data) => {
          setTreeData((_treeData) => {
            // 拉平数据处理
            if (!!treeDataSimpleMode) {
              return [...data, ..._treeData.filter((t) => t.pId !== id)];
            }

            const node = findNodeById(_treeData, id);

            // children中可能有回显数据，需要分情况处理
            if (node.children && Array.isArray(node.children)) {
              if (!node.children.length) {
                node.children = data;
              } else {
                node.children = [
                  ...node.children,
                  ...data.filter((t) => node.children.find((n) => n.value !== t.value)),
                ];
              }
            } else {
              node.children = data;
            }

            return [..._treeData];
          });
        });

        resolve(undefined);
      }, 300);
    });

  const onChange = (callback, params) => {
    changeValue.current = params;
    callback(...params);
  };

  useMount(() => {
    if (value) {
      if (Array.isArray(value)) {
        if (!!value.length) {
          loadDefaultBranchData();
        } else {
          loadDefaultData();
        }
      } else {
        loadDefaultBranchData();
      }
    } else {
      loadDefaultData();
    }
  });

  useUpdateEffect(() => {
    if (!changeValue.current) {
      loadDefaultBranchData();
    }
  }, [value]);

  useUpdateEffect(() => {
    if (value) {
      loadDefaultBranchData();
    } else {
      loadDefaultData();
    }
  }, [deepDep(cascadeParams)]);

  useUpdateEffect(() => {
    onDataSourceChange?.(treeData);
  }, [treeData]);

  return {
    treeData,
    onLoadData,
    onChange,
  };
}

/**
 * useCascaderData
 * @description 拉平数据处理
 * @param {Array} options
 * @param {Object} config
 * @param {boolean} async
 */
export function useCascaderData({ options, treeDataSimpleMode, config }) {
  const getTreeData = useCallback(
    () =>
      Util.arrayToAntdTreeSelect(options, {
        keyAttr: config?.keyAttr ?? 'value',
        titleAttr: config?.titleAttr ?? 'value',
        rootParentId: config?.rootParentId ?? 0,
        parentIdAttr: config?.parentIdAttr ?? 'pId',
      }),
    [options],
  );

  return treeDataSimpleMode ? getTreeData() : options;
}
