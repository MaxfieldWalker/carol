export function buffy<T>(array: T[], by: number): T[][] {
  const result: T[][] = [];

  let i = 0;
  let buf: T[] = [];
  while (i < array.length) {
    buf.push(array[i]);
    i++;

    if (buf.length === by) {
      // 一定数溜まった
      result.push(buf);
      buf = [];
    }
  }

  if (buf.length != 0) {
    // 残りを入れる
    result.push(buf);
  }

  return result;
}
