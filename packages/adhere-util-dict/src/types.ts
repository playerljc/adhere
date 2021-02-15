interface IDict {
  initStatic: () => {};
  initRemote: () => {};
}

export interface InitFunc {
  (dictArr: Array<IDict>): void;
}
