// Generated by CoffeeScript 1.3.3
(function() {
  var item, myArr, results;

  myArr = ["App", "Android", "iOs", "windows", "mac", "linux"];

  results = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = myArr.length; _i < _len; _i++) {
      item = myArr[_i];
      if (item.name === "App") {
        _results.push(item);
      }
    }
    return _results;
  })();

  alert(results);

}).call(this);
