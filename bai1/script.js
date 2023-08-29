function sum(...agrs) {
  checkString = true;
  s = 0;
  for (let i in agrs) {
    if (typeof agrs[i] === "string") {
      checkString = false;
    }
    if (checkString) {
      s += agrs[i];
    }
  }
  if (checkString) {
    return s;
  } else {
    return "error";
  }
}
console.log(sum(1, 2, 3, 4, 5, "haha"));
