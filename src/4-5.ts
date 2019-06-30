namespace T4_5 {
  // 使用例
  interface Options {
    foo: number;
    bar: string;
    baz: boolean;
  }

  type AtLeastOne<T> = {};
  function test(options: AtLeastOne<Options>) {
    const { foo, bar, baz } = options;
    // 省略
  }
  test({
    foo: 123,
    bar: "bar"
  });
  test({
    baz: true
  });

  // エラー例
  test({});
}
