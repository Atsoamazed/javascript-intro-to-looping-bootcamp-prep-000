
function forLoop(lop) {

for (var i = 0; i < 25; i++){
  if (i===1) {
    lop.push("I am 1 strange loop.")
  }
  else {
    lop.push('I am ${i} strange loops.')
}
}
    return lop;
  }

  function whileLoop(i){
while (i > 0) {
  console.log(--i);
}
  return "done";
}
function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }


  do {
  array = array.pop
} while (array.length > 0 && maybeTrue());
   return array;
  }

