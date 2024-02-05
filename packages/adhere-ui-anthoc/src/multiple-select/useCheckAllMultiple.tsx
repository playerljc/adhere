import classNames from 'classnames';
import React, { ReactNode, useRef } from 'react';

import CheckAllWrapper from '../CheckAllWrapper';
import { UseCheckAllMultiple } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';

const selectorPrefix = 'adhere-ui-ant-hoc-check-all-select';

/**
 * useCheckAllMultiple
 * @param children
 * @param checkAllWrapperClassName
 * @param checkAllWrapperStyle
 * @param dropdownWrapperClassName
 * @param dropdownWrapperStyle
 * @param renderLoading
 * @param loading
 */
const useCheckAllMultiple: UseCheckAllMultiple = ({
  children,
  checkAllWrapperClassName,
  checkAllWrapperStyle,
  dropdownWrapperClassName,
  dropdownWrapperStyle,
  render,
  renderLoading,
}) => {
  const currentOriginNode = useRef<ReactNode>();

  const dropdownRenderElement = useRef<ReactNode>();

  const fetchLoading = useAutoCompleteFetchLoading(renderLoading);

  return {
    currentOriginNode: currentOriginNode.current,
    dropdownRenderElement: dropdownRenderElement.current,
    renderProps: ({ originNode, ..._renderProps }) => {
      currentOriginNode.current = originNode;

      // @ts-ignore
      dropdownRenderElement.current = children?.({
        originNode,
        ..._renderProps,
      });

      const CheckAllOrigin = <CheckAllWrapper {..._renderProps} />;

      const ChildrenOrigin = dropdownRenderElement.current;

      return (
        <>
          {_renderProps.loading && fetchLoading}

          {!_renderProps.loading && (
            <div className={`${selectorPrefix}`}>
              {render?.(CheckAllOrigin, ChildrenOrigin) ?? (
                <>
                  <div
                    className={classNames(
                      `${selectorPrefix}-check-all`,
                      checkAllWrapperClassName ?? '',
                    )}
                    style={checkAllWrapperStyle ?? {}}
                  >
                    {CheckAllOrigin}
                  </div>

                  <div
                    className={classNames(
                      `${selectorPrefix}-dropdown`,
                      dropdownWrapperClassName ?? '',
                    )}
                    style={dropdownWrapperStyle ?? {}}
                  >
                    {ChildrenOrigin}
                  </div>
                </>
              )}
            </div>
          )}
        </>
      );
    },
  };
};

export default useCheckAllMultiple;
