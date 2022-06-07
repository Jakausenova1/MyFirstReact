let Shuffler = (function () {
  let joinReplaceCallback = function () {
    return Math.random() > 0.5 ? "e" : "f";
  };

  return {
    decode: function (array, key) {
      let tempArray = array.slice();

      array.splice(0, array.length);
      key = key.split(/[ef]/);

      for (let i = 0, value; i !== key.length; i++) {
        value = parseInt(key[i], 14);
        array[value] = tempArray[i];
      }
    },
    encode: function (array) {
      let indexes = [],
        key = [],
        tempArray = array.slice(),
        value;

      array.splice(0, array.length);

      while (array.length !== tempArray.length) {
        value = Math.floor(Math.random() * tempArray.length);

        if (indexes.indexOf(value) === -1) {
          array.push(tempArray[value]);
          indexes.push(value);
          key.push(value.toString(14));
        }
      }

      return key.join("$").replace(/\$/g, joinReplaceCallback);
    },
  };
})();
