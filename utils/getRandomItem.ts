export function getRandomItem<R>(arr: R[]): R {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  return arr[randomIndex];
}
