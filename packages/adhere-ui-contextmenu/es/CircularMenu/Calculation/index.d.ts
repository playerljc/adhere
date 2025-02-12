declare function Calculation(config: any): void;
declare class Calculation {
    constructor(config: any);
    _config: any;
    config: any;
    radius: number;
    coverRadius: number;
    clickZoneRadius: number;
    listSize: {
        width: string;
        height: string;
    };
    clickZoneSize: {
        width: any;
        height: any;
        marginRight: number;
        marginBottom: number;
    };
    menuSize: {
        width: any;
        height: any;
        marginLeft: number;
        marginTop: number;
    };
    coverSize: {
        width: number;
        height: number;
        marginLeft: number;
        marginTop: number;
    };
    startDeg: any;
    centralDeg: number;
    rotateUnit: any;
    skewDeg: number;
    unskewDeg: number;
    textTop: string;
    rotateDeg: typeof rotateDeg;
    horizontalDeg: typeof horizontalDeg;
}
export default Calculation;
import rotateDeg from './rotateDeg';
import horizontalDeg from './horizontalDeg';
