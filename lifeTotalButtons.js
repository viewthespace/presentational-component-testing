angular.module("presentational").component("lifeTotalButtons", {
  bindings: {
    lifeTotal: "<",
    onIncrement: "&",
    onDecrement: "&"
  },
  templateUrl: "lifeTotalButtons.html",
  controller() {
    const minLifeTotal = 0;
    const maxLifeTotal = 10;
    return {
      shouldShowLifeButtons() {
        return this.lifeTotal !== 0 && this.lifeTotal !== 10;
      }
    };
  }
});
