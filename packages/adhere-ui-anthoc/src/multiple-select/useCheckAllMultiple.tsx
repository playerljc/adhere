import classNames from 'classnames';
import React, { ReactElement, ReactNode, useRef } from 'react';

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

      dropdownRenderElement.current = children?.({
        originNode,
        ..._renderProps,
      });

      return (
        <>
          {_renderProps.loading && fetchLoading}

          {!_renderProps.loading && (
            <div className={`${selectorPrefix}`}>
              <div
                className={classNames(
                  `${selectorPrefix}-check-all`,
                  checkAllWrapperClassName ?? '',
                )}
                style={checkAllWrapperStyle ?? {}}
              >
                <CheckAllWrapper {..._renderProps} />
              </div>

              <div
                className={classNames(`${selectorPrefix}-dropdown`, dropdownWrapperClassName ?? '')}
                style={dropdownWrapperStyle ?? {}}
              >
                {dropdownRenderElement.current}
              </div>
            </div>
          )}
        </>
      );
    },
  };
};

export default useCheckAllMultiple;
