export function build(obj = {}, arr = [], bool = Boolean) {
  if (arr.length !== 0) {
    return console.log("do", arr);
  } else {
    return alert("Choose elements please !");
  }
}
