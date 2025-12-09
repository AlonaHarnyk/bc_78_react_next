function foo<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(foo<number>([1, 2, 3]));
console.log(foo<string>(["qwe", "rty", "abc"]));

function foo1<T>(array: T[]): T {
  const lastIdx = array.length - 1;
  return array[lastIdx];
}
console.log(foo1<number>([1, 2, 3]));
console.log(foo1<string | number>([22, "qwe"]));
