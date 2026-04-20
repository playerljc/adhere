declare module 'rc-slider-captcha' {
  import type { CSSProperties, MutableRefObject, ReactNode } from 'react';

  export type VerifyParam = {
    x: number;
    y: number;
    sliderOffsetX: number;
    duration: number;
    trail: [number, number][];
    targetType: 'puzzle' | 'button';
    errorCount: number;
  };

  export type ActionType = {
    refresh: (resetErrorCount?: boolean) => void;
    status: any;
  };

  export type SliderCaptchaProps = {
    request: () => Promise<{ bgUrl: string; puzzleUrl: string }>;
    onVerify: (data: VerifyParam) => Promise<any>;
    mode?: 'embed' | 'float' | 'slider';
    bgSize?: { width: number; height: number };
    puzzleSize?: { width?: number; height?: number; left?: number; top?: number };
    tipText?: Record<string, ReactNode>;
    tipIcon?: Record<string, ReactNode>;
    actionRef?: MutableRefObject<ActionType | null>;
    showRefreshIcon?: boolean;
    limitErrorCount?: number;
    jigsawContent?: ReactNode;
    loadingBoxProps?: { icon: ReactNode; text: ReactNode };
    autoRequest?: boolean;
    autoRefreshOnError?: boolean;
    errorHoldDuration?: number;
    showJigsawOnActive?: boolean;
    loadingDelay?: number;
    placement?: 'top' | 'bottom';
    precision?: number | false;
    className?: string;
    style?: CSSProperties;
    styles?: Record<string, CSSProperties>;
  };

  export default function SliderCaptcha(props: SliderCaptchaProps): JSX.Element;
}

