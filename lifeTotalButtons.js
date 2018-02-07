angular.module("presentational").component("lifeTotalButtons", {
  bindings: {
    lifeTotal: "<",
    onIncrement: "&",
    onDecrement: "&"
  },
  templateUrl: "lifeTotalButtons.html"
});
