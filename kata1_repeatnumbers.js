var repeatNumbers = function(data) {
    var repeated = [];
    for (var x = 0; x < data.length; x++) {
      var number = data[x][0];
      var quant = data[x][1];
      for (var i = quant; i > 0; i--) {
        repeated += number;
        if (i == 1 && x < data.length - 1) {
          repeated += ", ";
        }
      }
    }
    return repeated;
  };


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2],[2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6],[92, 2]]));
