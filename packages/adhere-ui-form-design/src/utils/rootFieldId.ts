import Util from '@baifendian/adhere-util';

let rootFieldId = '';

export function genRootFieldId() {
  rootFieldId = Util.uuid();
  return rootFieldId;
}

export function getRootFieldId() {
  return rootFieldId;
}

export function isRootFieldId(id: string) {
  return id === rootFieldId;
}
