/**
 * GeometryType
 */
export var GeometryType;
(function (GeometryType) {
    GeometryType["Point"] = "Point";
    GeometryType["MultiPoint"] = "MultiPoint";
    GeometryType["Circle"] = "Circle";
    GeometryType["MultiCircle"] = "MultiCircle";
    GeometryType["LineString"] = "LineString";
    GeometryType["MultiLineString"] = "MultiLineString";
    GeometryType["Polygon"] = "Polygon";
    GeometryType["MultiPolygon"] = "MultiPolygon";
    GeometryType["Rect"] = "Rect";
    GeometryType["RadiusRect"] = "RadiusRect";
    GeometryType["MultiRadiusRect"] = "MultiRadiusRect";
    GeometryType["Leaf"] = "Leaf";
    GeometryType["MultiLeaf"] = "MultiLeaf";
    GeometryType["MultiRect"] = "MultiRect";
    GeometryType["Text"] = "Text";
    GeometryType["RegularPolygon"] = "RegularPolygon";
    GeometryType["MultiRegularPolygon"] = "MultiRegularPolygon";
    GeometryType["Start"] = "Start";
    GeometryType["MultiStart"] = "MultiStart";
    GeometryType["Sector"] = "Sector";
    GeometryType["MultiSector"] = "MultiSector";
})(GeometryType || (GeometryType = {}));
/**
 * VectorEventActions
 */
export var VectorEventActions;
(function (VectorEventActions) {
    VectorEventActions["FEATURE_CLICK"] = "feature:click";
    VectorEventActions["VECTOR_CLICK"] = "vector:click";
})(VectorEventActions || (VectorEventActions = {}));
/**
 * VectorActions
 */
export var VectorActions;
(function (VectorActions) {
    VectorActions["UPDATE"] = "UPDATE";
    VectorActions["APPEND"] = "APPEND";
})(VectorActions || (VectorActions = {}));
export var GeoJSONType;
(function (GeoJSONType) {
    GeoJSONType["Point"] = "Point";
    GeoJSONType["MultiPoint"] = "MultiPoint";
    GeoJSONType["LineString"] = "LineString";
    GeoJSONType["MultiLineString"] = "MultiLineString";
    GeoJSONType["Polygon"] = "Polygon";
    GeoJSONType["MultiPolygon"] = "MultiPolygon";
    GeoJSONType["GeometryCollection"] = "GeometryCollection";
    GeoJSONType["Feature"] = "Feature";
    GeoJSONType["FeatureCollection"] = "FeatureCollection";
})(GeoJSONType || (GeoJSONType = {}));
/**
 * TrajectoryStatus
 */
export var TrajectoryStatus;
(function (TrajectoryStatus) {
    // 未初始化
    TrajectoryStatus[TrajectoryStatus["UnInit"] = 0] = "UnInit";
    // 初始化完成
    TrajectoryStatus[TrajectoryStatus["Init"] = 1] = "Init";
    // 进行中
    TrajectoryStatus[TrajectoryStatus["Running"] = 2] = "Running";
    // 暂停
    TrajectoryStatus[TrajectoryStatus["Pause"] = 3] = "Pause";
    // 结束
    TrajectoryStatus[TrajectoryStatus["End"] = 4] = "End";
    // 销毁
    TrajectoryStatus[TrajectoryStatus["Destroy"] = 5] = "Destroy";
})(TrajectoryStatus || (TrajectoryStatus = {}));
