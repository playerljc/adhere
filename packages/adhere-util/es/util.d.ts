declare const _default: {
    treeToArray(treeData: import("./types").IAntdTreeNode[], config: {
        parentIdAttr: string;
        rootParentId: string | number;
    }): any[];
    arrayToAntdTree(arr: any[], { keyAttr, titleAttr, rootParentId, parentIdAttr }: import("./types").IFlatTreeArrNode): import("./types").IAntdTreeNode[];
    arrayToAntdTreeSelect(arr: any[], { keyAttr, titleAttr, rootParentId, parentIdAttr }: import("./types").IFlatTreeArrNode): import("./types").IAntdTreeSelectNode[];
    getAncestor(data: any[], node: any, config: {
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string | number;
    }): any[];
    getDescendants(data: any[], node: any, config: {
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string | number;
    }): any[];
    filterTree(data: any[], kw: string, config: {
        filterAttr: string;
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string | number;
        titleAttr: string;
    }): import("./types").IAntdTreeNode[];
    findNodeByKey(treeData: import("./types").IAntdTreeNode[], val: any, config: {
        keyAttr: string;
    }): import("./types").IAntdTreeNode | null;
    transformTreeData(treeData: any[], onCallback: (node: any) => import("./types").IAntdTreeNode): import("./types").IAntdTreeNode[];
    getLang(): string;
    setLang(lang?: string): void;
    getDatePickerFormat(): string;
    casUrl({ baseUrl, enterUrl }: {
        baseUrl: any;
        enterUrl: any;
    }): string;
    casLogoutUrl({ baseUrl, enterUrl, params }: {
        baseUrl: any;
        enterUrl: any;
        params?: string | undefined;
    }): string;
    isTouch(): boolean;
    drawStart(ctx: CanvasRenderingContext2D, config: {
        startCount: number;
        center: import("./types").IPoint;
        outRadius: number;
        innerRadius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    drawSector(ctx: CanvasRenderingContext2D, config: {
        center: import("./types").IPoint;
        radius: number;
        angle1: number;
        angle2: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    drawLeaf(ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: import("./types").IPoint;
        size: number;
        length: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    drawRegularPolygon(ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: import("./types").IPoint;
        size: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    drawRadiusRect(ctx: CanvasRenderingContext2D, config: {
        leftTop: import("./types").IPoint;
        width: number;
        height: number;
        radius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    toPoint(percent: string): number;
    /**
     * 函数节流
     */
    toPercent(point: number): string;
    straightLineIntersection(p1: import("./types").IPoint, p2: import("./types").IPoint, p3: import("./types").IPoint, p4: import("./types").IPoint): import("./types").IPoint;
    getA3Point({ p1, p2, distance }: {
        p1: import("./types").IPoint;
        p2: import("./types").IPoint;
        distance: number;
    }): import("./types").IPoint;
    getDistanceByBetweenPoint({ p1, p2 }: {
        p1: import("./types").IPoint;
        p2: import("./types").IPoint;
    }): number;
    clientToCtxPoint({ event, rect }: {
        event: MouseEvent;
        rect: DOMRect;
    }): import("./types").IPoint;
    isPointInCircle(point: import("./types").IPoint, circle: import("./types").ICircle): boolean;
    isPointInRect(point: import("./types").IPoint, rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): boolean;
    getCanvasTextInGemX(ctx: CanvasRenderingContext2D, text: string, rect: {
        leftTop: import("./types").IPoint;
        rightBottom: import("./types").IPoint;
    }): number;
    midpoint(fromPoint: import("./types").IPoint, toPoint: import("./types").IPoint): import("./types").IPoint;
    slope(fromPoint: import("./types").IPoint, toPoint: import("./types").IPoint, axis?: "cartesian" | "geographic"): number | undefined;
    slopToRadian(fromPoint: import("./types").IPoint, toPoint: import("./types").IPoint, axis?: "cartesian" | "geographic"): number;
    slopToAngle(fromPoint: import("./types").IPoint, toPoint: import("./types").IPoint, axis?: "cartesian" | "geographic"): number;
    radianToAngle(radian: number): number;
    angleToRadian(angle: any): number;
    distance(value: number, unit: "kilometer"): number;
    getCirclePoint(center: import("./types").IPoint, raduis: number, angle: number): import("./types").IPoint;
    getOvalPoint(center: import("./types").IPoint, raduisX: number, radiusY: number, angle: number): import("./types").IPoint;
    isTextNode(el: Node): boolean;
    isCommentNode(el: Node): boolean;
    isElementNode(el: Node): boolean;
    createElement(htmlStr: string): HTMLElement;
    getTopDom(target: any, selector: string): HTMLElement | null;
    on(el: any, tag: string, type: string, handler: Function, capture?: boolean): void;
    off(el: Element, tag: string, type: string, handler: Function): void;
    addClass(el: any, classes?: string): void;
    removeClass(el: any, classes?: string): void;
    hasClass(el: any, className: string): boolean;
    insertAfter(newElement: any, targetElement: any): void;
    prepend(el: any, children: any): void;
    remove(el: any): void;
    getParentElementByTag(el: any, tag: string): HTMLElement | null;
    children(el: any, selector: string): any[];
    objectToDataSet(obj: object, dom: HTMLElement): void;
    dataSetToObject(dom: HTMLElement): object;
    getPageLeft(el: HTMLElement): number;
    getPageTop(el: HTMLElement): number;
    getPageRect(el: HTMLElement): {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    getLeftUntil({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }): number;
    getTopUntil({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }): number;
    getRectUntil({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }): {
        top: number;
        left: number;
        right: number;
        bottom: number;
    };
    isIframeEmbed(): boolean;
    addClickListener: (el: HTMLElement, handler: (e: any) => {}, capture?: boolean | undefined) => Function;
    rgb(): string;
    color16(): string;
    isEmpty(value: any): boolean;
    isNumber(val: any): boolean;
    isBoolean(val: any): boolean;
    isString(val: any): boolean;
    isSymbol(val: any): boolean;
    isPrimitive(val: any): boolean;
    isArray(obj: any): boolean;
    isFunction(obj: any): boolean;
    isObject(obj: any): boolean;
    isRef(obj: any): boolean;
    chainCallAssignment({ obj, chainStr, value }: {
        obj: any;
        chainStr: any;
        value: any;
    }): false | undefined;
    getObjectByChainStr({ obj, chainStr }: {
        obj: any;
        chainStr: any;
    }): any;
    toCamelCase(str: any, toUpperCase?: boolean): any;
    isKebabCase(name: any): boolean;
    isPascalCase(name: any): boolean;
    pascalCaseToKebabCase(name: any): any;
    execExpression(context: any, expressionStr: any, data: any): any;
    getCookie(name?: string): string;
    noop(): Function;
    generatorRandom(lowerValue: any, upperValue: any): number;
    uuid(): string;
    getPropertyVisitPathStr(target: any, key: any): string;
    convertBase64UrlToBlob(data: string): Blob | null;
    omitObject(obj: object): object;
};
export default _default;
