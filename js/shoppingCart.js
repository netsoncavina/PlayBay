function showLocalStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem([keys[i]]));
  }

  console.log(values);
}
