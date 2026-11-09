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
