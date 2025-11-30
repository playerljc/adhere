import Fetch from '../../fetch';
/**
 * 使用Fetch的React Hook
 * @description 在React组件中创建Fetch实例
 * @param origin
 * @param targetOrigin - 目标域名
 * @returns 包含fetch实例和目标域名的对象
 */
export default function useFetch(origin: string, targetOrigin: string[]): {
    fetch: Fetch;
    targetOrigin: string[];
};
