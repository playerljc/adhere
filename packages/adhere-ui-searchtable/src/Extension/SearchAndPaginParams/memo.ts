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

  findByPath(path) {
    return this.memo.find((t) => t.path === path);
  }

  findIndexByPath(path) {
    return this.memo.findIndex((t) => t.path === path);
  }

  deleteByIndex(index) {
    return this.memo.splice(index, 1);
  }
}

export default {
  create() {
    return new Memo();
  },
};
