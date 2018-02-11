describe("lifeTotalButtons", () => {
  let $compile;
  let $element;
  let $scope;

  let context = describe;

  function setup() {
    const html = angular.element(`
      <life-total-buttons
        life-total="lifeTotal"
        on-increment="onIncrement()"
        on-decrement="onDecrement()">
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

  context("when the life total is 0", () => {
    beforeEach(() => {
      $scope.lifeTotal = 0;
      setup();
    });

    it("displays the game over message", () => {
      expect($element.find("div:contains('You are dead')").length).toEqual(1);
    });
  });

  context ("when the life total is 10", () => {
    beforeEach(() => {
      $scope.lifeTotal = 10;
      setup();
    });

    it("displays the 'You Win' message", () => {
      expect($element.find("div:contains('You win')").length).toEqual(1);
    });
  });

  context("when the life total is between 1 and 9", () => {
    beforeEach(() => {
      $scope.lifeTotal = 1;
    });

    describe("onIncrement", () => {
      let onDecrementCalled = false;

      beforeEach(() => {
        $scope.onDecrement = () => {
          onDecrementCalled = true;
        }
        setup();
        $element.find(".decrement-life").click();
      });

      it("is called when the decrement button is clicked", () => {
        expect(onDecrementCalled).toBe(true);
      });
    });

    describe("onDecrement", () => {
      let onIncrementCalled = false;
      beforeEach(() => {
        $scope.onIncrement = () => {
          onIncrementCalled = true;
        };
        setup();
        $element.find(".increment-life").click();
      });

      it("is called when the increment button is clicked", () => {
        expect(onIncrementCalled).toBe(true);
      });
    });
  });
});
