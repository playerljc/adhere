interface IDict {
  initStatic: () => {};
  initRemote: () => {};
}

export interface InitFunc {
  (dictArr: IDict[], config: IConfig): void;
}

export interface IConfig {
  isFunMemo: boolean;
}
