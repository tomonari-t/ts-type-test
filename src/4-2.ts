// 🙅‍♂️
namespace T4_2 {
  // function giveId<T extends object>(obj: T): T extends { id: infer E } ? { id: string, [] } : {
  //   const id = "本当はランダムがいいけどここではただの文字列";
  //   return {
  //     ...obj,
  //     id
  //   };
  // }

  function giveId<T>(obj: T): Pick<T, Exclude<keyof T, "id">> & { id: string } {
    const id = "本当はランダムがいいけどここではただの文字列";
    return {
      ...obj,
      id
    };
  }

  function giveId<T>(
    obj: T
  ): { [K in keyof T]: K extends "id" ? string : T[K] } & { id: string } {
    const id = "本当はランダムがいいけどここではただの文字列";
    return {
      ...obj,
      id
    };
  }

  // 使用例
  /*
   * obj1の型は { foo: number; id: string } 型
   */
  const obj1 = giveId({ foo: 123 });
  /*
   * obj2の型は { num : number; id: string } 型
   */
  const obj2 = giveId({
    num: 0,
    id: 100
  });
  // obj2のidはstring型なので別の文字列を代入できる
  obj2.id = "";
}
