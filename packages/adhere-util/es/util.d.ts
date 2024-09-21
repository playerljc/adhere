declare const _default: {
    processAsyncQueue(tasks?: import("./types").ProcessAsyncQueueItem[] | undefined): Promise<void>;
    CRSTypes: typeof import("gcoord").CRSTypes;
    transform: <T extends import("gcoord").GeoJSON | import("gcoord").Position>(input: string | T, crsFrom: import("gcoord").CRSTypes, crsTo: import("gcoord").CRSTypes) => T;
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
    prettyBytes(number: any, options?: import("./types").PrettyBytesOptions | undefined): string;
    prettierJSON(_jsonStr?: string): string;
    compressJSON(_jsonStr?: string): string;
    prettierXML(_xmlStr?: string): any;
    compressXML(_xmlStr?: string): any;
    prettierHTML(_htmlStr?: string): any;
    compressHTML(_htmlStr?: string): any;
    prettierCSS(_cssStr?: string): any;
    compressCSS(_cssStr?: string): any;
    prettierSQL(_sqlStr?: string): any;
    compressSQL(_sqlStr?: string): any;
    jsonToXML(_jsonStr?: string): any;
    xmlToJSON(_xmlStr?: string, prettier?: boolean): string;
    base64Encode(str: string): any;
    base64Decode(_base64Str: string): string;
    chineseToUTF8(_chineseStr?: string): string;
    UTF8ToChinese(_utf8Str: string): string;
    chineseToASC2(_chineseStr?: string, hasNoTransformationLettersAndNumber?: boolean): string;
    ASC2ToChinese(_asc2Str?: string): string;
    hashEncryptToMD5(_value?: string): string;
    hashEncryptToSHA1(_value?: string): string;
    hashEncryptToSHA256(_value?: string): string;
    hashEncryptToSHA512(_value?: string): string;
    hashEncryptToSHA3_64(_value?: string): string;
    hashEncryptToSHA3_224(_value?: string): string;
    hashEncryptToSHA3_256(_value?: string): string;
    hashEncryptToSHA3_348(_value?: string): string;
    hashEncryptToSHA3_512(_value?: string): string;
    hashEncryptToRIPEMD160(_value?: string): string;
    symmetricEncryptToAES(_value?: string, _pwd?: string, options?: any): any;
    symmetricEncryptToDES(_value?: string, _pwd?: string, options?: any): any;
    symmetricEncryptToRC4(_value?: string, _pwd?: string, options?: any): any;
    symmetricEncryptToRabbit(_value?: string, _pwd?: string, options?: any): any;
    symmetricEncryptToTripleDes(_value?: string, _pwd?: string, options?: any): any;
    symmetricDecryptToAES(_value?: string, _pwd?: string, options?: any): any;
    symmetricDecryptToDES(_value?: string, _pwd?: string, options?: any): any;
    symmetricDecryptToRC4(_value?: string, _pwd?: string, options?: any): any;
    symmetricDecryptToRabbit(_value?: string, _pwd?: string, options?: any): any;
    symmetricDecryptToTripleDes(_value?: string, _pwd?: string, options?: any): any;
    dataUrlToBlob(dataUrl: string): Blob | null;
    toTimestampByFormatStrAndTimeZone(str: string, timezone: string): number;
    toStrByTimestampAndTimeZone(_timestamp: string, timezone: string): string;
    getCurrentTimestamp(): number;
    getTimezone(): number;
    formatMilliseconds(milliseconds: number): {
        days: number;
        hours: number;
        minutes: number;
        remainingSeconds: number;
    };
    parse(path?: string | undefined, config?: import("./types").IUrlConfig): object | null;
    stringify(record: object, config?: import("./types").IUrlConfig): string;
    getPathName(publicPath?: string, router?: "hash" | "browser"): string;
    getSearch(router?: "hash" | "browser"): string | undefined;
    getFullPath(): string;
    treeToArray: (treeData: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], config: {
        parentIdAttr: string;
        rootParentId: string | number;
    }, keyAttr?: string | undefined) => {
        [props: string]: any;
        children?: any[] | undefined;
        key: string;
    }[];
    arrayToAntdTree: (arr: {
        [props: string]: any;
        children?: any[] | undefined;
        isLeaf?: boolean | undefined;
        properties?: any;
    }[], config: import("./types").IFlatTreeArrNode) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode, "value">)[];
    arrayToAntdTreeSelect: (arr: any[], config: import("./types").IFlatTreeArrNode) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode, "value">)[];
    getAncestor: (data: any[], node: any, config: Omit<import("./types").IFlatTreeArrNode, "titleAttr">) => any[];
    getDescendants: (data: any[], node: any, config: Omit<import("./types").IFlatTreeArrNode, "titleAttr">) => any[];
    filterTreeByFlatData: (treeFlatNodes: any[], kw: string, config: import("./types").IFlatTreeArrNode & {
        filterAttr: string;
    }) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode, "value">)[];
    filterTree: (treeNodes: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], kw: string, config: import("./types").IFlatTreeArrNode & {
        filterAttr: string;
    }) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode, "value">)[];
    findNodeByKey: (treeData: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], val: any, config: {
        keyAttr: string;
    }) => import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode | null;
    findParentNodeByKey: (treeData: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], val: any, config: {
        keyAttr: string;
    }) => import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode | null | undefined;
    transformTreeData: (treeData: any[], childrenAttr: string, onCallback: (node: any) => import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode) => (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[];
    getLeafNodesByIndex: (nodes: {
        [props: string]: any;
    }[], childrenAttr?: string | undefined, indexAttr?: string | undefined) => {
        [props: string]: any;
    }[];
    getLeafNodes: (nodes: {
        [props: string]: any;
    }[], childrenAttr?: string | undefined) => {
        [props: string]: any;
    }[];
    getLeafNodeByFlatData: (arr: any[], config: import("./types").IFlatTreeArrNode) => {
        [props: string]: any;
    }[];
    getLeafNodeByFlatDataToIndex: (arr: any[], indexAttr?: string | undefined) => {
        [props: string]: any;
    }[];
    getTreeLevel: (nodes: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], keyAttr?: string | undefined) => number;
    getTreeLevelByIndex: (nodes: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], indexAttr: string, keyAttr: string) => number;
    getTreeLevelToFlat: (flatArr: any[], config: import("./types").IFlatTreeArrNode) => number;
    getTreeLevelByIndexToFlat: (flatArr: any[], config: import("./types").IFlatTreeArrNode, indexAttr: string) => number;
    getNodeLevel: (nodes: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], node: import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode, keyAttr: string) => number;
    completionIncompleteFlatArr: (treeFlatNodes: any[], incompleteTreeFlatNodes: any, config: import("./types").IFlatTreeArrNode) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode, "value">)[];
    excludeAntdTreeNodes: (nodes: import("./types").IAntdTreeNode[], excludeKeys: string[], keyAttr?: string | undefined) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeNode, "value">)[];
    excludeAntdSelectTreeNodes: (nodes: import("./types").IAntdTreeSelectNode[], excludeKeys: string[], keyAttr?: string | undefined) => (import("./types").IFlatTreeArrNode & Omit<import("./types").IAntdTreeSelectNode, "value">)[];
    getLang(defaultLocal?: string | undefined): string;
    setLang(lang?: string): void;
    getDatePickerFormat(): string;
    casUrl({ baseUrl, enterUrl, defaultLocal }: {
        baseUrl: any;
        enterUrl: any;
        defaultLocal: any;
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
    angleToRadian(angle: any): number;
    distance(value: number, unit: "kilometer"): number;
    getCirclePoint(center: import("./types").IPoint, raduis: number, angle: number): import("./types").IPoint;
    getOvalPoint(center: import("./types").IPoint, radiusX: number, radiusY: number, angle: number): import("./types").IPoint;
    pxToRemNumber(px: number, base: number): number;
    pxToRem(px: number, base: number, media?: {
        isUseMedia?: boolean | undefined;
        designWidth?: number | undefined;
    } | undefined): string;
    isTextNode(el: Node): boolean;
    isCommentNode(el: Node): boolean;
    isElementNode(el: Node): boolean;
    createElement(htmlStr: string): HTMLElement;
    getTopDom(source: HTMLElement, selector: string | string[]): HTMLElement | null;
    on(el: any, tag: string, type: string, handler: Function, capture?: boolean): void;
    off(el: HTMLElement, tag: string, type: string, handler: Function): void;
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
    isIframeEmbed(): boolean | null;
    addClickListener: (el: HTMLElement, handler: (e: any) => {}, capture?: boolean | undefined) => Function;
    clickInRange(params: {
        el: HTMLElement;
        rootEl: HTMLElement;
        bodyClickHandler?: Function | undefined;
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
    rgbRandom(): string;
    color16Random(): string;
    colorToRgb(color: string): number[];
    rgbToColor(r: string | number, g: string | number, b: string | number): string;
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
    isPromise(obj: any): any;
    chainCallAssignment({ obj, chainStr, value }: {
        obj: any;
        chainStr: any;
        value: any;
    }): false | undefined;
    getObjectByChainStr({ obj, chainStr }: {
        obj: any;
        chainStr: any;
    }): any;
    toCamelCase(str: any, split?: string, toUpperCase?: boolean): any;
    isKebabCase(name: any): boolean;
    isPascalCase(name: any): boolean;
    pascalCaseToKebabCase(_str: any, symbol?: string): any;
    pascalCaseToKebabCase2(name: any, symbol?: string): any;
    execExpression(context: any, expressionStr: any, data: any): any;
    getCookie(name?: string): string;
    noop(): Function;
    generatorRandom(lowerValue: any, upperValue: any): number;
    uuid(): string;
    getPropertyVisitPathStr(target: any, key: any): string;
    convertBase64UrlToBlob(data: string): Blob | null;
    omitObject(obj: object): object;
    capitalized(str: string): string;
    lowercaseInitial(str: string): string;
};
export default _default;
