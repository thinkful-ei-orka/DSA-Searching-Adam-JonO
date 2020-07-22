const tradingPrices = [128, 97, 121, 123, 98, 97, 105];

function maxValue(trading) {
  let evalArray = [];
  let temp = [];
  for (let i = 0; i < trading.length; i++) {
    if (trading[i] > trading[i + 1] || trading[i + 1] === undefined) {
      temp.push(trading[i]);
      evalArray.push(temp);
      temp = [];
    } else {
      temp.push(trading[i]);
    }
  }
  if (evalArray[0].length === 1) {
    evalArray[0] = [0, ...evalArray[0]];
  }

  console.log(evalArray.map(cycle => cycle.length > 1 ? cycle[cycle.length - 1] - cycle[0] : 0).reduce((a, b) => a + b));
}

maxValue(tradingPrices);