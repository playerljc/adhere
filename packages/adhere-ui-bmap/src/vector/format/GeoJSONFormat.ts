import Util from '@baifendian/adhere-util';

import Geometry from '../geom/Geometry';
import LineStringGeometry from '../geom/LineStringGeometry';
import MultiLineStringGeometry from '../geom/MultiLineStringGeometry';
import MultiPointGeometry from '../geom/MultiPointGeometry';
import MultiPolygonGeometry from '../geom/MultiPolygonGeometry';
import PointGeometry from '../geom/PointGeometry';
import PolygonGeometry from '../geom/PolygonGeometry';
import {
  GeoJSONNode,
  GeoJSONType,
  IFeature,
  IGeoJSONFeatureCollection,
  IGeometry,
  ILineStringGeometry,
  IMultiLineStringGeometry,
  IMultiPointGeometry,
  IMultiPolygonGeometry,
  IPointGeometry,
  IPolygonGeometry,
} from '../types';

export default {
  /**
   * parse - GeoJSON转IFeature[]
   * @param geoJSON
   * @param onForeachGeom
   */
  parse(geoJSON: GeoJSONNode, onForeachGeom: (geom: Geometry) => IFeature): IFeature[] {
    /**
     * Recursion
     * @param node
     * @param handler
     * @param features
     * @constructor
     */
    function Recursion(
      node: GeoJSONNode,
      handler: (geom: Geometry) => IFeature,
      features: IFeature[],
    ) {
      let feature: IFeature | null = null;

      /**
       * Point
       * MultiPoint
       * LineString
       * MultiLineString
       * Polygon
       * MultiPolygon
       * GeometryCollection
       * Feature
       * FeatureCollection
       */
      if (node.type === GeoJSONType.Point) {
        const geom = new PointGeometry({
          lng: node.coordinates[0],
          lat: node.coordinates[1],
        });
        feature = handler(geom);
        feature.setId(Util.uuid());
        features.push(feature);
      } else if (node.type === GeoJSONType.MultiPoint) {
        const geom = new MultiPointGeometry(
          node.coordinates.map((coordinate) => ({
            lng: coordinate[0],
            lat: coordinate[1],
          })),
        );
        feature = handler(geom);
        feature.setId(Util.uuid());
        features.push(feature);
      } else if (node.type === GeoJSONType.LineString) {
        const geom = new LineStringGeometry({
          point1: {
            lng: node.coordinates[0][0],
            lat: node.coordinates[0][1],
          },
          point2: {
            lng: node.coordinates[1][0],
            lat: node.coordinates[1][1],
          },
        });
        feature = handler(geom);
        feature.setId(Util.uuid());
        features.push(feature);
      } else if (node.type === GeoJSONType.MultiLineString) {
        const geom = new MultiLineStringGeometry(
          node.coordinates.map((coordinate) => ({
            point1: {
              lng: coordinate[0][0],
              lat: coordinate[0][1],
            },
            point2: {
              lng: coordinate[1][0],
              lat: coordinate[1][1],
            },
          })),
        );
        feature = handler(geom);
        feature.setId(Util.uuid());
        features.push(feature);
      } else if (node.type === GeoJSONType.Polygon) {
        const geom = new PolygonGeometry(
          node.coordinates.map((coordinate) => ({
            lng: coordinate[0],
            lat: coordinate[1],
          })),
        );
        feature = handler(geom);
        feature.setId(Util.uuid());
        features.push(feature);
      } else if (node.type === GeoJSONType.MultiPolygon) {
        const geom = new MultiPolygonGeometry(
          node.coordinates.map((coordinate) =>
            coordinate.map((p) => ({
              lng: p[0],
              lat: p[1],
            })),
          ),
        );
        feature = handler(geom);
        feature.setId(Util.uuid());
        features.push(feature);
      } else if (node.type === GeoJSONType.GeometryCollection) {
        node.geometries.forEach((geom) => {
          Recursion(geom, onForeachGeom, features);
        });
      } else if (node.type === GeoJSONType.Feature) {
        Recursion(
          node.geometry,
          (g) => {
            const f = onForeachGeom(g);
            f.setId(node.id);
            f.setProperties(node.properties);
            return f;
          },
          features,
        );
      } else if (node.type === GeoJSONType.FeatureCollection) {
        node.features.forEach((feature) => {
          Recursion(feature, onForeachGeom, features);
        });
      }
    }

    const features: IFeature[] = [];

    Recursion(geoJSON, onForeachGeom, features);

    return features;
  },
  /**
   * stringify - features转GeoJSON
   * @param features
   * @return GeoJSONNode
   */
  stringify(features: IFeature[]): IGeoJSONFeatureCollection {
    function getCoordinatesByType(geometry: IGeometry): Array<any> {
      const mapping = new Map<string, Function>([
        [GeoJSONType.Point, getPointCoordinates],
        [GeoJSONType.MultiPoint, getMultiPointCoordinates],
        [GeoJSONType.LineString, getLineStringCoordinates],
        [GeoJSONType.MultiLineString, getMultiLineStringCoordinates],
        [GeoJSONType.Polygon, getPolygonCoordinates],
        [GeoJSONType.MultiPolygon, getMultiPolygonCoordinates],
      ]);

      const type = geometry.getType();
      // @ts-ignore
      return mapping.get(type)(geometry);
    }

    function getPointCoordinates(geometry: IPointGeometry): number[] {
      const coordinates = geometry.getCoordinates();
      return [coordinates.lng, coordinates.lat];
    }

    function getMultiPointCoordinates(geometry: IMultiPointGeometry): Array<number[]> {
      const coordinates = geometry.getCoordinates();
      return coordinates.map((coordinate) => [coordinate.lng, coordinate.lat]);
    }

    function getLineStringCoordinates(geometry: ILineStringGeometry): Array<number[]> {
      const coordinates = geometry.getCoordinates();
      return [
        [coordinates.point1.lng, coordinates.point1.lat],
        [coordinates.point2.lng, coordinates.point2.lat],
      ];
    }

    function getMultiLineStringCoordinates(
      geometry: IMultiLineStringGeometry,
    ): Array<Array<number[]>> {
      const coordinates = geometry.getCoordinates();
      return coordinates.map((coordinate) => [
        [coordinate.point1.lng, coordinate.point1.lat],
        [coordinate.point2.lng, coordinate.point2.lat],
      ]);
    }

    function getPolygonCoordinates(geometry: IPolygonGeometry): Array<number[]> {
      const coordinates = geometry.getCoordinates();
      return coordinates.map((coordinate) => [coordinate.lng, coordinate.lat]);
    }

    function getMultiPolygonCoordinates(geometry: IMultiPolygonGeometry): Array<Array<number[]>> {
      const coordinates = geometry.getCoordinates();
      return coordinates.map((coordinate) => coordinate.map((p) => [p.lng, p.lat]));
    }

    let geoJSON: IGeoJSONFeatureCollection = {
      type: GeoJSONType.FeatureCollection,
      features: [],
    };

    const filterType: string[] = [];

    for (const key in GeoJSONType) {
      filterType.push(key);
    }

    features.forEach((feature) => {
      const type = feature.getGeometry().getType();

      if (filterType.includes(type)) {
        geoJSON.features.push({
          type: GeoJSONType.Feature,
          geometry: {
            // @ts-ignore
            type,
            coordinates: getCoordinatesByType(feature.getGeometry()),
          },
          id: feature.getId(),
          properties: feature.getProperties(),
        });
      }
    });

    return geoJSON;
  },
};
