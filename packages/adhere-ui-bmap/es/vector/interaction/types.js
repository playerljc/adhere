/**
 * Action的状态
 */
export var ActionStatus;
(function (ActionStatus) {
    // 未开始
    ActionStatus[ActionStatus["UnStart"] = 0] = "UnStart";
    // 进行中
    ActionStatus[ActionStatus["Running"] = 1] = "Running";
    // 结束
    ActionStatus[ActionStatus["End"] = 2] = "End";
    // 销毁
    ActionStatus[ActionStatus["Destroy"] = 3] = "Destroy";
})(ActionStatus || (ActionStatus = {}));
/**
 * Action的事件
 */
export var ActionEvents;
(function (ActionEvents) {
    ActionEvents["BeforeStart"] = "BeforeStart";
    ActionEvents["Start"] = "Start";
    ActionEvents["End"] = "End";
    ActionEvents["Destroy"] = "Destroy";
})(ActionEvents || (ActionEvents = {}));
/**
 * InteractionLayerActions - InteractionLayerActions的事件类型
 */
export var InteractionLayerActions;
(function (InteractionLayerActions) {
    InteractionLayerActions["CanvasMount"] = "CanvasMount";
    InteractionLayerActions["CanvasClickEmpty"] = "CanvasClickEmpty";
    InteractionLayerActions["CanvasClickGeometry"] = "CanvasClickGeometry";
})(InteractionLayerActions || (InteractionLayerActions = {}));
/**
 * SelectType
 */
export var SelectType;
(function (SelectType) {
    SelectType["Polygon"] = "Polygon";
    SelectType["Circle"] = "Circle";
    SelectType["Rectangle"] = "Rectangle";
    SelectType["Triangle"] = "Triangle";
    SelectType["Diamond"] = "Diamond";
    SelectType["Start"] = "Start";
    SelectType["Free"] = "Free";
    SelectType["Distance"] = "Distance";
})(SelectType || (SelectType = {}));
/**
 * ActionType
 */
export var ActionType;
(function (ActionType) {
    ActionType["Draw"] = "Draw";
    ActionType["Modify"] = "Modify";
    ActionType["Move"] = "Move";
})(ActionType || (ActionType = {}));
