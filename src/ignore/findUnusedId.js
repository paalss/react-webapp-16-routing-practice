const findUnusedId = (array) => {
  function next(prop) {
    return function (arr) {
      var used = arr.reduce(function (o, v) {
        o[v[prop]] = true;
        return o;
      }, {});
      for (var i = 1; used[i]; i++);
      return i;
    };
  }
  var nextId = next("id");

  return nextId(array);
};

export default findUnusedId