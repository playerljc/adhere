export class Memo {
  memo: {
    path: string;
    components: any;
  }[] = [];

  isEmpty() {
    return !this.memo.length;
  }

  add(path: string, components: any) {
    this.memo.push({
      path,
      components,
    });
  }

  findByPath(path: string) {
    return this.memo.find((t) => t.path === path);
  }

  findIndexByPath(path: string) {
    return this.memo.findIndex((t) => t.path === path);
  }

  deleteByPath(_path: string) {
    this.memo
      .filter(({ path }) => path.startsWith(_path))
      .forEach(({ path }) => {
        this.deleteByIndex(this.findIndexByPath(path));
      });
  }

  clearAll() {
    this.memo = [];
  }

  deleteByIndex(index: number) {
    return this.memo.splice(index, 1);
  }
}

export default {
  create() {
    return new Memo();
  },
};
