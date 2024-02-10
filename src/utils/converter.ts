import * as _ from 'lodash';
import { HEIGHT_SCALE } from '../constants';

const processVal = (val: any) =>
  !_.isObject(val) || val === null ? val : _.isArray(val) ? val.map(keysToCamel) : keysToCamel(val);

const processValSnake = (val: any) =>
  !_.isObject(val) || val === null ? val : _.isArray(val) ? val.map(keysToSnake) : keysToSnake(val);

export const arrayKeysToCamel = (arr: any) => {
  const camelArray: any = [];
  arr.map((item: any) => {
    camelArray.push(keysToCamel(item));
  });
  return camelArray;
};

export const arrayKeysToSnake = (arr: any) => {
  const snakeArray: any = [];
  arr.map((item: any) => {
    snakeArray.push(keysToSnake(item));
  });
  return snakeArray;
};

export const keysToCamel: any = (obj: any) => {
  if (Array.isArray(obj)) {
    return obj.map((v) => keysToCamel(v));
  } else if (obj != null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [_.camelCase(key)]: keysToCamel(obj[key]),
      }),
      {}
    );
  }
  return obj;
};
export const keysToSnake: any = (obj: any) => {
  if (Array.isArray(obj)) {
    return obj.map((v) => keysToSnake(v));
  } else if (obj != null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [_.snakeCase(key)]: keysToSnake(obj[key]),
      }),
      {}
    );
  }
  return obj;
};

export const wasFailed = (value: string) => {
  return `${value.toUpperCase()}_FAIL`;
};

export const getSnappointPercent = (percent: number) => {
  return `${Math.ceil(percent * HEIGHT_SCALE)}%`;
};
