function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

var a = [1, 1, 1, 1, 1];
var unique = a.filter(onlyUnique);

if (unique.length>1) {
    console.log(false)
}
else {
    console.log(true)
}