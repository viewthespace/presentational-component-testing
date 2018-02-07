describe("lifeTotalButtons", () => {
  let $element;

  beforeEach(module("spec.templates"));

  beforeEach(() => {
    angular.mock.module("presentational");
    inject(($compile, $rootScope) => {
      let $scope = $rootScope.$new();
      let html = angular.element("<life-total-buttons></life-total-buttons>");
      $element = $compile(html)($scope);

      $scope.$digest();
    });
  });

  it("has +", () => {
    expect($element.find(".increment-life").length).toBe(1);
  });
});
