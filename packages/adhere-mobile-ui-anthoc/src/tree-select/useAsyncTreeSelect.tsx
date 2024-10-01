import { useMount, useUpdateEffect } from 'ahooks';
import { useRef, useState } from 'react';

import type { TreeSelectProps } from '@baifendian/adhere-mobile-ui-tree/es/types';

import type { UseAsyncTreeSelect } from '../types';

/**
 * useAsyncTreeSelect
 * @param dictName
 * @param cascadeParams
 * @param onDataSourceChange
 * @param fetchBranch
 * @param defaultId
 * @param value
 */
const useAsyncTreeSelect: UseAsyncTreeSelect = ({
  cascadeParams,
  onDataSourceChange,
  fetchBranch,
  fetchData,
  defaultId,
  value,
}) => {
  const [treeData, setTreeData] = useState<TreeSelectProps['treeData']>([]);

  const changeValue = useRef();

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
        if (Object.is(_treeData[i].key, id)) {
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
    if (!fetchBranch) return;

    // 回显 回显数据 并集 topLevel
    Promise.all([loadData(defaultId), fetchBranch?.(value, cascadeParams)]).then(
      ([rootNodes = [], treeBranchNode = []]) => {
        setTreeData([
          ...(treeBranchNode ?? []),
          ...(rootNodes ?? []).filter(
            (_node) => !(treeBranchNode ?? []).map((t) => t.key).includes(_node.key),
          ),
        ]);
      },
    );
  };

  /**
   * loadData
   * @description Async加载数据
   * @param {string} id
   */
  const loadData = (id) => fetchData(id, cascadeParams).then((data) => data);

  /**
   * onLoadData
   * @param id
   * @return {Promise<undefined>}
   */
  const onLoadData = ({ key: id }) =>
    new Promise<unknown>((resolve) => {
      setTimeout(() => {
        loadData(id).then((data) => {
          setTreeData((_treeData) => {
            // 正常数据处理
            const node = findNodeById(_treeData, id);

            // children中可能有回显数据，需要分情况处理
            if (node.children && Array.isArray(node.children)) {
              if (!node.children.length) {
                node.children = data;
              } else {
                node.children = [
                  ...node.children,
                  ...(data?.filter?.((t) => node.children.find((n) => n.key !== t.key)) ?? []),
                ];
              }
            } else {
              node.children = data;
            }

            return [...(_treeData ?? [])];
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
