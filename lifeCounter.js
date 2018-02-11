angular.module("presentational").component("lifeCounter", {
  templateUrl: "lifeCounter.html",
  controller() {
    return {
      lifeTotal: 5,
      incrementLife() {
        this.lifeTotal += 1;
      },
      decrementLife() {
        this.lifeTotal -= 1;
      }
    };
  }
});
