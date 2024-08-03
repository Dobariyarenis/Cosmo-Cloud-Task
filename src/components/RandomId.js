const RandomId = () => {
  let str = "";
  for (let i = 1; i <= 18; i++) {
    let x = Math.floor(Math.random() * 100 + 25);
    if ((x >= 48 && x <= 57) || (x >= 65 && x <= 90) || (x >= 97 && x <= 122)) {
      str += String.fromCharCode(x);
    } else {
      i = i - 1;
    }
  }
  return str;
};

export default RandomId;
