import classNames from 'classnames';
import debounce from 'lodash.debounce';
import React from 'react';
import type { FC } from 'react';

import type { PopoverTriggerProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-popover-trigger';

const DEFAULT_TRIGGER_ICON =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzA4Mzk0ODMxMTcxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4MDciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTQxMy42MTA2NjcgMTMwLjA5MDY2N2EzMiAzMiAwIDAgMSAyNy45MDQgMzUuNTg0bC05LjI1ODY2NyA3Ni4zNzMzMzNhMzIgMzIgMCAxIDEtNjMuNTMwNjY3LTcuNjhsOS4yNTg2NjctNzYuMzczMzMzYTMyIDMyIDAgMCAxIDM1LjYyNjY2Ny0yNy45MDR6TTIwMC4wMjEzMzMgMTM2LjcwNGEzMiAzMiAwIDAgMSA0NC43NTczMzQgNi45MTJMMzIxLjQ1MDY2NyAyNDguMzJhMzIgMzIgMCAxIDEtNTEuNjI2NjY3IDM3Ljg0NTMzM0wxOTMuMTUyIDE4MS40NjEzMzNhMzIgMzIgMCAwIDEgNi44NjkzMzMtNDQuNzU3MzMzek0xMDMuMjUzMzMzIDMxNS4wMDhhMzIgMzIgMCAwIDEgNDAuNDQ4LTIwLjM1Mmw4NS45MzA2NjcgMjguMjg4YTMyIDMyIDAgMSAxLTIwLjAxMDY2NyA2MC44TDEyMy42NDggMzU1LjQxMzMzM2EzMiAzMiAwIDAgMS0yMC4zNTItNDAuNDA1MzMzek00MjguNjcyIDM2Mi4zNjhsMzEuNDAyNjY3IDU0LjRhODcuMzgxMzMzIDg3LjM4MTMzMyAwIDAgMSA5NC4xNjUzMzMtMTkuMDcyIDg3Ljg5MzMzMyA4Ny44OTMzMzMgMCAwIDEgMjkuNTY4LTI3LjkwNGMzNS4zMjgtMjAuMzk0NjY3IDgwLjM0MTMzMy0xMy45MDkzMzMgMTA2Ljg4IDE2IDUuNTQ2NjY3LTUuNjc0NjY3IDExLjk0NjY2Ny0xMC42NjY2NjcgMTkuMDI5MzMzLTE0LjgwNTMzMyA0MC4xMDY2NjctMjMuMTY4IDkyLjg0MjY2Ny0xMS42MDUzMzMgMTE2LjY5MzMzNCAyOS42NTMzMzNsODEuNzQ5MzMzIDE0MS41NjhhMTU5LjE0NjY2NyAxNTkuMTQ2NjY3IDAgMCAxIDIwLjQzNzMzMyA5NS4wMTg2NjdsLTIuNjg4IDI3LjgxODY2NmMtOC4xMDY2NjcgODMuOTY4LTU3LjY4NTMzMyAxNTkuNDQ1MzMzLTEzMS45NjggMjAyLjMyNTMzNGwtMTIuOTI4IDcuNDY2NjY2Yy04NC4wOTYgNDguNTU0NjY3LTE4Ni40NTMzMzMgNTMuNDYxMzMzLTI3Mi40NjkzMzMgMTIuMTZsLTU4LjQ5Ni0yOC4xMTczMzNjLTU2LjgzMi0yNy4zMDY2NjctODIuMDkwNjY3LTkyLjY3Mi01OS42MDUzMzMtMTUxLjQ2NjY2N2wxNS4yNzQ2NjYtMzkuOTM2LTEyNi4zNzg2NjYtMjE4Ljg4Yy0yMy44MDgtNDEuMzAxMzMzLTcuNDY2NjY3LTkyLjcxNDY2NyAzMi42ODI2NjYtMTE1Ljg4MjY2NiA0MC4xMDY2NjctMjMuMTY4IDkyLjg0MjY2Ny0xMS42MDUzMzMgMTE2LjY1MDY2NyAyOS42NTMzMzN6IG0tOTMuODY2NjY3IDU0LjE4NjY2N2wxMjkuNjY0IDIyNC42NGM3LjY4IDEzLjMxMiA4LjY2MTMzMyAyOS4xODQgMy4zMjggNDMuMTM2bC0xNy41Nzg2NjYgNDUuOTA5MzMzYy0xMC44MzczMzMgMjguMjg4IDEuMjggNTguMzY4IDI3LjUyIDcwLjk1NDY2N2w1OC41Mzg2NjYgMjguMTZjNjYuMjYxMzMzIDMxLjc4NjY2NyAxNDYuMzQ2NjY3IDI4LjQxNiAyMTIuNzM2LTkuOTQxMzM0bDEyLjkyOC03LjQ2NjY2NmM1Ni45Ni0zMi44NTMzMzMgOTQuMjA4LTkwLjMyNTMzMyAxMDAuMjY2NjY3LTE1My4wMDI2NjdsMi42ODgtMjcuODYxMzMzYTk1LjE0NjY2NyA5NS4xNDY2NjcgMCAwIDAtMTIuMjAyNjY3LTU2Ljg3NDY2N0w3NzAuOTg2NjY3IDQzMi42NGMtNC45MDY2NjctOC40NDgtMTcuNTM2LTEyLjk3MDY2Ny0yOS4yNjkzMzQtNi4xODY2NjctMTEuNzMzMzMzIDYuNzg0LTE0LjEyMjY2NyAxOS45MjUzMzMtOS4yMTYgMjguNDE2YTMyIDMyIDAgMCAxLTU1LjQ2NjY2NiAzMmwtMzItNTUuNDI0Yy00Ljg2NC04LjQ5MDY2Ny0xNy40OTMzMzMtMTIuOTcwNjY3LTI5LjIyNjY2Ny02LjE4NjY2Ni0xMS43MzMzMzMgNi43NDEzMzMtMTQuMTIyNjY3IDE5LjkyNTMzMy05LjIxNiAyOC40MTZhMzIgMzIgMCAwIDEtNTUuNDY2NjY3IDMybC0xMS45NDY2NjYtMjAuNzc4NjY3Yy00LjkwNjY2Ny04LjUzMzMzMy0xNy41MzYtMTIuOTcwNjY3LTI5LjI2OTMzNC02LjIyOTMzMy0xMS43MzMzMzMgNi43ODQtMTQuMTIyNjY3IDE5LjkyNTMzMy05LjIxNiAyOC40MTZhMzIgMzIgMCAxIDEtNTUuNDY2NjY2IDMyTDM3My4yNDggMzk0LjM2OGMtNC45MDY2NjctOC41MzMzMzMtMTcuNDkzMzMzLTEzLjAxMzMzMy0yOS4yMjY2NjctNi4yMjkzMzMtMTEuNzMzMzMzIDYuNzg0LTE0LjE2NTMzMyAxOS45MjUzMzMtOS4yNTg2NjYgMjguNDE2eiIgZmlsbD0iI2JmYmZiZiIgcC1pZD0iMTgwOCI+PC9wYXRoPjwvc3ZnPg==';

/**
 * PopoverTrigger
 * @param className
 * @param style
 * @param renderTrigger
 * @param renderPopover
 * @constructor
 */
const PopoverTrigger: FC<PopoverTriggerProps> = ({
  className,
  style,
  renderTrigger,
  renderPopover,
}) => {
  function onTrigger() {
    renderPopover?.();
  }

  return (
    <div
      className={classNames(selectorPrefix, className ?? '')}
      style={style ?? {}}
      onClick={debounce(onTrigger, 200)}
    >
      {renderTrigger?.() ?? <img src={DEFAULT_TRIGGER_ICON} alt="" />}
    </div>
  );
};

export default PopoverTrigger;
