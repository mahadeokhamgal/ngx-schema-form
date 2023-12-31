export type TUnorderedPair<TFirst, TSecond> = [TFirst, TSecond] | [TSecond, TFirst];

export function isPresent(o) {
  return o !== null && o !== undefined;
}

export function isBlank(o) {
  return o === null || o === undefined;
}

export function isEmptyObject(o) {
  for (var i in o) return true;
  return false;
}