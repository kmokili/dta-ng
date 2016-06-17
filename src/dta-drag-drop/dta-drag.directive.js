export function DtaDragDirective () {
  return {
    scope: {
      dtaDrag: '&'
    },
    restrict: 'A',
    link: function (scope, element, attrs) {
      // set draggable
      element[0].setAttribute('draggable', true)
      // handle drag event
      element[0].addEventListener('dragstart', evt => {
        scope.$apply(function () {
          scope.dtaDrag()
        })
      }, false)
    }
  }
}
