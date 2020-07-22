function eggDrop(eggs = 2) {
  let floors = [0];
  let breakFloor = Math.floor(Math.random() * 99) + 1;
  // let breakFloor = 1;
  let n = 14;
  console.log(`Break Floor = ${breakFloor}`)

  while (eggs > 0 && n <= 100) {
    floors.push(n);
    if (breakFloor <= floors[floors.length - 1]) {
      eggs--;
      let i = floors[floors.length - 2] + 1;
      while (i < n) {
        floors.push(i);
        if (breakFloor === i) {
          eggs--;
          break;
        }
        i++;
      }
    } else {
      n += floors[floors.length - 1] - floors[floors.length - 2] - 1;
    }
  }
  floors.shift();
  return floors;
}

console.log(eggDrop());