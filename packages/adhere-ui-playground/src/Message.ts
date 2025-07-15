const selectPrefix = 'adhere-ui-playground-message';

/**
 * 消息提示模块
 * @module Message
 * @description 提供简单的消息提示功能，包括成功提示等
 * @example
 * ```tsx
 * import Message from './Message';
 * 
 * Message.success('操作成功');
 * ```
 */
export default {
  /**
   * 显示成功消息提示
   * @function success
   * @description 显示一个成功类型的消息提示，4秒后自动消失
   * @param title - 消息标题内容
   * @example
   * ```tsx
   * Message.success('保存成功');
   * ```
   */
  success(title: string): void {
    const message = document.createElement('div');
    message.className = selectPrefix;

    message.innerHTML = `
      <div>
        <div class="${selectPrefix}-notice">
          <div class="${selectPrefix}-notice-content">
            <div class="${selectPrefix}-custom-content ${selectPrefix}-success">
              <span role="img" aria-label="check-circle" class="anticon anticon-check-circle">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
              </span>
              <span>${title}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(message);

    // 4秒后自动移除消息
    setTimeout(() => {
      const notice = message.querySelector(`.${selectPrefix}-notice`) as HTMLElement;
      notice.classList.add(`${selectPrefix}-move-up-leave`);
      setTimeout(() => (message as HTMLDivElement)?.parentElement?.removeChild(message), 300);
    }, 4000);
  },
};
