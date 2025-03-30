import type { MiddleWare } from '../../types';
type Config = {
    whitelist: string[];
    controllers: {
        path: string;
        middleWare: MiddleWare;
    }[];
    startAfterCB?: () => void;
};
/**
 * useServer
 * @param {Config} config
 */
export default function useServer(config: Config): void;
export {};
