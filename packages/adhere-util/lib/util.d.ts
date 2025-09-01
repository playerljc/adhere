declare const _default: {
    processAsyncQueue(tasks?: import("./types").ProcessAsyncQueueItem[]): Promise<void>;
    CRSTypes: typeof import("gcoord").CRSTypes;
    transform: <T extends import("gcoord").GeoJSON | import("gcoord").Position>(input: T | string, crsFrom: import("gcoord").CRSTypes, crsTo: import("gcoord").CRSTypes) => T;
    WGS84: import("gcoord").CRSTypes.WGS84;
    WGS1984: import("gcoord").CRSTypes.WGS84;
    EPSG4326: import("gcoord").CRSTypes.WGS84;
    GCJ02: import("gcoord").CRSTypes.GCJ02;
    AMap: import("gcoord").CRSTypes.GCJ02;
    BD09: import("gcoord").CRSTypes.BD09;
    BD09LL: import("gcoord").CRSTypes.BD09;
    Baidu: import("gcoord").CRSTypes.BD09;
    BMap: import("gcoord").CRSTypes.BD09;
    BD09MC: import("gcoord").CRSTypes.BD09MC;
    BD09Meter: import("gcoord").CRSTypes.BD09MC;
    EPSG3857: import("gcoord").CRSTypes.EPSG3857;
    EPSG900913: import("gcoord").CRSTypes.EPSG3857;
    EPSG102100: import("gcoord").CRSTypes.EPSG3857;
    WebMercator: import("gcoord").CRSTypes.EPSG3857;
    WM: import("gcoord").CRSTypes.EPSG3857;
    prettyBytes(number: number, options?: import("./types").PrettyBytesOptions): string;
    prettierJSON(jsonStr?: string): string;
    compressJSON(jsonStr?: string): string;
    prettierXML(xmlStr?: string): string;
    compressXML(xmlStr?: string): string;
    prettierHTML(htmlStr?: string): string;
    compressHTML(htmlStr?: string): string;
    prettierCSS(cssStr?: string): string;
    compressCSS(cssStr?: string): string;
    prettierSQL(sqlStr?: string): string;
    compressSQL(sqlStr?: string): string;
    jsonToXML(jsonStr?: string): string;
    xmlToJSON(xmlStr?: string, prettier?: boolean): string;
    base64Encode(str: string): string;
    base64Decode(base64Str: string): string;
    chineseToUTF8(chineseStr?: string): string;
    UTF8ToChinese(utf8Str: string): string;
    chineseToASC2(chineseStr?: string, hasNoTransformationLettersAndNumber?: boolean): string;
    ASC2ToChinese(asc2Str?: string): string;
    hashEncryptToMD5(value?: string): string;
    hashEncryptToSHA1(value?: string): string;
    hashEncryptToSHA256(value?: string): string;
    hashEncryptToSHA512(value?: string): string;
    hashEncryptToSHA3_64(value?: string): string;
    hashEncryptToSHA3_224(value?: string): string;
    hashEncryptToSHA3_256(value?: string): string;
    hashEncryptToSHA3_348(value?: string): string;
    hashEncryptToSHA3_512(value?: string): string;
    hashEncryptToRIPEMD160(value?: string): string;
    symmetricEncryptToAES(value?: string, pwd?: string, options?: any): string;
    symmetricEncryptToDES(value?: string, pwd?: string, options?: any): string;
    symmetricEncryptToRC4(value?: string, pwd?: string, options?: any): string;
    symmetricEncryptToRabbit(value?: string, pwd?: string, options?: any): string;
    symmetricEncryptToTripleDes(value?: string, pwd?: string, options?: any): string;
    symmetricDecryptToAES(value?: string, pwd?: string, options?: any): string;
    symmetricDecryptToDES(value?: string, pwd?: string, options?: any): string;
    symmetricDecryptToRC4(value?: string, pwd?: string, options?: any): string;
    symmetricDecryptToRabbit(value?: string, pwd?: string, options?: any): string;
    symmetricDecryptToTripleDes(value?: string, pwd?: string, options?: any): string;
    dataUrlToBlob(dataUrl: string): Blob | null;
    toTimestampByFormatStrAndTimeZone(str: string, timezone: string): number;
    toStrByTimestampAndTimeZone(timestamp: string, timezone: string): string;
    getCurrentTimestamp(): number;
    getTimezone(): number;
    formatMilliseconds(milliseconds: number): {
        days: number;
        hours: number;
        minutes: number;
        remainingSeconds: number;
    };
    parse(path?: string, config?: import("./types").IUrlConfig): Record<string, string> | null;
    stringify(record: Record<string, any>, config?: import("./types").IUrlConfig): string;
    getPathName(publicPath?: string, router?: "hash" | "browser"): string;
    getSearch(router?: "hash" | "browser"): string;
    getFullPath(): string;
    treeToArray: (treeData: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], config: {
        parentIdAttr: string;
        rootParentId: string | number;
    }, keyAttr?: string) => {
        [props: string]: any;
        children?: any[];
        key: string;
    }[];
    arrayToAntdTree: (arr: {
        [props: string]: any;
        children?: any[];
        isLeaf?: boolean;
        properties?: any;
    }[], config: import("./types").IFlatTreeArrNode) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode, "value">)[];
    arrayToAntdTreeSelect: (arr: any[], config: import("./types").IFlatTreeArrNode) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode, "value">)[];
    getAncestor: (data: any[], node: any, config: Omit<import("./types").IFlatTreeArrNode, "titleAttr">) => any[];
    getDescendants: (data: any[], node: any, config: Omit<import("./types").IFlatTreeArrNode, "titleAttr">) => any[];
    filterTreeByFlatData: (treeFlatNodes: any[], kw: string, config: import("./types").IFlatTreeArrNode & {
        filterAttr: string;
    }, filter?: (nodeData: any) => boolean) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode, "value">)[];
    filterTree: (treeNodes: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], kw: string, config: import("./types").IFlatTreeArrNode & {
        filterAttr: string;
    }, filter?: (nodeData: any) => boolean) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode, "value">)[];
    findNodeByKey: (treeData: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], val: any, config: {
        keyAttr: string;
        childrenKey?: string;
    }) => import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode | null;
    findParentNodeByKey: (treeData: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], val: any, config: {
        keyAttr: string;
        childrenKey?: string;
    }) => import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode | null | undefined;
    transformTreeData: (treeData: any[], childrenAttr: string, onCallback: (node: any) => import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode) => (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[];
    getLeafNodesByIndex: (nodes: {
        [props: string]: any;
    }[], childrenAttr?: string, indexAttr?: string) => {
        [props: string]: any;
    }[];
    getLeafNodes: (nodes: {
        [props: string]: any;
    }[], childrenAttr?: string) => {
        [props: string]: any;
    }[];
    getLeafNodeByFlatData: (arr: any[], config: import("./types").IFlatTreeArrNode) => {
        [props: string]: any;
    }[];
    getLeafNodeByFlatDataToIndex: (arr: any[], indexAttr?: string) => {
        [props: string]: any;
    }[];
    getTreeLevel: (nodes: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], keyAttr?: string) => number;
    getTreeLevelByIndex: (nodes: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], indexAttr: string, keyAttr: string) => number;
    getTreeLevelToFlat: (flatArr: any[], config: import("./types").IFlatTreeArrNode) => number;
    getTreeLevelByIndexToFlat: (flatArr: any[], config: import("./types").IFlatTreeArrNode, indexAttr: string) => number;
    getNodeLevel: (nodes: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], node: import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode, keyAttr: string) => number;
    completionIncompleteFlatArr: (treeFlatNodes: any[], incompleteTreeFlatNodes: any, config: import("./types").IFlatTreeArrNode) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode, "value">)[];
    excludeAntdTreeNodes: (nodes: import("./types").IAntdTreeNode[], excludeKeys: string[], keyAttr?: string) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode, "value">)[];
    excludeAntdSelectTreeNodes: (nodes: import("./types").IAntdTreeSelectNode[], excludeKeys: string[], keyAttr?: string) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeSelectNode, "value">)[];
    casUrl({ baseUrl, enterUrl, defaultLocal }: {
        baseUrl: string;
        enterUrl: string;
        defaultLocal?: string;
    }): string;
    casLogoutUrl({ baseUrl, enterUrl, params }: {
        baseUrl: string;
        enterUrl: string;
        params?: string;
    }): string;
    isTouch(): boolean;
    drawStart(ctx: CanvasRenderingContext2D, config: {
        startCount: number;
        center: import("./types").IPoint;
        outRadius: number;
        innerRadius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => void): void;
    drawSector(ctx: CanvasRenderingContext2D, config: {
        center: import("./types").IPoint;
        radius: number;
        angle1: number;
        angle2: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => void): void;
    drawLeaf(ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: import("./types").IPoint;
        size: number;
        length: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => void): void;
    drawRegularPolygon(ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: import("./types").IPoint;
        size: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => void): void;
    drawRadiusRect(ctx: CanvasRenderingContext2D, config: {
        leftTop: import("./types").IPoint;
        width: number;
        height: number;
        radius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => void): void;
    calculateNewElementsInfo({ elementsInfo, widthOrigin, heightOrigin, widthNew, heightNew, }: {
        elementsInfo: {
            x: number;
            y: number;
            width: number;
            height: number;
        }[];
        widthOrigin: number;
        heightOrigin: number;
        widthNew: number;
        heightNew: number;
    }): {
        newX: number;
        newY: number;
        newWidth: number;
        newHeight: number;
    }[];
    toPoint(percent: string): number;
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
        event: MouseEvent | TouchEvent;
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
    angleToRadian(angle: number): number;
    distance(value: number, unit: "kilometer"): number;
    getCirclePoint(center: import("./types").IPoint, radius: number, angle: number): import("./types").IPoint;
    getOvalPoint(center: import("./types").IPoint, radiusX: number, radiusY: number, angle: number): import("./types").IPoint;
    pxToRemNumber(px: number, base: number): number;
    pxToRem(px: number, base: number, media?: import("@baifendian/adhere-ui-configprovider/es/types").ConfigProviderProps["media"]): string;
    remToPx(rem: number): number;
    isTextNode(el: Node): boolean;
    isCommentNode(el: Node): boolean;
    isElementNode(el: Node): boolean;
    createElement(htmlStr: string): HTMLElement;
    getTopDom(source: HTMLElement, selector: string | string[]): HTMLElement | null;
    on(el: HTMLElement, tag: string, type: string, handler: EventListener, capture?: boolean): void;
    off(el: HTMLElement, tag: string, type: string, handler?: EventListener): void;
    addClass(el: HTMLElement, classes?: string): void;
    removeClass(el: HTMLElement, classes?: string): void;
    hasClass(el: HTMLElement, className: string): boolean;
    insertAfter(newElement: HTMLElement, targetElement: HTMLElement): void;
    prepend(el: HTMLElement, children: string | HTMLElement): void;
    remove(el: HTMLElement): void;
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
    isIframeEmbed(): boolean | null;
    addClickListener: (el: HTMLElement, handler: (e: any) => {}, capture?: boolean) => Function;
    clickInRange(params: {
        el: HTMLElement;
        rootEl: HTMLElement;
        bodyClickHandler?: Function;
    }): Function;
    includeHTML(attr: string | undefined, onLoadError: () => string): Promise<string>;
    setCursorToEnd(element: HTMLElement): void;
    setCursorPositionToNode(node: Node, offset: number): void;
    setCursorPosition(element: HTMLElement, offset: number): void;
    getCurrentElementWithCursor(): Node | null;
    getCurrentParentElementWithCursor(): Node | null;
    getCursorIndex(): number;
    getCursorRectByDocument(): DOMRect | null;
    getTransformValues(element: HTMLElement): {
        translateX: number;
        translateY: number;
        scaleX: number;
        scaleY: number;
        rotate: number;
    };
    getZoom(): number;
    getScrollbarWidth(): number;
    getMaximizedViewportSize(): {
        width: number;
        height: number;
    };
    getProportionalSize({ origin, designWidth, isUseDevicePixelRatio, }: {
        origin: number;
        designWidth: number;
        isUseDevicePixelRatio: boolean;
    }): number;
    rgbRandom(): string;
    color16Random(): string;
    colorToRgb(color: string): number[];
    rgbToColor(r: number | string, g: number | string, b: number | string): string;
    isEmpty(value: unknown): value is null | undefined | "";
    isNumber(val: unknown): val is number;
    isBoolean(val: unknown): val is boolean;
    isString(val: unknown): val is string;
    isSymbol(val: unknown): val is symbol;
    isPrimitive(val: unknown): val is boolean | number | string | symbol;
    isArray(obj: unknown): obj is unknown[];
    isFunction(obj: unknown): obj is Function;
    isObject(obj: unknown): obj is Record<string, unknown>;
    isRef(obj: unknown): obj is unknown[] | Record<string, unknown>;
    isPromise(obj: unknown): obj is Promise<unknown>;
    chainCallAssignment({ obj, chainStr, value }: {
        obj: Record<string, unknown>;
        chainStr: string;
        value: unknown;
    }): boolean;
    getObjectByChainStr({ obj, chainStr }: {
        obj: Record<string, unknown>;
        chainStr: string;
    }): unknown;
    toCamelCase(str: string, split?: string, toUpperCase?: boolean): string;
    isKebabCase(name: string): boolean;
    isPascalCase(name: string): boolean;
    pascalCaseToKebabCase(str: string, symbol?: string): string;
    pascalCaseToKebabCase2(name: string, symbol?: string): string;
    execExpression(context: Record<string, unknown>, expressionStr: string, data: unknown): unknown;
    getCookie(name?: string): string;
    noop(): () => void;
    generatorRandom(lowerValue: number, upperValue: number): number;
    uuid(): string;
    getPropertyVisitPathStr(target: Record<string, unknown>, key: string): string;
    convertBase64UrlToBlob(data: string): Blob | null;
    omitObject<T extends Record<string, unknown>>(obj: T): Partial<T>;
    capitalized(str: string): string;
    lowercaseInitial(str: string): string;
};
export default _default;
