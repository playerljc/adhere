import React from 'react';
export interface PreviewModalProps {
    open: boolean;
    onClose: () => void;
}
/**
 * PreviewModal
 * @description 全视口预览：内置 desktop/mobile Segmented 切换 + 手机模式下视口尺寸 Select；
 *  底部按钮：获取数据 / 重置 / 禁用编辑（切只读）/ 关闭。
 *  modal 内部的切换 / disabled 仅在弹层生命周期内生效，不回写 DesignContext。
 */
export default function PreviewModal({ open, onClose }: PreviewModalProps): React.JSX.Element;
