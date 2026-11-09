function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }

  if (typeof input === "number") {
    return input * 10;
  }

  return input ? "Active" : "InActive";
}

function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude},${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const merged: T[] = [];
  for (const array of arrays) {
    merged.push(...array);
  }

  return merged;
}
