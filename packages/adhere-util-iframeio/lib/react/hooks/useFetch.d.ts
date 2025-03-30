import Fetch from '../../fetch';
/**
 * useFetch
 * @param {string} targetOrigin
 */
export default function useFetch(targetOrigin: string): {
    fetch: Fetch;
    targetOrigin: string;
};
