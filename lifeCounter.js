angular.module("presentational").component("lifeCounter", {
  templateUrl: "lifeCounter.html",
  controller() {
    return {
      lifeTotal: 0
    };
  }
});
