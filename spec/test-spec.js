describe("lifeTotalButtons", () => {
  let $compile;
  let $element;
  let $scope;

  let context = describe;

  function setup() {
    const html = angular.element(`
        <life-total-buttons
          life-total="lifeTotal">
        </life-total-buttons>
      `);
    $element = $compile(html)($scope);

    $scope.$digest();
  }

  beforeEach(module("spec.templates"));

  beforeEach(() => {
    angular.mock.module("presentational");
    inject((_$compile_, $rootScope) => {
      $scope = $rootScope.$new();
      $compile = _$compile_;
    });
  });

  describe("life decrement button", () => {
    context("when the life total is 0", () => {
      beforeEach(() => {
        $scope.lifeTotal = 0;
        setup();
      });

      it("is disabled", () => {
        expect($element.find(".decrement-life").attr("disabled")).toBe("disabled");
      });
    });

    context("when the life total is not 0", () => {
      beforeEach(() => {
        $scope.lifeTotal = 1;
        setup();
      });
      it("is not disabled", () => {
        expect($element.find(".decrement-life").attr("disabled")).toBeUndefined();
      });
    });
  });
});
