export function DtaDragDirective () {
  return {
    scope: {
      dtaDrag: '&'
    },
    restrict: 'A',
    link: function (scope, element, attrs) {
      // set draggable
      element.attr('draggable', true)
      // handle drag event
      element.on('dragstart', evt => {
        scope.$apply(function () {
          scope.dtaDrag()
        })
      })
    }
  }
}
