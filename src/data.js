let num = 10;

function add() {
  num += 1;
}

function sub() {
  num -= 1;
}

function getCurrentValue() {
  return num;
}

export { add, sub, getCurrentValue };
