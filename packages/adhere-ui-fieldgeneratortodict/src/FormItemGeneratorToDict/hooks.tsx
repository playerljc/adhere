import { useMount, usePrevious, useUpdateEffect } from 'ahooks';
import { useMemo, useState } from 'react';

// import Util from '@baifendian/adhere-util';
import Dict from '@baifendian/adhere-util-dict';

import { LabelValue } from '../types';
import { deepDep } from './util';

/**
 * useTreeSelectLeaf
 * @description 处理TreeSelect数据的leaf
 * @param dataSource
 */
export function useTreeSelectLeaf(dataSource) {
  return useMemo<LabelValue[]>(() => {
    function loop(nodes) {
      (nodes || []).forEach((node) => {
        node.disabled = !('leaf' in node && node.leaf);

        loop(node.children);
      });
    }

    const source = JSON.parse(JSON.stringify(dataSource));

    loop(source);

    return source;
  }, [dataSource]);
}

/**
 * useAsyncTreeSelect
 * @param dictName
 * @param cascadeParams
 * @param onDataSourceChange
 * @param fetchBranch
 * @param defaultId
 * @param value
 */
export function useAsyncTreeSelect(
  dictName: string,
  { cascadeParams, onDataSourceChange, fetchBranch, defaultId, value },
) {
  const [treeData, setTreeData] = useState<LabelValue[]>([]);

  const previous = usePrevious(value);

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
    fetchBranch?.(value, cascadeParams)?.then?.((treeBranchNode) => {
      // const treeBranchNode = Util.arrayToAntdTreeSelect(data, {
      //   keyAttr: 'id',
      //   titleAttr: 'title',
      //   rootParentId: '0',
      //   parentIdAttr: 'pid',
      // });

      // if (!treeBranchNode || !Array.isArray(treeBranchNode) || !treeBranchNode.length) return;

      if (!treeBranchNode || !Array.isArray(treeBranchNode) || !treeBranchNode.length) return;

      setTreeData(treeBranchNode);
    });
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
            const node = findNodeById(_treeData, id);
            node.children = data;

            return [..._treeData];
          });
        });

        resolve(undefined);
      }, 300);
    });

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
    if (!previous && !!value) {
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
  };
}
