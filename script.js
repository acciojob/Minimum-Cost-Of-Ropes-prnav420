function calculateMinCost(event) {
event.preventDefault();
  var ans = document.querySelector("input").value;
  var updated = ans.split(",");

  updated.sort(function (a, b) {
    return a - b;
  });

  var cost = 0;
  while (updated.length > 1) {
    var res = Number(updated[0]) + Number(updated[1]);
    updated.push(res);
    updated.shift();
    updated.shift();

    cost += res;

    updated.sort(function (a, b) {
      return a - b;
    });
  }

  document.getElementById("result").textContent = cost;
}
