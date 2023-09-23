/**
 * Listener
 * @param e
 * @param _history
 * @constructor
 */
declare function Listener(e: any, _history: any): void;
declare namespace Listener {
    var getCode: () => (() => void) | undefined;
}
export default Listener;
