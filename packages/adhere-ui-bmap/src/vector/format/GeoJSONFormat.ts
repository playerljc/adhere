import Util from '@baifendian/adhere-util';

import {
  IFeature,
  GeoJSONNode,
  GeoJSONType,
  IGeoJSONFeatureCollection,
  IGeometry,
  IPointGeometry,
  IMulitPointGeometry,
  ILineStringGeometry,
  IMulitLineStringGeometry,
  IPolygonGeometry,
  IMulitPolygonGeometry,
} from '../types';
import PointGeometry from '../geom/PointGeometry';
import MulitPointGeometry from '../geom/MulitPointGeometry';
import Geometry from '../geom/Geometry';
import LineStringGeometry from '../geom/LineStringGeometry';
import MulitLineStringGeometry from '../geom/MulitLineStringGeometry';
import PolygonGeometry from '../geom/PolygonGeometry';
import MulitPolygonGeometry from '../geom/MulitPolygonGeometry';

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
        const geom = new MulitPointGeometry(
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
        const geom = new MulitLineStringGeometry(
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
        const geom = new MulitPolygonGeometry(
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
        [GeoJSONType.MultiPoint, getMulitPointCoordinates],
        [GeoJSONType.LineString, getLineStringCoordinates],
        [GeoJSONType.MultiLineString, getMulitLineStringCoordinates],
        [GeoJSONType.Polygon, getPolygonCoordinates],
        [GeoJSONType.MultiPolygon, getMulitPolygonCoordinates],
      ]);

      const type = geometry.getType();
      // @ts-ignore
      return mapping.get(type)(geometry);
    }

    function getPointCoordinates(geometry: IPointGeometry): number[] {
      const coordinates = geometry.getCoordinates();
      return [coordinates.lng, coordinates.lat];
    }

    function getMulitPointCoordinates(geometry: IMulitPointGeometry): Array<number[]> {
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

    function getMulitLineStringCoordinates(
      geometry: IMulitLineStringGeometry,
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

    function getMulitPolygonCoordinates(geometry: IMulitPolygonGeometry): Array<Array<number[]>> {
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
            //  @ts-ignore
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
