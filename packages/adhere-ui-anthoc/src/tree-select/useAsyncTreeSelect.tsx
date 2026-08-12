import { useMount, useUpdateEffect } from 'ahooks';
import { TreeSelectProps } from 'antd';
import { useRef, useState } from 'react';

import type { UseAsyncTreeSelect } from '../types';

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
const useAsyncTreeSelect: UseAsyncTreeSelect = ({
  cascadeParams,
  onDataSourceChange,
  fetchBranch,
  fetchData,
  defaultId,
  value,
  treeDataSimpleMode,
}) => {
  const [treeData, setTreeData] = useState<TreeSelectProps['treeData']>([]);

  const changeValue = useRef<any>(undefined);

  /**
   * findNodeById
   * @description 通过id寻找节点
   * @param treeData
   * @param {string} id
   * @return object
   */
  const findNodeById = (treeData, id) => {
    function loop(_treeData) {
      let result;
      for (let i = 0; i < _treeData.length; i++) {
        if (Object.is(_treeData[i].value, id)) {
          result = _treeData[i];
          break;
        } else {
          result = loop(_treeData[i].children || []);

          if (result) {
            break;
          }
        }
      }

      return result;
    }

    return loop(treeData);
  };

  /**
   * loadDefaultData
   * @description 加载初始化的数据
   */
  const loadDefaultData = () => {
    fetchData(defaultId ?? '', cascadeParams).then((treeData) => {
      setTreeData(treeData);
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
    Promise.all([loadData(defaultId, cascadeParams), fetchBranch?.(value, cascadeParams)]).then(
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
   * @param cascadeParams
   */
  const loadData = (id, cascadeParams) => fetchData(id, cascadeParams).then((data) => data);

  /**
   * onLoadData
   * @return {Promise<undefined>}
   * @param nodeData
   */
  const onLoadData = (nodeData) =>
    new Promise<unknown>((resolve) => {
      setTimeout(() => {
        const { value: id, ...cascadeParams } = nodeData;

        loadData(id, cascadeParams).then((data) => {
          setTreeData((_treeData) => {
            // 拉平数据处理
            if (!!treeDataSimpleMode) {
              return [...(data ?? []), ...(_treeData?.filter?.((t) => t.pId !== id) ?? [])];
            }

            // 正常数据处理 —— 不可直接 mutation state 节点，需要返回新树
            function cloneTreeWithNewChildren(nodes: any[]): any[] {
              return nodes.map((n) => {
                if (!Object.is(n.value, id)) {
                  return n.children
                    ? { ...n, children: cloneTreeWithNewChildren(n.children) }
                    : n;
                }

                // 找到目标节点，生成新 children
                const existingChildren: any[] = Array.isArray(n.children) ? n.children : [];
                const newChildren =
                  existingChildren.length === 0
                    ? (data ?? [])
                    : [
                        ...existingChildren,
                        // 过滤掉已存在的子节点（按 value 去重）
                        ...(data?.filter?.(
                          (t) => !existingChildren.find((c) => c.value === t.value),
                        ) ?? []),
                      ];

                return { ...n, children: newChildren };
              });
            }

            return cloneTreeWithNewChildren(_treeData ?? []);
          });
        });

        resolve(undefined);
      }, 300);
    });

  const onChange = (callback, params) => {
    changeValue.current = params;
    callback?.(...params);
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
    } else {
      changeValue.current = undefined;
    }
  }, [value]);

  useUpdateEffect(() => {
    if (value) {
      loadDefaultBranchData();
    } else {
      loadDefaultData();
    }
  }, [JSON.stringify(cascadeParams)]);

  useUpdateEffect(() => {
    onDataSourceChange?.(treeData);
  }, [treeData]);

  return {
    treeData,
    onLoadData,
    onChange,
  };
};

export default useAsyncTreeSelect;
