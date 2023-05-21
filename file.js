let smartphone = new Map ([
  ["apple", "green"],

  ["samsung", "red"],

  ["honor",    "blue"],

  ["xiaomi", "white"]
]);

for (let [key, value] of smartphone) {

  console.log('Ключ - '+ key + ', значение - ' + value); // apple, strawberry, blueberry

}
