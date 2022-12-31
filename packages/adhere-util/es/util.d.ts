declare const _default: {
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
    base46Encode(str: string): any;
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
    symmetricEncryptToAES(_value?: string, _pwd?: string): any;
    symmetricEncryptToDES(_value?: string, _pwd?: string): any;
    symmetricEncryptToRC4(_value?: string, _pwd?: string): any;
    symmetricEncryptToRabbit(_value?: string, _pwd?: string): any;
    symmetricEncryptToTripleDes(_value?: string, _pwd?: string): any;
    symmetricDecryptToAES(_value?: string, _pwd?: string): any;
    symmetricDecryptToDES(_value?: string, _pwd?: string): any;
    symmetricDecryptToRC4(_value?: string, _pwd?: string): any;
    symmetricDecryptToRabbit(_value?: string, _pwd?: string): any;
    symmetricDecryptToTripleDes(_value?: string, _pwd?: string): any;
    toTimestampByFormatStrAndTimeZone(str: string, timezone: string): number;
    toStrByTimestampAndTimeZone(_timestamp: string, timezone: string): string;
    getCurrentTimestamp(): number;
    getTimezone(): number;
    treeToArray: (treeData: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], config: {
        parentIdAttr: string;
        rootParentId: string | number;
    }) => {
        [props: string]: any;
        children?: any[] | undefined;
        key?: string | number | undefined;
    }[];
    arrayToAntdTree: (arr: {
        [props: string]: any;
        children?: any[] | undefined;
        isLeaf?: boolean | undefined;
        properties?: any;
    }[], config: import("./types").IFlatTreeArrNode) => (import("./types").IFlatTreeArrNode & Pick<import("./types").IAntdTreeNode, "title" | "key" | "isLeaf" | "children" | "properties">)[];
    arrayToAntdTreeSelect: (arr: any[], config: import("./types").IFlatTreeArrNode) => (import("./types").IFlatTreeArrNode & Pick<import("./types").IAntdTreeNode, "title" | "key" | "isLeaf" | "children" | "properties">)[];
    getAncestor: (data: any[], node: any, config: Pick<import("./types").IFlatTreeArrNode, "keyAttr" | "parentIdAttr" | "rootParentId">) => any[];
    getDescendants: (data: any[], node: any, config: Pick<import("./types").IFlatTreeArrNode, "keyAttr" | "parentIdAttr" | "rootParentId">) => any[];
    filterTreeByFlatData: (treeFlatNodes: any[], kw: string, config: import("./types").IFlatTreeArrNode & {
        filterAttr: string;
    }) => (import("./types").IFlatTreeArrNode & Pick<import("./types").IAntdTreeNode, "title" | "key" | "isLeaf" | "children" | "properties">)[];
    filterTree: (treeNodes: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], kw: string, config: import("./types").IFlatTreeArrNode & {
        filterAttr: string;
    }) => (import("./types").IFlatTreeArrNode & Pick<import("./types").IAntdTreeNode, "title" | "key" | "isLeaf" | "children" | "properties">)[];
    findNodeByKey: (treeData: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], val: any, config: {
        keyAttr: string;
    }) => import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode | null;
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
    getTreeLevel: (nodes: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[]) => number;
    getTreeLevelByIndex: (nodes: (import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode)[], indexAttr?: string | undefined) => number;
    getTreeLevelToFlat: (flatArr: any[], config: import("./types").IFlatTreeArrNode) => number;
    getTreeLevelByIndexToFlat: (flatArr: any[], config: import("./types").IFlatTreeArrNode, indexAttr: string) => number;
    completionIncompleteFlatArr: (treeFlatNodes: any[], incompleteTreeFlatNodes: any, config: import("./types").IFlatTreeArrNode) => (import("./types").IFlatTreeArrNode & Pick<import("./types").IAntdTreeNode | import("./types").IAntdTreeSelectNode, "key" | "isLeaf" | "children" | "properties">)[];
    excludeAntdTreeNodes: (nodes: import("./types").IAntdTreeNode[], excludeKeys: string[]) => (import("./types").IFlatTreeArrNode & Pick<import("./types").IAntdTreeNode, "title" | "key" | "isLeaf" | "children" | "properties">)[];
    excludeAntdSelectTreeNodes: (nodes: import("./types").IAntdTreeSelectNode[], excludeKeys: string[]) => (import("./types").IFlatTreeArrNode & Pick<import("./types").IAntdTreeSelectNode, "label" | "key" | "isLeaf" | "children" | "properties">)[];
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
    isIframeEmbed(): boolean;
    addClickListener: (el: HTMLElement, handler: (e: any) => {}, capture?: boolean | undefined) => Function;
    clickInRange(params: {
        el: HTMLElement;
        rootEl: HTMLElement;
        bodyClickHandler?: Function | undefined;
    }): Function;
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
