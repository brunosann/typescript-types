// utilize ANY apenas em último caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2]));
console.log(showMessage('Olá'));
